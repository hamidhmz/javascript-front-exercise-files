//248 index31
document.cookie = 'login=true';
console.dir(document.cookie);
function cCookie(name,value,days){
    var e = '';
    if(days){
        var d = new Date();
        d.setTime(d.getTime()+(days*24*60*60*1000));
        e = ";expires="+d.toUTCString();
    }
    document.cookie = name + "=" + value + e + "; path=/";
}

function rCookie(name) {
    var p = name + "=";
    var c = document.cookie.split(';');
    for (var x = 0; x < c.length; x++) {
        //var t = c[x].charAt(0) == ' ' ? c[x].substring(1)   : c[x];
        // var t = c[x].trim();
        var t = c[x].replace(/^\s+|\s+$/gm, '');
        if (t.indexOf(p) == 0) {
            return t.substring(p.length, t.length);
        }
    }
    return "";
}

function dCookie(name) {
    cCookie(name, "", -1);
}