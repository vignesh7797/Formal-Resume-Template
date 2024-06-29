function showMenu() {
  let menu = document.getElementById('menu');
  if(menu){
    menu.hidden = !menu.hidden
  }
}

function hideMenu(){
  let menu = document.getElementById('menu');
  if(menu){
    menu.hidden = true
  }
}

document.addEventListener("click", function (e) {
  let menuBtn = document.getElementById('menu-btn');

  if(e.target != menuBtn){
    hideMenu();
  }
});


function copytoClipboard(id){
  let ele = document.getElementById(id)

  if(ele){
    navigator.clipboard.writeText(ele.innerText)
  }
  
}