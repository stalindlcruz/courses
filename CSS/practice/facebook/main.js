
const open_modal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const frm = document.getElementById('form-1');

frm.addEventListener('submit',(event)=>{
    event.preventDefault();
})
open_modal.addEventListener('click', (event)=>{
    event.preventDefault();
    modal.style.display = 'block';
})

modal.addEventListener('click', (event)=>{
    event.preventDefault();
    if (event.target.id != 'modal') {
        return;
    }
    modal.style.display = 'none';
})

