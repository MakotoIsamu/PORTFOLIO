customCrsr();
homepage();


function homepage(){
    const tl = gsap.timeline();

    tl.from('nav p' , {
        y:300,
        duration:0.8,
        opacity:0,
    })
    
    gsap.from('h1', {
        y:300,
        duration:0.8,
        opacity:0,
    })
    
    tl.from('#lastName h5', {
        y:-50,
        duration:0.5,
        opacity:0
    })
    
    tl.from('#availability h4' ,{
        y:-100,
        duration:0.5,
        opacity:0,
        stagger: 0.3
    })
    
    tl.from('#home_footer p' , {
        opacity:0,
        duration:0.8
    })
}

function customCrsr(){
    const mainEl = document.getElementById('main');
    const crsr = document.getElementById('cursor');
    mainEl.addEventListener('mousemove', function(e){
        crsr.style.left = e.clientX+'px';
        crsr.style.top = e.clientY+'px';
        crsr.style.opacity = 1;
    })
    mainEl.addEventListener('mouseleave', function(){
        crsr.style.opacity = 0;
    })
}
