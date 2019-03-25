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
}

function hideMenu() {
    var element = document.getElementById("Menu");
    element.style.display = "none";
}

function toggleMenu() {
    var element = document.getElementById("Menu");
    if(element.style.display === "none")
    {
        hideHeader();
        showMenu();
        hideKurse();
        hideTimes();
        hideContact();
    }
    else
    {
        showHeader();
        hideMenu();
    }
}

function showKurse() {
    var element = document.getElementById("Kurse");
    element.style.display = "block";
}

function hideKurse() {
    var element = document.getElementById("Kurse");
    element.style.display = "none";
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

function showTimes() {
    var element = document.getElementById("Times");
    element.style.display = "block";
}


function hideTimes() {
    var element = document.getElementById("Times");
    element.style.display = "none";
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

function showContact() {
    var element = document.getElementById("Contact");
    element.style.display = "block";
}


function hideContact() {
    var element = document.getElementById("Contact");
    element.style.display = "none";
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
}

function invertButton(obj) {
    obj.style.backgroundColor = "#382E28"; 
    obj.style.color = "#BD8C6E";
}

function resetButton(obj) {
    obj.style.backgroundColor = "#BD8C6E"; 
    obj.style.color = "#000000";
}

function invertMenuButton(obj) {
    obj.style.backgroundColor = "#ffffff";
}

function resetMenuButton(obj) {
    obj.style.backgroundColor = "#000000"; 
}