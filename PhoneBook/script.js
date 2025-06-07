document.addEventListener("DOMContentLoaded", function () {
  // This script runs when the DOM is fully loaded
  document.querySelector("form").addEventListener("submit", function (event) {
    // let name = document.querySelector("#name").value;
    // alert(`Hello, ${name}!`);
    alert("Hello " + document.querySelector("#name").value + "!");
    event.preventDefault(); // Prevent form submissionS
  });
});
