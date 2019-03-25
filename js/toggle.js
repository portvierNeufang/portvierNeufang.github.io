function showHeader() {
    var element = document.getElementById("Header");
    element.style.display = "block";
}

function hideHeader() {
    var element = document.getElementById("Header");
    element.style.display = "none";
} 

function showMenu() {
    var element = document.getElementById("Menu");
    element.style.display = "block";
    slideDownMenu();
}

function slideDownMenu() {
    var elem = document.getElementById("Menu");   
    var pos = -100;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "vh"; 
      }
    }
  }

function slideUpMenu() {
    var elem = document.getElementById("Menu");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == -100) {
        elem.style.display = "none";
        clearInterval(id);
      } else {
        pos--; 
        elem.style.top = pos + "vh"; 
      }
    }
  }

function hideMenu() {
    slideUpMenu();
}

function toggleMenu() {
    var element = document.getElementById("Menu");
    if(element.style.display === "none")
    {
        showMenu();
        hideHeader();
        hideKurse();
        hideTimes();
        hideContact();
    }
    else
    {
        hideMenu();
        showHeader();
    }
}

function slideRightCourse() {
    var elem = document.getElementById("Kurse");   
    var pos = -100;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + "vw"; 
      }
    }
  }

function slideLeftCourse() {
    var elem = document.getElementById("Kurse");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == -100) {
        elem.style.display = "none";
        clearInterval(id);
      } else {
        pos--; 
        elem.style.left = pos + "vw"; 
      }
    }
  }

function showKurse() {
    var element = document.getElementById("Kurse");
    element.style.display = "block";
    slideRightCourse();
}

function hideKurse() {
    slideLeftCourse();
}

function toggleKurse() {
    var element = document.getElementById("Kurse");
    if(element.style.display === "none")
    {
        showKurse();
        hideMenu();
        showHeader();
        hideTimes();
        hideContact();
    }
    else
    {
        hideKurse();
    }
}

function slideRightTimes() {
    var elem = document.getElementById("Times");   
    var pos = -100;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + "vw"; 
      }
    }
  }

function slideLeftTimes() {
    var elem = document.getElementById("Times");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == -100) {
        elem.style.display = "none";
        clearInterval(id);
      } else {
        pos--; 
        elem.style.left = pos + "vw"; 
      }
    }
  }

function showTimes() {
    var element = document.getElementById("Times");
    element.style.display = "block";
    slideRightTimes();
}


function hideTimes() {
    slideLeftTimes();
}

function toggleTimes() {
    var element = document.getElementById("Times");
    if(element.style.display === "none")
    {
        showTimes();
        hideMenu();
        showHeader();
        hideKurse();
        hideContact();
    }
    else
    {
        hideTimes();
    }
}

function slideRightContact() {
    var elem = document.getElementById("Contact");   
    var pos = -100;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + "vw"; 
      }
    }
  }

function slideLeftContact() {
    var elem = document.getElementById("Contact");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == -100) {
        elem.style.display = "none";
        clearInterval(id);
      } else {
        pos--; 
        elem.style.left = pos + "vw"; 
      }
    }
  }

function showContact() {
    var element = document.getElementById("Contact");
    element.style.display = "block";
    slideRightContact();
}


function hideContact() {
    slideLeftContact();
}

function toggleContact() {
    var element = document.getElementById("Contact");
    if(element.style.display === "none")
    {
        showContact();
        hideMenu();
        showHeader();
        hideKurse();
        hideTimes();
    }
    else
    {
        hideContact();
    }
}

function hideElements() {
    var element = document.getElementById("Menu");
    element.style.display = "none";
    element = document.getElementById("Kurse");
    element.style.display = "none";
    element = document.getElementById("Times");
    element.style.display = "none";
    element = document.getElementById("Contact");
    element.style.display = "none";
    hideMenuFlower();
}

function invertButton(obj) {
    obj.style.backgroundColor = "#382E28"; 
    obj.style.color = "#BD8C6E";
}

function resetButton(obj) {
    obj.style.backgroundColor = "#BD8C6E"; 
    obj.style.color = "#000000";
}

function invertFacebookButton(obj) {
    obj.src = "img/svg/FacebookHover.svg";
}

function resetFacebookButton(obj) {
    obj.src = "img/svg/Facebook.svg";
}

function invertInstagramButton(obj) {
  obj.src = "img/svg/InstagramHover.svg";
}

function resetInstagramButton(obj) {
  obj.src = "img/svg/Instagram.svg";
}

function showMenuFlower(obj) {
  var flower = document.getElementById("MenuFlower");
  console.log("top" + obj.offsetTop);
  flower.style.top = obj.offsetTop + "px";
  flower.style.display = "block";
}



function drawMiddleLine(){
  console.log("DrawLine");
  var line = document.getElementById("line");
  var midline = document.getElementById("midline");
  var body = document.body,
  html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  console.log(height);
  line.style.height = height + "px";
  midline.style.y2 = height + "px";
}

function hideMenuFlower() {
  if(document.getElementById("MenuFlower") != null) {
    var flower = document.getElementById("MenuFlower");
    flower.style.display = "none";
  }
  
}