window.onresize = ChangeMenu;
function ChangeMenu() {
    var g = document.getElementById("TagGroup");
    var b = document.getElementById("ShowSideNav");
    var bar = document.getElementById('SideNavBar');
    var sp = document.getElementById('SausagePicture');
    var smcon = document.getElementById('Menu');
    sp.style.width = "350px";
    sp.style.top = '0px';
    if (getViewport()[0] < 950) {
        b.style.display = "block";
        g.style.display = "none";
        smcon.style.padding = "0px";
        smcon.style.height = '40px';
    }
    else {
        b.style.display = "none";
        g.style.display = "block";
        bar.style.width = "0%";
        smcon.style.padding = "10px 15px 15px 5%";
        smcon.style.height = '60px';
    }
}
function SetMenu() {
   
    if (!window.DirectoryLevel) {
        window.DirectoryLevel = 0;
    }
    prefix = "./";
    for (var i = 0; i < window.DirectoryLevel; i++) {
        prefix = "."+prefix;
    }
    document.getElementById("MenuPosition").outerHTML = readTextFile(prefix+"Contents/SiteHeader.html");
    document.getElementById("FooterPosition").outerHTML = readTextFile(prefix +"Contents/SiteFooter.html");
    
    ChangeMenu();
}
function HideAd() {
    (function ($) {
        setInterval(() => {
            $.each($('iframe'), (arr, x) => {
                let src = $(x).attr('src');
                if (src && src.match(/(ads-iframe)|(disqusads)/gi)) {
                    $(x).remove();
                }
            });
        }, 300);
    })(jQuery);
}
function SetHeader() {
    if (!window.DirectoryLevel) {
        window.DirectoryLevel = 0;
    }
    prefix = "./";
    for (var i = 0; i < window.DirectoryLevel; i++) {
        prefix = "." + prefix;
    }
    document.getElementById("MenuPosition").outerHTML = readTextFile(prefix +"Contents/SiteHeader.html");
    
    ChangeMenu();
}
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    var ttt;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                ttt = allText;
                
            }
        }
    }
    rawFile.send(null);
    return ttt;
}
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function Setiframe() {
    if (getParameterByName("page") == undefined) { BarNavigate("./Home.html") }
    
    
    document.getElementsByTagName("iframe")[0].src = getParameterByName("page");
}
function BarNavigate(t) {
    window.location.href = './index.html?page=' + encodeURI(t);
}
function Navigate(t) {
    window.location.href = t;
}
function getViewport() {

 var viewPortWidth;
 var viewPortHeight;

 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
     if (typeof window.innerWidth != 'undefined') {
       viewPortWidth = window.innerWidth,
       viewPortHeight = window.innerHeight
    }

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'&& typeof document.documentElement.clientWidth !='undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
        viewPortHeight = document.documentElement.clientHeight
    } 

 // older versions of IE
    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
        viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
 return [viewPortWidth, viewPortHeight];
}
function resizeIframe(obj) {
var h=(getViewport()[1]-80) + 'px';

    obj.style.height = h;

}
function ShowNav() {
    var bar = document.getElementById('SideNavBar');
    var bd = document.getElementsByTagName('body')[0];
    if (bar.style.width != "80%") {
        bar.style.width = "80%";
        
    }
    else {
        bar.style.width = "0%";
        
    }
}
function hideTags(){

document.getElementById("TagGroup").style.display="none";
document.getElementById("Menu").setAttribute("style","height:500px");
}