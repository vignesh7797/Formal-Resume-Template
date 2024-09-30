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

  if(e.target != menuBtn && e.target.parentElement !=menuBtn){
    hideMenu();
  }
});




function copytoClipboard(id){
  let ele = document.getElementById(id)

  if(ele){
    navigator.clipboard.writeText(ele.innerText)
  }
  
}

function changeTheme() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'light';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'dark'
  }
}