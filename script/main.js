let theme = document.querySelector('#theme');
let toggleTheme = document.querySelector('#toggle-theme');
let mode = localStorage.getItem('mode');
theme.setAttribute('href', '/theme/'+mode+'.css');
toggleTheme.onclick = () => {
   if (theme.getAttribute('href') == '/theme/light.css') {
      theme.setAttribute('href', '/theme/dark.css');
      localStorage.setItem('mode', 'dark')
   } else {
      theme.setAttribute('href', '/theme/light.css');
      localStorage.setItem('mode', 'light')
   }
}


//run
let run = document.querySelectorAll('run');
run.forEach(x => {
   var src = x.getAttribute('src');
   var name = x.getAttribute('name');
   if (name == undefined) {
      name = src;
   }
   x.innerHTML = `<div><div><span></span><span></span><span></span></div><div>${name}<div></div></div></div><iframe src="${src}"></iframe>`;
});