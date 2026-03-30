// ---------------- BUTTON EVENTS ----------------

let signin = document.querySelector(".signin_btn");
let praposalbtn = document.querySelector(".praposal_btn");
let trynow = document.querySelector(".trynow_btn");

signin.addEventListener("click", function () {
    alert("Sign in feature coming soon");
});

praposalbtn.addEventListener("click", function () {
    alert("Proposal page loading...");
});

trynow.addEventListener("click", function () {
    alert("Try now page is loading...");
});


// ---------------- NAVIGATION LINKS ----------------

let navlinks = document.querySelectorAll(".navigation a");

navlinks.forEach(function (link) {
    link.addEventListener("click", function () {
        alert("This section is coming soon");
    });
});


// ---------------- IMAGE HOVER EFFECT ----------------

let mainImage = document.querySelector(".main_student_img");

mainImage.addEventListener("mouseover", function () {
    mainImage.style.transform = "scale(1.05)";
});

mainImage.addEventListener("mouseout", function () {
    mainImage.style.transform = "scale(1)";
});


// ---------------- COURSE DATA ----------------

let courses = [
    { name: "JavaScript", category: "Programming", price: 499 },
    { name: "Java", category: "Programming", price: 599 },
    { name: "Python", category: "Programming", price: 699 },
    { name: "UI Design", category: "Design", price: 399 },
    { name: "Web Development", category: "Development", price: 799 }
];


// ---------------- SEARCH FUNCTIONALITY ----------------

let searchInput = document.querySelector(".search_input");
let searchBtn = document.querySelector(".search-btn");
let resultsDiv = document.getElementById("results");

searchBtn.addEventListener("click", function () {

    let value = searchInput.value.trim().toLowerCase();

    resultsDiv.innerHTML = ""; // clear previous results

    if (value === "") {
        resultsDiv.innerHTML = "<p>Please enter something</p>";
        return;
    }

    let filteredCourses = courses.filter(function (course) {
        return course.name.toLowerCase().includes(value) ||
               course.category.toLowerCase().includes(value);
    });

    if (filteredCourses.length === 0) {
        resultsDiv.innerHTML = "<p>No courses found</p>";
        return;
    }

    filteredCourses.forEach(function (course) {
        let div = document.createElement("div");
        div.classList.add("course-card");

        div.innerHTML = `
            <h3>${course.name}</h3>
            <p>Category: ${course.category}</p>
            <p>Price: ₹${course.price}</p>
        `;

        resultsDiv.appendChild(div);
    });
});


// ---------------- LIVE SEARCH (BONUS 🔥) ----------------

searchInput.addEventListener("input", function () {

    let value = searchInput.value.trim().toLowerCase();

    resultsDiv.innerHTML = "";

    if (value === "") {
        return;
    }

    let filteredCourses = courses.filter(function (course) {
        return course.name.toLowerCase().includes(value) ||
               course.category.toLowerCase().includes(value);
    });

    filteredCourses.forEach(function (course) {
        let div = document.createElement("div");
        div.classList.add("course-card");

        div.innerHTML = `
            <h3>${course.name}</h3>
            <p>Category: ${course.category}</p>
            <p>Price: ₹${course.price}</p>
        `;

        resultsDiv.appendChild(div);
    });
});