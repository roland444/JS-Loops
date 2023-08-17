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

        for (let i = 0; i < 5; i++) { 
            (function(i) {
            setTimeout(function() {
                forResult.innerHTML += `<div class="result-nl" style="color: rgb(66, 182, 66);">${i}</div>`;
            }, 1000 * i);
            })(i);
        }
        
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