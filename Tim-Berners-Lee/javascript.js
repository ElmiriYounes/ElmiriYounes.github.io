const section = document.querySelectorAll(".container > *");
const iconsSocial = document.querySelectorAll(".icon-social");
const btnLightSwitch = document.querySelector(".light-switch"); // btn for dark mode
const btnLightSwitchIcon = document.querySelectorAll(
  ".light-switch > .fa-solid"
);
let night = getCookie("night");
const eventHover = ['mouseenter', 'mouseleave'];


/** Functions **/

function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

function darkMode (){
  document.querySelector("body").classList.toggle("night-body");
  for (const item of section) {
    item.classList.toggle("night-sections");
    item.classList.toggle("light-sections");
  }
  console.log('r')
  for (const item of iconsSocial) {
    item.classList.toggle("night-social");
  }
}



if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  if (night == null) {
    document.cookie = "night=true;secure";
  } else if (night != "true") {
    setCookie("night", 'true', 30);
  }
  darkMode()
}else{
  if (night == null) {
    document.cookie = "night=false;secure";
  } else if (night == "true") {
    darkMode()
  }
}
// let cookie = document.cookie;
// setCookie('username', 'john', 30);
// document.cookie = "night=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
// console.log(document.cookie)
// console.log(getCookie('night'))
// setCookie('night', 'true', 30);
// console.log(getCookie("night"));
// console.log(document.cookie);

for (const item of section) {
  for (const event of eventHover) {
    item.addEventListener(event, () => {
      item.querySelector(".bg-hover").classList.toggle("on-hover");
      item.querySelector(".bg-hover2").classList.toggle("on-hover");
    });
  }
}

btnLightSwitch.addEventListener("click", () => {
  night = getCookie("night");
  if (night == 'true') {
    setCookie("night", 'false', 30);
  } else  {
    setCookie("night", 'true', 30);
  }
  for (const item of btnLightSwitchIcon) {
    item.classList.toggle("hidden");
  }
  darkMode()
});