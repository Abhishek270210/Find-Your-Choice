function refresh()
{
    var tm=1000;
    setTimeout("display()",tm);
}
function display()
{
    var td=new Date();
    document.getElementById("datetime").innerHTML=td.toLocaleTimeString();
    refresh();
}