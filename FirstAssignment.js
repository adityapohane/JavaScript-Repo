function erase(){
   
    var a=document.getElementById("firstno").value="";
    var b=document.getElementById("Secondno").value="";
    var b=document.getElementById("Result").value="";
}

function add(){
    alert("THis function is for addition");
    var a=document.getElementById("firstno").value;
    var b=document.getElementById("Secondno").value;

    var c=parseInt(a)+parseInt(b);
    document.getElementById("Result").value=c;
}
function sub(){
    alert("THis function is for subtraction");
    var a=document.getElementById("firstno").value;
    var b=document.getElementById("Secondno").value;

    var c=parseInt(a)-parseInt(b);
    document.getElementById("Result").value=c;
}
function div(){
    alert("THis function is for division");
    var a=document.getElementById("firstno").value;
    var b=document.getElementById("Secondno").value;

    var c=parseInt(a)/parseInt(b);
    document.getElementById("Result").value=c;
}
function multi(){
    alert("THis function is for multiplication");
    var a=document.getElementById("firstno").value;
    var b=document.getElementById("Secondno").value;

    var c=parseInt(a)*parseInt(b);
    document.getElementById("Result").value=c;
    console.log(c);
}