// W3S - https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// W3S - https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Dark mode toggle
function toggleDarkMode() {
  HTMLelement = document.documentElement;
  if (HTMLelement.getAttribute("theme") != "dark-mode") {
    HTMLelement.setAttribute("theme", "dark-mode");
    setCookie("theme","dark-mode",365);
  } else {
    HTMLelement.setAttribute("theme", "light-mode");
    setCookie("theme","light-mode",365);
  }
}

// Cookie system (onload="handleCookies()")
function handleCookies() {
  console.log("page loaded... handling cookies");
  HTMLelement = document.documentElement;
  theme = getCookie("theme");
  if (theme == "light-mode" || theme == "") {
    HTMLelement.setAttribute("theme", "light-mode");
  } 
  else if (theme == "dark-mode") {
    HTMLelement.setAttribute("theme", "dark-mode");
  }
}
