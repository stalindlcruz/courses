let modal = document.getElementById('dialog')
let show = document.getElementById('show')
let hide = document.getElementById('hide')

window.addEventListener('load', () => {
  modal.style = 'display:none'
})

show.addEventListener('click', () => {
    modal.style = 'display:block'
  })

hide.addEventListener('click', () => {
    modal.style = 'display:none'
  })