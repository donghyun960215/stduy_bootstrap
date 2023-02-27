import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'

//dropdown
const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})

//modal
const myModal = new Modal(document.getElementById('#exampleModal'), {
  backdrop: 'static'
})