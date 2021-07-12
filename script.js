gsap.to("#bg", {
    scrollTrigger : {
        scrub: 1
    },
    scale: 3
});
gsap.to("#man", {
    scrollTrigger : {
        scrub: 1
    },
    scale: 0.5
});
gsap.fromTo(
    "#text",
    {scale: 0},
    {scale: 1, duration: 1.5},
);
gsap.to("#text", {
    scrollTrigger : {
        scrub: 1
    },
    y: 800
});
gsap.to("#text1", {
    scrollTrigger : {
        scrub: 1
    },
    y: 700
});
gsap.to("#left_mountain", {
    scrollTrigger : {
        scrub: 1
    },
    x: -900
});
gsap.to("#right_mountain", {
    scrollTrigger : {
        scrub: 1
    },
    x: 900
});
gsap.to("#cloud1", {
    scrollTrigger : {
        scrub: 1
    },
    x: 500
});
gsap.to("#cloud2", {
    scrollTrigger : {
        scrub: 1
    },
    x: -300
});

// gsap.to(".project", {
//     scrollTrigger : {
//         scrub: 5,
//         start: 'top center',
//         end: 'bottom center'
//     },
//     x: '-90%'
// });

// gsap.registerPlugin(ScrollTrigger);
// var tltwo = gsap.timeline({ scrollTrigger: { trigger: ".project" } })
// .to(".project", {scale: 0}).to(".project", {scale: 0.5, duration: 1.5})
// // .fromTo(".project", {scale: 0}, {scale: 1, duration: 1.5});

// gsap.to(".project", {
//     scrollTrigger : {
//         scrub: 1
//     },
//     scale: 1.5
// });
// gsap.fromTo(
//     ".project",
    
//     {scale: 0}, {scale: 1, duration: 1.5},
// );

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


