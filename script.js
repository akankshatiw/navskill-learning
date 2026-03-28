let signin = document.querySelector(".signin_btn");
let praposalbtn = document.querySelector(".praposal_btn");
let trynow = document.querySelector(".trynow_btn");
signin.addEventListener("click", function (){
      alert("button clicked");
})
praposalbtn.addEventListener("click", function(){
      alert("praposal page loading");
})
trynow.addEventListener("click",function(){
      alert("try now page is loading");
})
let searchInput = document.querySelector(".search_input");
let searchbtn =  document.querySelector(".search-btn");
searchbtn.addEventListener("click", function(){
       let value = searchInput.value.trim();
      if( value === ""){
            alert("inappropriate input");
      }
      else{
            alert("you searched for " + value);
      }
})
let navlinks = document.querySelectorAll(".navigation");
navlinks.forEach(function(link){
link.addEventListener("click",function(){
      alert("this section is loading soon");
})
});
let mainImage = document.querySelector(".main_student_img");

mainImage.addEventListener("mouseover", function () {
    mainImage.style.transform = "scale(1.05)";
});

mainImage.addEventListener("mouseout", function () {
    mainImage.style.transform = "scale(1)";
});