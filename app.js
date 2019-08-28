const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

//function for GSAP for Object, time, {property for animation}
// const tween = TweenLite.to(".cover", 1, {
//   width: "40%"
// });

//function timelineLite
const tl = new TimelineLite({
  paused: true,
  reversed: true
});

tl.to(".cover", 1, {
  width: "60%",
  ease: Power2.easeOut
})
  .to(
    "nav",
    1,
    {
      height: "100%",
      ease: Power2.easeOut
    },
    "-= 0.5" //to start the animations at the same time is 1, or 0 to complete one after one
  )
  .fromTo(
    ".nav-open",
    0.5,
    {
      opacity: 0,
      x: 50,
      ease: Power2.easeOut
    },
    {
      opacity: 1,
      x: 0,
      onComplete: function() {
        navOpen.getElementsByClassName.pointerEvents = "auto";
        console.log("done");
      }
    }
  );

navButton.addEventListener("click", () => {
  //   tl.play();
  if (tl.isActive()) {
    e.preventDefault();
    e.stopInmediatePropagation();
    return false;
    //to stop the animation until finish
  }
  toggleTween(tl);
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
