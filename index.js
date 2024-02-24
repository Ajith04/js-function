function add(){
    var x, y, z;
    x=parseFloat(document.getElementById("no1").value);
    y=parseFloat(document.getElementById("no2").value);
    z=x+y;
    document.getElementById("total").value=z;
    


document.getElementById("second").textContent=z;
}


