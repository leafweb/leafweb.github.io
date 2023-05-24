function doc(x) {
   return document.querySelector(x);
}
const html = doc('html');
const body = doc('body');
const header = doc('header');
const main = doc('main');
const footer = doc('footer');
const theme = doc('#theme');

function setTheme(tx) {
   localStorage.setItem('theme', tx);
   theme.setAttribute('href', '/theme/' + tx + '.css')
}

function getTheme() {
   if (localStorage.getItem('theme') == undefined) {
      localStorage.setItem('theme', 'light');
   } else {
      theme.setAttribute('href', '/theme/' + localStorage.getItem('theme') + '.css');
   }
}
getTheme()

fetch('/data/header.xml')
   .then(x => x.text())
   .then(y => {
      header.innerHTML = y;
      doc('#toggle-theme').onclick = () => {
         if (localStorage.getItem('theme') == 'light') {
            setTheme('dark')
         } else {
            setTheme('light')
         }
      }
      doc('#menu-bars').onclick = ()=>{
         doc('#backdrop').classList.toggle('on');
      }
      doc('#backdrop').onclick = () => {
         doc('#backdrop').classList.toggle('on');
      }
   })




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