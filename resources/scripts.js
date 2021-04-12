function toggleDarkMode() {
  HTMLelement = document.documentElement
  if (HTMLelement.getAttribute("theme") != "dark-mode") {
    HTMLelement.setAttribute("theme", "dark-mode");
  } else {
    HTMLelement.setAttribute("theme", "light-mode");
  }
}
