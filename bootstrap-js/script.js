const launchBtn = document.querySelector('.launch-btn');
const modalBox =document.getElementById('modal-box');
const closeBtn = document.querySelector('.close');
const escBtn = document.querySelector('.escape-btn')

function activeBox(){
    modalBox.classList.add('activeModalBox');
}

function removeBox(){
    modalBox.classList.remove('activeModalBox');
    modalBox.classList.add('removeModalBox');

}

launchBtn.onclick = activeBox;
closeBtn.onclick = removeBox;
escBtn.onclick = removeBox;
