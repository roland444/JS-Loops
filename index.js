window.onload = () => {
    // for
    
    forSection.init();
    forOfSection.init();
    forInSection.init();

    //while

    
}

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

let forInSection = {
    answersShown: false,
    init: function() {
        const _forInResultBtn = document.getElementById("forIn-result-btn");
        const _forInCancelBtn = document.getElementById("forIn-cancel-btn");

        _forInResultBtn.onclick = () => this.showResults();

        _forInCancelBtn.onclick = () => this.cancelResults(this.answersShown);
    },
    showResults: function() {
        const forInResult = document.querySelector("#for-in-result-section");

        if (!this.answersShown) {
            let object = {a: 1, b: 2, c:3};
            
            for (let property in object) {
                forInResult.insertAdjacentHTML("beforeend", `<div class="result-nl">${property}: ${object[property]}</div>`);
            }

            this.answersShown = true;
        }
    },
    cancelResults: function() {
        if (this.answersShown) {
            let answers = document.querySelectorAll("#for-in-result-section > .result-nl");
            answers.forEach((el) => el.remove());
            this.answersShown = false;
        }
    }
}
 