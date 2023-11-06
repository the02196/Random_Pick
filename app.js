const text = document.querySelector("p");
const btn = document.querySelector("button");
const student = ["Ji-yeon", "Jeong-suk", "Yeong-ung", "Bum-suk", "Jun-hyung", "U-ri"];


let shuffledStudents = shuffleArray(student);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
  return array;
}

let clickCount = 0;

btn.addEventListener("click", function () {
  if (clickCount < student.length) {
    const result = shuffledStudents[clickCount];
    text.innerHTML = result;
    clickCount++;
  }
});


