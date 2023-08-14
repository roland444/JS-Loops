const _forResultBtn = document.getElementById("for-result-btn");
const _forCancelBtn = document.getElementById("for-cancel-btn");



const forResult = document.querySelector("#for-result-section");






_forResultBtn.addEventListener("click", function() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            forResult.innerHTML += `<div class="result-nl" style="color: rgb(66, 182, 66);">${i}</div>`;
        }, 500);
    }
});

_forCancelBtn.addEventListener("click", function() {
    
})