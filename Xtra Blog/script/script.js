let bar = document.getElementsByClassName("links")[0];
let asideBar = document.getElementsByTagName("aside")[0];
bar.onclick = () => {
  bar.classList.toggle("show")
  asideBar.classList.toggle("aside-show")
}
