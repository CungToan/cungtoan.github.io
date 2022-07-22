const menuBar = document.getElementById('drop-menu');
const menuDetail = document.getElementById('tab-detail');
const sortBar = document.getElementById('sort-menu');
const sortBarDetail = document.getElementById('sort-tab');

function activeTab(){
    menuDetail.classList.add('activeBox')
}
function activeSortTab(){
    sortBarDetail.classList.add('activeSortBox')
}

menuBar.onclick = activeTab;
sortBar.onclick = activeSortTab;