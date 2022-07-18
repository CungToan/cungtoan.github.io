const launchBtn = document.querySelector('.launch-btn');
const modalBox =document.getElementById('modal-box');
const closeBtn = document.querySelector('.close');
const escBtn = document.querySelector('.escape-btn')
const wrapperOverlay = document.querySelector('.bg-overlay');

// function backgroundDefault(){
//     document.body.style.backgroundColor = '#fff';
// }
// function overlayBg(){
//     document.body.style.backgroundColor = 'rgba(0,0,0,0.5)';
// }


function activeBox(){
    modalBox.classList.add('activeModalBox');
    wrapperOverlay.classList.add('activeOverlay')
    overlayBg();
}

function removeBox(){
    modalBox.classList.remove('activeModalBox');
    modalBox.classList.add('removeModalBox');
    wrapperOverlay.classList.remove('activeOverlay')
    backgroundDefault()

}

launchBtn.onclick = activeBox;
closeBtn.onclick = removeBox;
escBtn.onclick = removeBox;
