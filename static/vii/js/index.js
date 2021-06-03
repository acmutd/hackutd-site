// we do absolutely disgusting things to get the img backgrounds to work....
// this fixes the height of the sea-container which gets overflowed because
// we use position: absolute. Yes, I hate it too.
function fixMiddleHeight() {
  const seaContainer = document.querySelector(".sea-container");
  const seaContent = document.querySelector(".sea-content");
  
  const height = parseInt(window.getComputedStyle(seaContent).height) - 20 + "px";
  seaContainer.style.height = height;
}

let middleContainerHeight = null;

// modified from https://www.w3schools.com/howto/howto_js_accordion.asp
function setupFaq() {
  const questions = document.getElementsByClassName("question");

  for (const question of questions) {
    question.addEventListener("click", function() {
      this.classList.toggle("question-active");
      const panel = this.nextElementSibling;

      const seaContainer = document.querySelector(".sea-container");
      if (middleContainerHeight == null) {
        middleContainerHeight = parseInt(window.getComputedStyle(seaContainer).height);
      }

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        middleContainerHeight = (middleContainerHeight - panel.scrollHeight);  
        seaContainer.style.height = middleContainerHeight + "px";
        
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        middleContainerHeight = (middleContainerHeight + panel.scrollHeight);  
        seaContainer.style.height = middleContainerHeight + "px";
      }
    });
  }
}

window.onresize = function() {
  fixMiddleHeight();
}

setTimeout(() => {
  fixMiddleHeight();
  setupFaq();
}, 100);
