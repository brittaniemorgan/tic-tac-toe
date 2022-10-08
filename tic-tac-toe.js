window.onload = boot;

function boot(){
    console.log("boot");
    document.querySelectorAll("#board div").forEach(el => el.className = "square");
}
