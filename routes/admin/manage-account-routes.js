require('dotenv').config();

const express = require("express");
const Account = require('../../model/manage-account.model');

const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.post('/admin-account-create', async(req, res) =>{
        try{
                const { username, password, email, full_name, phone_number, role, status } = req.body;
                if(!username || !password || !email || !full_name || !phone_number || !role){
                        return res.status(400).json({ message: "Please provide all required fields"});
                }

                // Password hash
                const hashedPassword = await bcrypt.hash(password, saltRounds);

                // For verifying the account
                const confirmationToken = crypto.randomBytes(20).toString('hex');
                
                const account = new Account({
                        username,
                        password: hashedPassword,
                        email,
                        full_name,
                        phone_number,
                        role,
                        status,
                        emailToken: confirmationToken,
                });

                sendConfirmationEmail(account);

                await account.save();

                res.status(201);
        }catch(err){
                console.error(err);
                res.status(500).json({ message: "Internal server error"});
        }
       
});

app.get('/admin-account-create', async (req, res) =>{
        try{
                const accounts = await Account.find();
                res.json(accounts);
        }
        catch(err){
                console.error(err);
                res.status(500).json({ message: "Internal server error"});
        }
});

app.get('/admin-account-create/:id', async (req, res) =>{
        try{
                const accounts = await Account.findById(req.params.id);
                res.send(accounts);
        }
        catch(err){
                console.error(err);
                res.status(500).json({ message: "Internal server error" });
        }
});

app.put('/admin-account-create/:id', async (req, res) =>{
        try{
                const account = await Account.findByIdAndUpdate(req.params.id,
                        req.body, { new: true});
                        res.send(account);
        }catch(err){
                console.error(err);
                res.status(500).json({ message: "Internal server error"});
        }
})

// Reset Password
app.put('/admin-account-create/reset-password/:id', async (req, res) =>{
        const { password } = req.body;

        try{
                // Password hash
                const hashedPassword = await bcrypt.hash(password, saltRounds);

                const account = await Account.findByIdAndUpdate(req.params.id,
                        { password: hashedPassword },
                        { new: true});

                        res.send(account);
        }catch(err){
                console.error(err);
                res.status(500).json({ message: "Internal server error"});
        }
})

app.delete('/admin-account-create/:id', async (req, res) =>{
        try{
                await Account.findByIdAndDelete(req.params.id);
                res.status(204).send();
        }
        catch(err){
                console.error(err);
                res.status(500).json({ message:"Internal server error"});
        }
})

// Confirming account
app.get('/confirm', async (req, res) =>{
        const emailToken = req.query.emailToken;

        try{
                await Account.findOneAndUpdate({ emailToken: emailToken }, { status: 'Verified'})
                res.status(200).json({ message:"Account verified!"})

        }catch(err){
                console.error(err);
                res.status(500).json({ message:"Internal server error"});
        }
})

function sendConfirmationEmail(account){
        const transporter = nodemailer.createTransport({
                host: 'smtp-mail.outlook.com',
                port: 587,
                secure: false,
                auth:{
                        user: process.env.OUTLOOK_USER_AUTH,
                        pass: process.env.OUTLOOK_PW_AUTH
                },
                tls: {
                        ciphers:'SSLv3'
                }
        });

        const baseURL = process.env.BASE_URL || 'localhost:4200';
        
        const mailOptions = {
                from: process.env.OUTLOOK_USER_AUTH,
                to: account.email,
                subject: `Ecotopia Admin Account Verification`,
                html: `<h1>Welcome to Ecotopia!</h1>
                <p>Your email has been added as an admin account for managing the website.</p>
                <p>Please click the button to verify your account: </p>
                <a href="http://${baseURL}/admin-account-create/confirmation?emailToken=${account.emailToken}" 
                style="background-color: #4CAF50; color: white; padding: 14px 20px; text-align: center; text-decoration: none; display: inline-block">
                Verify Your Account</a>
                <p>If you did not request this, please ignore this email.</p>
                <p>Best regards,</p>
                <p>The Ecotopia Team</p>`                
        };

        transporter.sendMail(mailOptions, (err, info) =>{
                if(err){
                        console.log(err);
                }else{
                        console.log('Email sent: ', info.response);
                }
        })

}

function sendResetPassword(account){
        const transporter = nodemailer.createTransport({
                host: 'smtp-mail.outlook.com',
                port: 587,
                secure: false,
                auth:{
                        user: process.env.OUTLOOK_USER_AUTH,
                        pass: process.env.OUTLOOK_PW_AUTH
                },
                tls: {
                        ciphers:'SSLv3'
                }
        });

        const baseURL = process.env.BASE_URL || 'localhost:4200';
        
        const mailOptions = {
                from: process.env.OUTLOOK_USER_AUTH,
                to: account.email,
                subject: `Ecotopia Admin Account Verification`,
                html: `<h1>Password Reset for account: ${account.username}</h1>
                <p>Please click the button to reset your account password: </p>
                <a href="google.com" 
                style="background-color: #4CAF50; color: white; padding: 14px 20px; text-align: center; text-decoration: none; display: inline-block">
                Reset Password</a>
                <p>If you did not request this, please ignore this email.</p>
                <p>Best regards,</p>
                <p>The Ecotopia Team</p>`                
        };

        transporter.sendMail(mailOptions, (err, info) =>{
                if(err){
                        console.log(err);
                }else{
                        console.log('Email sent: ', info.response);
                }
        })

}

module.exports = app;