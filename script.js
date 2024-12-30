var typed = new typed(".text",{
    Strings:["Frontend Developer","Web Developer","Student"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

window.addEventListener('load', () => {
    const bars = document.querySelectorAll('.progress-line span');
    bars.forEach(bar => {
        bar.style.animationPlayState = 'running';
    });
});
