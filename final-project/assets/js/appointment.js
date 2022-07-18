const availDay = document.querySelector('.avail-oppointment');
const notiBox = document.getElementById('noti-event');

function activeBox(){
    notiBox.classList.add('activeBox')
}
availDay.onclick = activeBox;