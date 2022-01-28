function projPrev(event, state) {
    let tag = event.target.parentNode.getElementsByClassName("top-right")[0];
    let action = event.target.parentNode.getElementsByClassName("centered")[0];
    if (state == "over") {
        tag.style.display = "none"
        action.style.display = "block"
    }
    else {
        action.style.display = "none"
        tag.style.display = "block"
    }
}

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

function openAccordion(event) {
    console.log(event.target)
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
}

function openProj(id) {
    document.getElementById("allProjects").style.display = "block";
    for (let proj of document.getElementsByClassName("wrap")) {
        proj.parentNode.style.display = "none";
    }
    if (id == "badseed") {
        let target = document.getElementById("badseedWrap");
        target.style.display = "block";
        target.innerHTML = badseed;
    }
    if (id == "bubbles") {
        let target = document.getElementById("bubblesWrap");
        target.style.display = "block";
        target.innerHTML = bubbles;
    }
    if (id == "twother") {
        let target = document.getElementById("twotherWrap");
        target.style.display = "block";
        target.innerHTML = twother;
    }

}

function openAll() {
    document.getElementsByClassName("projectsPreview")[0].innerHTML = original;
    document.getElementById("allProjects").style.display = "none";
}

// var carousel = document.getElementById('carousel');
// var slides = 3;
// var speed = 7000; // 5 seconds

// function carouselHide(num) {
//     indicators[num].setAttribute('data-state', '');
//     slides[num].setAttribute('data-state', '');

//     slides[num].style.opacity=0;
// }

// function carouselShow(num) {
//     indicators[num].checked = true;
//     indicators[num].setAttribute('data-state', 'active');
//     slides[num].setAttribute('data-state', 'active');

//     slides[num].style.opacity=1;
// }

// function setSlide(slide) {
//     return function() {
//         // Reset all slides
//         for (var i = 0; i < indicators.length; i++) {
//             indicators[i].setAttribute('data-state', '');
//             slides[i].setAttribute('data-state', '');
            
//             carouselHide(i);
//         }

//         // Set defined slide as active
//         indicators[slide].setAttribute('data-state', 'active');
//         slides[slide].setAttribute('data-state', 'active');
//         carouselShow(slide);

//         // Stop the auto-switcher
//         clearInterval(switcher);
//     };
// }

// function switchSlide() {
//     var nextSlide = 0;

//     // Reset all slides
//     for (var i = 0; i < indicators.length; i++) {
//         // If current slide is active & NOT equal to last slide then increment nextSlide
//         if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length-1))) {
//             nextSlide = i + 1;
//         }

//         // Remove all active states & hide
//         carouselHide(i);
//     }

//     // Set next slide as active & show the next slide
//     carouselShow(nextSlide);
// }

// if (carousel) {
//     var slides = carousel.querySelectorAll('.slide');
//     var indicators = carousel.querySelectorAll('.indicator');

//     var switcher = setInterval(function() {
//         switchSlide();
//     }, speed);

//     for (var i = 0; i < indicators.length; i++) {
//         indicators[i].addEventListener("click", setSlide(i));
//     }
// }


