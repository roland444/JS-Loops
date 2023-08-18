window.onload = () => {
    forSection.init();
    forOfSection.init();
}


//for section

let forSection = {
    answersShown: false,
    init: function() {
        const _forResultBtn = document.getElementById("for-result-btn");
        const _forCancelBtn = document.getElementById("for-cancel-btn");
        
        _forResultBtn.onclick = () => this.showResults();

        _forCancelBtn.onclick = () => this.cancelResults(this.answersShown);
    },
    showResults: function() {
        const forResult = document.querySelector("#for-result-section");
           
        if (!this.answersShown) {
            for (let i = 0; i < 5; i++) { 
                forResult.insertAdjacentHTML("beforeend" ,`<div class="result-nl" style="color: rgb(66, 182, 66);">${i}</div>`);
            }
            this.answersShown = true;
        }
    },
    cancelResults: function() {
        if (this.answersShown) {
            let answers = document.querySelectorAll("#for-result-section > .result-nl");
            answers.forEach((el) => el.remove());
            this.answersShown = false;
        }
    }
}

let forOfSection = {
    answersShown: false,
    init: function() {
        const _forOfResultBtn = document.getElementById("forOf-result-btn");
        const _forOfCancelBtn = document.getElementById("forOf-cancel-btn");

        _forOfResultBtn.onclick = () => this.showResults();

        _forOfCancelBtn.onclick = () => this.cancelResult(this.answersShown);
    },
    showResults: function() {
        const forOfResult = document.querySelector("#for-of-result-section");

        if (!this.answersShown) {
            let array = ["a", "b", "c", "d", "e"];
            
            for (let element of array) {
                forOfResult.insertAdjacentHTML("beforeend", `<div class="result-nl">${element}</div>`)
            }
            this.answersShown = true;
        }
    },
    cancelResult: function() {
        if (this.answersShown) {
            let answers = document.querySelectorAll("#for-of-result-section > .result-nl");
            answers.forEach((el) => el.remove());
            this.answersShown = false;
        }
    }

}
