$("#btn").click(measureSize);

function measureSize() {

    var doc = $("body");
    var info = "doc.width:" + doc.width();
    info += "<br/>doc.height:" + doc.height();
    info += "<br/>doc.innerWidth:" + doc.innerWidth();
    info += "<br/>doc.innerHeight:" + doc.innerHeight();
    info += "<br/>doc.outerWidth:" + doc.outerWidth();
    info += "<br/>doc.outerHeight:" + doc.outerHeight();
    info += "<br/>doc.outerWidth(true):" + doc.outerWidth(true);
    info += "<br/>doc.outerHeight(true):" + doc.outerHeight(true);



    $("#info").html(info);
}