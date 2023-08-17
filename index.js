const _forResultBtn = document.getElementById("for-result-btn");
const _forCancelBtn = document.getElementById("for-cancel-btn");



const forResult = document.querySelector("#for-result-section");

const answer = document.querySelectorAll(".result-nl");

window.onload = () => {
    forSection.init();
}


// for section

let forSection = {
    answersShown: false,
    init: function() {
        _forResultBtn.addEventListener("click", this.showResults);
        _forCancelBtn.addEventListener("click", this.cancelResults);
    },
    showResults: function() {
        this.answersShown = true; 
        console.log(this.answersShown)
    },
    cancelResults: function() {
        if (this.answersShown) {
            answer.remove();
        } else {
            answer.innerHTML = "";
            this.answersShown = false;
        }
    }
    
    

}