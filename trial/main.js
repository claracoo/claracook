const bars = document.getElementById('bars');
const mobileMenu = document.getElementById('mobileMenu');
bars.addEventListener('click', function() {
  mobileMenu.classList.toggle('active')
})


// function projPrev(event, state) {
//   let tag = event.target.parentNode.getElementsByClassName("top-right")[0];
//   let action = event.target.parentNode.getElementsByClassName("centered")[0];
//   if (state == "over") {
//       tag.style.display = "none"
//       // action.style.display = "block"
//   }
//   else {
//       // action.style.display = "none"
//       tag.style.display = "block"
//   }
// }