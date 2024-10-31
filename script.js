window.addEventListener("wheel", (e) => {
    if(e. deltaY>0){
        gsap.to(".marquee",{
            x:"-200%",
            duration:2.9,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".marquee img", {
            rotate:180,
            duration:0.5,
            ease: "power4"
        })
    }
        else {
            gsap.to(".marquee", {
                x: "0%",
                duration: 2.9,
                repeat: -1,
                ease: "none"
            });
            gsap.to(".marquee img", {
                rotate: 0,
                duration:0.5,
                ease: "power4"
            });
        }
});