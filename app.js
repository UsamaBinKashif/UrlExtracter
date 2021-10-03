function mobilePress(e) {
    e.target.value = e.target.value.replace(/[^d]/g, '');
    return false;
}


function myFunction(event) {
    let url = document.getElementById('ip').value;
    let exurl = (new URL(url));
    let domian = exurl.hostname;
    document.getElementById('rs1').innerHTML = ('<span style="color:#FFC107;">Domain is : </span>' + ' ' + domian + '<br> <br>');
    let change = domian.replace('www.', ' ');
    document.getElementById('rs2').innerHTML = ('<span style="color:#FFC107;">Host name is : </span>' + ' ' + change);




}
