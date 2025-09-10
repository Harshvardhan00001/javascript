// const butt = document.getElementById("click");
// const counter = document.getElementsByClassName("coun");

// butt.addEventListener("click", () => {
//     // Get current count value, convert to number, increment, and update
//     let current = parseInt(counter.innerText, 10);
//     counter.innerText = current + 1;
// });

// ebfksbnkfbskdfnk

const button = document.getElementById("click"); // Corrected ID
const counter = document.querySelector(".coun"); // Get the single element

button.addEventListener("click", () => {
    let current = parseInt(counter.innerText, 10) || 0;
    counter.innerText = String(current + 1).padStart(1, '0'); // Keeps "00", "01", etc.
});
