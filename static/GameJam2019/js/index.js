// modified from https://www.w3schools.com/howto/howto_js_accordion.asp

const questions = document.getElementsByClassName("question");

for (const question of questions) {
  question.addEventListener("click", function() {
    this.classList.toggle("question-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}