const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    // Get a random number between 0 and the length of the array
    // inclusive
    const index = getRandomNumber();
    document.body.style.backgroundColor = colors[index];
    color.textContent = colors[index];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
