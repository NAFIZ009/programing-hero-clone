// navbar functionality
let prevPosition=window.pageYOffset;
window.addEventListener('scroll',()=>{
    let currentPosition=window.pageYOffset;
    if(prevPosition>currentPosition){
        document.getElementById('navBar').style.top="0px";
    }else{
        document.getElementById('navBar').style.top="-93px";
    }
    prevPosition = currentPosition;
});