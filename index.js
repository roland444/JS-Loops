window.onload = () => {
    // for:
    
    forSection.init();
    forOfSection.init();
    forInSection.init();

    //while:

    allWhileSection.init();
    
    //break and continue:

    breakSection.init();
    continueSection.init();

    //forEach:

    forEachSection.init();

    //map:

    mapSection.init();
};

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
                forInResult.insertAdjacentHTML("beforeend", `<div class="result-nl">${property}:${object[property]}</div>`);
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


let allWhileSection = {
    whileAnswersShown: false,
    doWhileAnswersShown: false,
    init: function() {
        const _whileResultBtn = document.getElementById("while-result-btn");
        const _whileCancelBtn = document.getElementById("while-cancel-btn");

        const _doWhileResultBtn = document.getElementById("do-while-result-btn");
        const _doWhileCancelBtn = document.getElementById("do-while-cancel-btn");

        _whileResultBtn.onclick = () => this.whileShowResults();
        _whileCancelBtn.onclick = () => this.whileCancelResults(this.whileAnswersShown);

        _doWhileResultBtn.onclick = () => this.doWhileShowResults();
        _doWhileCancelBtn.onclick = () => this.doWhileCancelResults(this.doWhileAnswersShown);
    },
    whileShowResults: function() {
        if (!this.whileAnswersShown) {
            const whileResult = document.querySelector("#while-result-section");
            let x = 0;

            while (x < 5) {
                whileResult.insertAdjacentHTML("beforeend", `<div class="result-nl" style="color: rgb(66, 182, 66);">${x}</div>`);
                x++;
            }
            this.whileAnswersShown = true;
        }
    },
    doWhileShowResults: function() {
        if (!this.doWhileAnswersShown) {
            const doWhileResult = document.querySelector("#do-while-result-section");
            let y = 0;

            do {
                doWhileResult.insertAdjacentHTML("beforeend", `<div class="result-nl" style="color: rgb(66, 182, 66);">${y}</div>`);
                y++;
            }
            while (y < 5);

            this.doWhileAnswersShown = true;
        }
    },
    whileCancelResults: function() {
        if (this.whileAnswersShown) {
            let answer = document.querySelectorAll("#while-result-section > .result-nl");
            answer.forEach((el) => el.remove());
            this.whileAnswersShown = false;
        }
    },
    doWhileCancelResults: function() {
        if (this.doWhileAnswersShown) {
            let answer = document.querySelectorAll("#do-while-result-section > .result-nl");
            answer.forEach((el) => el.remove());
            this.doWhileAnswersShown = false;
        }
    }
}

let breakSection = {
    answersShown: false,
    init: function() {
        const _breakResultBtn = document.getElementById("break-result-btn");
        const _breakCancelBtn = document.getElementById("break-cancel-btn");

        _breakResultBtn.onclick = () => this.showResults();
        _breakCancelBtn.onclick = () => this.cancelResults(this.answersShown);
    },
    showResults: function() {
        if (!this.answersShown) {
            const breakResult = document.querySelector("#break-result-section");
            let x = 0;

            while (x < 10) {
                if (x === 5) {
                    break;
                }
                breakResult.insertAdjacentHTML("beforeend", `<div class="result-nl" style="color: rgb(66, 182, 66);">${x}</div>`);
                x++;
            }
            this.answersShown = true;
        }
    },
    cancelResults: function() {
        if (this.answersShown) {
            let answer = document.querySelectorAll("#break-result-section > .result-nl");
            answer.forEach((el) => el.remove());
            this.answersShown = false;
        }
    }
    
}

let continueSection = {
    answersShown: false,
    init: function() {
        const _continueResultBtn = document.getElementById("continue-result-btn");
        const _continueCancelBtn = document.getElementById("continue-cancel-btn");

        _continueResultBtn.onclick = () => this.showResults();
        _continueCancelBtn.onclick = () => this.cancelResults(this.answersShown);
    },
    showResults: function() {
        if (!this.answersShown) {
            const continueResult = document.querySelector("#continue-result-section");

            for (let i = 0; i < 5; i++) {
                if (i === 3) {
                    continue;
                }
                continueResult.insertAdjacentHTML("beforeend", `<div class="result-nl" style="color: rgb(66, 182, 66);">${i}</div>`);
            }
            this.answersShown = true;
        }
    },
    cancelResults: function() {
        if (this.answersShown) {
            let answer = document.querySelectorAll("#continue-result-section > .result-nl");
            answer.forEach((el) => el.remove());
            this.answersShown = false;
        }
    }
}

let forEachSection = {
    answersShown: false,
    init: function() {
        const _forEachResultBtn = document.getElementById("forEach-result-btn");
        const _forEachCancelBtn = document.getElementById("forEach-cancel-btn");

        _forEachResultBtn.onclick = () => this.showResults();
        _forEachCancelBtn.onclick = () => this.cancelResults(this.answersShown);
    },
    showResults: function() {
        if (!this.answersShown) {
            const forEachResult = document.querySelector("#forEach-result-section");
            let array = ["a", "b", "c", "d", "e"];

            array.forEach((element) => {
                forEachResult.insertAdjacentHTML("beforeend", `<div class="result-nl">${element}</div>`);
            })
            this.answersShown = true;
        }
    },
    cancelResults: function() {
        if (this.answersShown) {
            let answer = document.querySelectorAll("#forEach-result-section > .result-nl");
            answer.forEach((el) => el.remove());
            this.answersShown = false;
        }
    }
}

let mapSection = {
    answersShown: false,
    init: function() {
        const _mapResultBtn = document.getElementById("map-result-btn");
        const _mapCancelBtn = document.getElementById("map-cancel-btn");

        _mapResultBtn.onclick = () => this.showResults();
        _mapCancelBtn.onclick = () => this.cancelResults(this.answersShown);
    },
    showResults: function() {
        if (!this.answersShown) {
            const mapResult = document.querySelector("#map-result-section");
            let array = ["a", "b", "c", "d", "e"];

            let newArray = array.map((element) => {
                mapResult.insertAdjacentHTML("beforeend", `<div class="result-nl">${element}</div>`);
            })
            this.answersShown = true;
        }
    },
    cancelResults: function() {
        if (this.answersShown) {
            let answer = document.querySelectorAll("#map-result-section > .result-nl");
            answer.forEach((el) => el.remove());
            this.answersShown = false;
        }
    }
}

                    
                
        