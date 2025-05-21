const img=document.querySelectorAll('.header-slider ul img')
const prev_btn=document.querySelector('.control_prev')
const next_btn=document.querySelector('.control_next')

let n;

function changeSlide(){
    for(let i=0;i<img.length;i++){
        img[i].style.display='none'
    }
    img[n].style.display='block'
}


prev_btn.addEventListener("click",()=>{
    if(n>0){
        n--
    }
    else{
        n=img.length-1
    }
    changeSlide();
})

next_btn.addEventListener("click",()=>{
    if(n<img.length-1){
        n++
    }
    else{
        n=0
    }
    changeSlide()
})