const leftContent = document.querySelectorAll(".left-content");
const rightContent = document.querySelectorAll(".right-content");

window.addEventListener("scroll", () => {
    for(let i =0; i< leftContent.length; i++){
        if (
          window.scrollY >
          ((leftContent[i].offsetTop - window.innerHeight) + 100)
        ) {
            leftContent[i].classList.add('scrolling');
        }
    }
    for(let i =0; i< rightContent.length; i++){
        if (
          window.scrollY >
          ((rightContent[i].offsetTop - window.innerHeight) + 100)
        ) {
            rightContent[i].classList.add('scrolling');
        }
    }
});

function load (){
    for(let i =0; i< leftContent.length; i++){
        if (
          window.scrollY >
          ((leftContent[i].offsetTop - window.innerHeight) + 100)
        ) {
            leftContent[i].classList.add('scrolling');
        }
    }
    for(let i =0; i< rightContent.length; i++){
        if (
          window.scrollY >
          ((rightContent[i].offsetTop - window.innerHeight) + 100)
        ) {
            rightContent[i].classList.add('scrolling');
        }
    }
}

window.onload = load;
