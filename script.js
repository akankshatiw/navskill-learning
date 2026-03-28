let signinBtn = document.querySelector(".signin_btn");
let proposalBtn = document.querySelector(".praposal_btn");
let tryBtn = document.querySelector(".trynow_btn");

signinBtn.addEventListener("click", function () {
    alert("Sign-in page coming soon!");
});

proposalBtn.addEventListener("click", function () {
    alert("We will contact you soon!");
});

tryBtn.addEventListener("click", function () {
    alert("Welcome! Let's explore 🚀");
});
let searchBtn = document.querySelector(".search_bar button");
let searchInput = document.querySelector(".search_input");

searchBtn.addEventListener("click", function () {
    let value = searchInput.value.trim();

    if (value === "") {
        alert("Please enter something!");
    } else {
        alert("Searching for: " + value);
    }
});
searchInput.addEventListener("input", function () {
    console.log("Typing:", searchInput.value);
});
