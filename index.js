const _forResultBtn = document.getElementById("for-result-btn");
const _forCancelBtn = document.getElementById("for-cancel-btn");



const forResult = document.querySelector("#for-result-section");

window.onload = () => {
    forSection.init();
}


// for section

let forSection = {
    answersShown: false,
    init: function() {
        _forResultBtn.addEventListener("click", this.showResults);
        _forCancelBtn.addEventListener("click", this.cancelResults);
        console.log(this.answersShown)
    },
    showResults: function() {
        this.answersShown = true;
        console.log(this.answersShown)
    },
    cancelResults: function() {
        this.answersShown = false;
        console.log(this.answersShown)
    }
    
    

}