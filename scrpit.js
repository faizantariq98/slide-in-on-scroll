const sliderImges=document.querySelectorAll('.slide-in');

function debounce(func,wait=20,immediate=true){
    var timeout;
    return function(){
        var context=this, args=arguments;
        var later=function(){
            timeout=null;
            if(!immediate)func.apply(context,args)
        }
        var callNow=immediate && !timeout;
        clearTimeout(timeout);
        timeout=setTimeout(later,wait);
        if (callNow) func.apply(context, args);
    }
}

function checkSlide(e){
    sliderImges.forEach(sliderImage=>{
        console.log(sliderImage.height);
        const slideInAt=(window.scrollY+window.innerHeight)-sliderImage.height/2;
        const imageBottom=sliderImage.offsetTop+sliderImage.height;
        const isHalfShown=slideInAt>sliderImage.offsetTop;
        const isNotScrollPast=window.scrollY < imageBottom;
        if(!isHalfShown && isNotScrollPast){
            sliderImage.classList.remove('active');
        }
        else{
            sliderImage.classList.add('active');
        }
    });
}

window.addEventListener('scroll',debounce(checkSlide));