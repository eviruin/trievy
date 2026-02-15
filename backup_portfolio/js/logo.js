
    ScrollTrigger.create({
        animation: gsap.from("logoImage", {
            x: "-50vh",
            y: "100vh",
            scale: 4,
            yPercent: -50,
        }),
        scrub: true,
        trigger:".about",
        start: "top bottom",
        endTrigger: ".content",
        end: "top center",
    });