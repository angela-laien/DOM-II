// Your code goes here

//mouse events 
const yellowBus = document.querySelector(".intro img")
console.log(yellowBus)

yellowBus.addEventListener("mouseenter", () => {
    yellowBus.style.transform = "scale(1.35)";
    yellowBus.style.transition = "transform 1s";
})
yellowBus.addEventListener("mouseleave", () => {
    yellowBus.style.transform = "scale(1)";
})

//stop propogation
document.querySelectorAll("a").forEach(el => {
    el.addEventListener("mouseover", function() {
      el.style.color= "hotpink";
      event.stopPropagation()
    })
})

//mouseover event
const head = document.querySelector('nav');

head.addEventListener("mouseover", () => {
  head.style.backgroundColor="purple";
})

//click event
const changeImg = document.querySelector('.content-destination img');
changeImg.addEventListener("click", () => {
  changeImg.src="img/yellow-bus.jpg";
})

//resize event
const midRight = document.querySelector('.content-destination img');
window.addEventListener('resize', () => {
  midRight.src ="img/destination.jpg"
})

//scroll event
const wholeBody = document.querySelector('body');
window.addEventListener('scroll', () => {
    wholeBody.style.backgroundColor="gold";
})
    
//GSAP transform event
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.style.transform = "translateX(150px)";
    })
    button.addEventListener("mouseup", () => {
        button.style.transform = "translateX(0px)";
    })
})


//GSAP yoyo event
const midTop = document.querySelector('.img-fluid.rounded');
midTop.addEventListener("click", () => {
    gsap.to('.img-fluid.rounded', {
          duration: 2,
          rotateY: 180,
          ease: "elastic(1, 0.75)",
          yoyo: true,
          repeat: 2
    })
})


//GSAP rotate event
const midBottom = document.querySelector('.img-content img');
//double click event
midBottom.addEventListener("click", () => {
    gsap.to('.img-content img', {
        duration: 1,
        x: 200,
        rotate: 360
    })
})