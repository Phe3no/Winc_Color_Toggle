const myImg = document.getElementById("menu-area");
const menuList = document.getElementById("menu-list");
const menuItems = Array.from(menuList.getElementsByTagName("li"));

const keyListener = function () {
  document.addEventListener("keydown", function (event) {
    //same trick as in the function menuListMouseAction, this time a for-loop
    for (i = 1; i <= menuItems.length; i++) {
      if (event.key == i) {
        const styleList = getComputedStyle(menuItems[i - 1]);
        document.getElementById("main-area").style.backgroundColor =
          styleList.backgroundColor;

        //same trick as in the function menuListMouseActions, duplicate code
        const spanList = Array.from(
          menuItems[i - 1].getElementsByTagName("span")
        );
        let text = "";
        spanList.forEach(function (span) {
          text += span.innerHTML + " ";
        });
        document.getElementById("main-area-para").innerHTML =
          "The color picked from the menu is " + text;
      }
    }
  });
};

const menuClassShow = function () {
  document
    .getElementById("menu-list")
    .classList.replace("menu-list-hide", "menu-list-show");
  document.getElementById("menu-list").style.visibility = "visible";
};

const menuClassHide = function () {
  document
    .getElementById("menu-list")
    .classList.replace("menu-list-show", "menu-list-hide");
  document.getElementById("menu-list").style.visibility = "hidden";
};

const closeMenuListener = function () {
  myImg.addEventListener("mouseout", function () {
    menuClassHide();
    document.getElementById("main-area-h3").innerHTML =
      "You can only change the color with the keyboard, while the menu is visible";
  });
};

const openMenuListener = function () {
  myImg.addEventListener("mouseover", function () {
    menuClassShow();
    document.getElementById("main-area-h3").innerHTML =
      "You can now change the color with the keyboard <br> (1 for gray, 2 for red, etc...)";
  });
  //if you want to be able to change colors with keyboard, even if menu not showing..
  //place the next line of code at the bottom of this page and get rid of the -main-area-h3.innerHTML's
  // in the open- and closeMenuListener functions.
  keyListener();
  closeMenuListener();
};

const menuListMouseActions = function () {
  menuItems.forEach(function (link) {
    link.addEventListener("click", function () {
      //get the stylelist of the link, pick the backgroundColor and asign it to the main-area
      const styleList = getComputedStyle(link);
      document.getElementById("main-area").style.backgroundColor =
        styleList.backgroundColor;

      //grab the text from the span's in the link and asign it to the main-area-para
      //Home Gray is just to practice forEach, that isn't too bad
      const spanList = Array.from(link.getElementsByTagName("span"));
      let text = "";
      spanList.forEach(function (span) {
        text += span.innerHTML + " ";
      });
      document.getElementById("main-area-para").innerHTML =
        "The color picked from the menu is " + text;

      //close the menu after picking...
      menuClassHide();
    });
  });
};

openMenuListener();
menuListMouseActions();
