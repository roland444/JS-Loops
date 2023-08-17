window.onload = () => {
    forSection.init();
}


//for section

let forSection = {
    answersShown: false,
    init: function() {
        const _forResultBtn = document.getElementById("for-result-btn");
        const _forCancelBtn = document.getElementById("for-cancel-btn");
        
        _forResultBtn.onclick = () => this.showResults();

        _forCancelBtn.onclick = () => {
            this.cancelResults(this.answersShown);
        }
    },
    showResults: function() {
        const forResult = document.querySelector("#for-result-section");
                
        if (!this.answersShown) {
            for (let i = 0; i < 5; i++) { 
                (function(i) {
                    setTimeout(function() {
                        forResult.insertAdjacentHTML("beforeend" ,`<div class="result-nl" style="color: rgb(66, 182, 66);">${i}</div>`);
                    }, 1000 * i);
                })(i);
            }
        }

        this.answersShown = true;
    },
    cancelResults: function() {
        if (this.answersShown) {
            let answers = document.querySelectorAll("#for-result-section > .result-nl");
            answers.forEach((el) => el.remove());
            this.answersShown = false;
        }
    }
    
    

}
