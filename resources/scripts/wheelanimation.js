const modelViewer = document.querySelector("#wheel");
const background = document.querySelector("#background");
var x = 1;
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
window.addEventListener('scroll', function(){
    var value = window.scrollY;
    var yScroll = value/vh;
    if (yScroll <= 0){
        modelViewer.cameraOrbit = `0deg 0deg 100%`;
        background.style.top = "0%";
    }
    else if (yScroll <= 1){
        modelViewer.cameraOrbit = `0deg 70deg 100%`;
        modelViewer.fieldOfView = "25deg";
        background.style.top = "100%";
    }
    else if (yScroll <= 2){
        modelViewer.cameraOrbit = `0deg 85deg 30%`;
        modelViewer.fieldOfView = "20deg";
        background.style.top = "40%";

    }
        
    document.getElementById('scrollCount').innerHTML= value + " " + x +" " + vh + " " + yScroll + " " + modelViewer.getCameraOrbit();
    
    x+=1;
})