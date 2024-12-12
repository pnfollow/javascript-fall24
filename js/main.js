const variables = ["full-menu", "show-menu", "close-btn"]; 


  
document.getElementById("show-menu").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("full-menu").style.display = "block";
}

document.getElementById("close-btn").addEventListener("click", closebtn);

function closebtn() {
    document.getElementById("full-menu").style.display = "none";
}
