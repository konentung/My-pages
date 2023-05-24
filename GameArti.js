
document.getElementById("AP14B").addEventListener("click", AP14);
document.getElementById("GI2-8B").addEventListener("click", GI28B);


var mean = document.getElementById("mean");
var GI28A = document.getElementById("GI2-8art");
var AP14A = document.getElementById("AP14art");


function GI28B() {
    mean.style.display = "none";
    GI28A.style.display = "";
    AP14A.style.display = "none";

}

function AP14() {
    mean.style.display = "none";
    GI28A.style.display = "none";
    AP14A.style.display = "";
    
}