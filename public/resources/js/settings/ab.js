function openIframe() {
  let iframe =
    '<iframe src="' +
    window.location.href +
    '" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px;border:none;" allowfullscreen=""></iframe>';
  let newWindow = window.open("about:blank");
  newWindow.document.write(iframe);
  newWindow.document.close();
  window.location.replace("https://nasa.gov");
}
function buffedIframe() {
    var myWindow1 = window.open(
        "",
        "myWindow1",
        "scrollbars=1,height=" + screen.availHeight + ",width=" + screen.availWidth
    );
    myWindow1.document.write(
        '<!DOCTYPE html>\n' +
        '<title>Classes</title>\n' +
        '<link rel="icon" href="https://ssl.gstatic.com/classroom/favicon.png"/>\n' +
        '<link rel="shortcut icon" href="https://ssl.gstatic.com/classroom/favicon.png"/>\n' +
        '<iframe src="' + window.location.href + '" ' +
        'frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px;" ' +
        'height="100%" width="100%"></iframe>\n' +
        '<script>alert("About:Blank was buffed!");<\/script>'
    );
    myWindow1.document.close();
    window.location.replace("https://nasa.gov");
}