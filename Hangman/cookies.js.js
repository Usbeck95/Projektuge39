"use strict";

function createCookies(name, value, days) {
    let expires;
    if(days) {
        let date = new Date();
        date.setTime(date.getTime() + (days *24 * 60 * 60 * 1000));
        expires = "; expires=" +date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires +"; path=/"; 
}

function readCookie(name) {
    let nameID = name + "=";
    let fi = document.cookie.split(";");
    for (let i = 0; i < fi .length; i++){
        let f = fi[i];
        while (f.charAt(0) == " ") {
            f = f.substring(1,f.length);
        }
        if (f.indexOf(nameID) == 0) {
            return f.substring(nameID.length, f.length);
        }
    }    
    return null;
}
function seCookie(name) {
    createCookies(name, "", -1);
}