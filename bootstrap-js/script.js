const launchBtn = document.querySelector('.launch-btn');
const modalBox =document.getElementById('modal-box');
const closeBtn = document.querySelector('.close');
const escBtn = document.querySelector('.escape-btn')


function backgroundDefault(){
    document.body.style.backgroundColor = '#fff';
}
function overlayBg(){
    document.body.style.backgroundColor = 'rgba(0,0,0,0.5)';
}
function activeBox(){
    modalBox.classList.add('activeModalBox');
    overlayBg();
}

function removeBox(){
    modalBox.classList.remove('activeModalBox');
    modalBox.classList.add('removeModalBox');
    backgroundDefault()

}

launchBtn.onclick = activeBox;
closeBtn.onclick = removeBox;
escBtn.onclick = removeBox;
