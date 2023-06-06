let body = document.body;
let href = window.location.href;
let p = document.querySelector('p');

href = href.replace('http://', '');
href = href.replace('https://', '');
p.innerHTML = 'صفحه ای با آدرس "' + href + '" وجود ندارد!' + '<br>' + 'لطفاً به <a href="https://leafweb.github.io"/>این آدرس</a> بروید';

var num = 400;
setInterval(() => {
   var dur = Math.floor(Math.random() * 3000 + 5000);
   var span = document.createElement("span");
   var delay = Math.floor(Math.random() * 2000);
   var r = Math.floor(Math.random()*2);
   var dir = r == 0 ? 'Left' : 'Right';
   span.classList.add('leaf');
   body.appendChild(span);
   span.style.left = Math.random() * Number(window.innerWidth) + "px";
   span.style.padding = Math.random() * 30 + 15 + "px";
   span.style.animationName = 'top, rotate' + dir;
   span.style.animationDuration = dur + 'ms';
   span.style.animationDelay = delay + 'ms, 0';
   span.style.animationFillMode = 'both';
   span.style.animationDirection = 'ease-in';
   setTimeout(() => {
      span.remove();
   }, delay + dur);
}, num);