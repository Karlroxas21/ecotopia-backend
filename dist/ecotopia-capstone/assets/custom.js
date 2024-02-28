const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onClick = function (){
  dropdownMenu.classList.toggle('open')
  const isOpen= dropdownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? '<i class="ri-menu-line"></i>'
  : '<i class="ri-close-line"></i>'
}