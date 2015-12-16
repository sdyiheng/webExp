$("#btn").click(measureSize);

function measureSize()
{
    var info = "document.body.clientHeight:" + document.body.clientHeight;
    info += "<br/>document.body.clientWidth:" + document.body.clientWidth;
    info += "<br/>document.body.clientTop:" + document.body.clientTop;
    info += "<br/>document.body.clientLeft:" + document.body.clientLeft;

    info += "<br/>";
    info += "<br/>document.body.scrollHeight:" + document.body.scrollHeight;
    info += "<br/>document.body.scrollWidth:" + document.body.scrollWidth;
    info += "<br/>document.body.scrollTop:" + document.body.scrollTop;
    info += "<br/>document.body.scrollLeft:" + document.body.scrollLeft;

    info += "<br/>";
    info += "<br/>document.body.offsetWidth:" + document.body.offsetWidth;
    info += "<br/>document.body.offsetHeight:" + document.body.offsetHeight;
    info += "<br/>document.body.offsetTop:" + document.body.offsetTop;
    info += "<br/>document.body.offsetLeft:" + document.body.offsetLeft;
    info += "<br/>document.body.offsetParent:" + document.body.offsetParent;

    info += "<br/>";

    var btn = document.getElementById("btn");
    info += "<br/>btn.clientHeight:" + btn.clientHeight;
    info += "<br/>btn.clientWidth:" + btn.clientWidth;
    info += "<br/>btn.clientTop:" + btn.clientTop;
    info += "<br/>btn.clientLeft:" + btn.clientLeft;

    info += "<br/>";
    info += "<br/>btn.scrollHeight:" + btn.scrollHeight;
    info += "<br/>btn.scrollWidth:" + btn.scrollWidth;
    info += "<br/>btn.scrollTop:" + btn.scrollTop;
    info += "<br/>btn.scrollLeft:" + btn.scrollLeft;

    info += "<br/>";
    info += "<br/>btn.offsetWidth:" + btn.offsetWidth;
    info += "<br/>btn.offsetHeight:" + btn.offsetHeight;
    info += "<br/>btn.offsetTop:" + btn.offsetTop;
    info += "<br/>btn.offsetLeft:" + btn.offsetLeft;
    info += "<br/>btn.offsetParent:" + btn.offsetParent;

    info += "<br/>";
    info += "<br/>btn.width:" + btn.width;
    info += "<br/>btn.height:" + btn.height;


    info += "<br/>";
    info += "<br/>window.innerWidth:" + window.innerWidth;
    info += "<br/>window.innerHeight:" + window.innerHeight;
    info += "<br/>window.outerWidth:" + window.outerWidth;
    info += "<br/>window.outerHeight:" + window.outerHeight;

    info += "<br/>";
    info += "<br/>window.screenTop:" + window.screenTop;
    info += "<br/>window.screenLeft:" + window.screenLeft;

    info += "<br/>";
    info += "<br/>window.screen.availHeight:" + window.screen.availHeight;
    info += "<br/>window.screen.availWidth:" + window.screen.availWidth;
    $("#info").html(info);
}