var mode = eval(localStorage.getItem('darkmode'));
var TC = document.querySelector('meta[name="theme-color"]');
if (mode == undefined) {
   mode = false;
   localStorage.setItem('darkmode', mode);
}
let M = Mushroom();
M.setColor("hsl(90,50%,50%)");
M.setDarkmode(mode);
M.setPalette("true");
M.setReversePalette("false");
M.setColorScheme("Monochromatic");
TC.setAttribute('content',M.themeColor.surface);
function Darkmode() {
   M.toggleMode();
   localStorage.setItem('darkmode', M.darkmode);
   TC.setAttribute('content',M.themeColor.surface);
}
function Menu() {
   var menu = document.querySelector('menu');
   var menuBackdrop = document.querySelector('menu-backdrop');
   menu.classList.toggle('on');
   menuBackdrop.classList.toggle('on');
   menuBackdrop.onclick = () => {
      menu.classList.toggle('on');
      menuBackdrop.classList.toggle('on');
   }
}