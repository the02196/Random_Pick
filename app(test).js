const text = document.querySelector("p");
const btn = document.querySelector("button");
const student = ["Ji-yeon", "Jeong-suk", "Yeong-ung", "Bum-suk", "Jun-hyung"];

// 출력 된 배열 값을 확인 하기 위한 빈 배열. push 이용해서 채움.
let spoken = [];

// 피셔 예이츠 셔플 알고리즘 (배열을 무작위로 섞음)
let shuffledStudents = shuffleArray(student);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];  
    // [array[i], array[j]] = [array[j], array[i]];  이 부분이 섞는 부분.
    // console.log(i);
    // console.log(j);
    }
  return array;
}

// 클릭 카운트
let clickCount = 0;


// 버튼 클릭 했을 때, student[클릭 카운트]로 실행 됨. 클릭 카운트가 5개 이상(student.length) 넘어가면 더 이상 작동 안함.
btn.addEventListener("click", function () {
  if (clickCount < student.length) {
    const result = shuffledStudents[clickCount];
    text.innerHTML = result;
    spoken.push(result);
    console.log(shuffledStudents);
    console.log(spoken);
    clickCount++;
  }
});








const text = document.querySelector("p");
const btn = document.querySelector("button");
const student = ["지연", "정석", "영웅", "범석", "준형"];

btn.addEventListener("click", function () {
  // 0부터 배열 길이 미만의 무작위 정수 생성
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // 배열 인덱스 범위 내의 무작위 정수 생성
  const number = getRandomInt(student.length);

  // 0을 포함하여 모든 값에 대해 동작하도록 조건 수정
  if (number !== undefined) {
    const result = `${student[number]} 학생은 발표를 해야합니다.`;

    // 결과를 텍스트로 표시
    text.innerHTML = result;
  }
});



// Math random() 최대값 지정 : *
// 초기 범위인 0 ~ 1이 아닌 최대 범위를 조절하려면 어떻게 해야할까요?

// 곱하기 * 기호를 사용하면 됩니다. 왜냐하면 난수의 범위 시작이 0이므로 0에는 어떤 수를 곱해도 0이기 때문입니다. 따라서 최대값인 1에만 원하는 최대 범위를 곱하면 됩니다.

// 최대값 설정은 Math.random()에 원하는 최대값을 곱해주면 됩니다.

// Math.random() * 최대값