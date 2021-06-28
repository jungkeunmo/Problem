// 1. 변수 t1를 선언하고, 정수형 데이터 10을 저장한다.
// 변수 t2를 선언하고, 정수형 데이터 20을 저장한다.
// t1과 t2를 더한 값을 출력하세요. 
const t1 = 10;
const t2 = 20;
console.log(t1 + t2);

// 2. 배열 dataList(data_list)를 선언하고, 데이터는
//    딸기, 복숭아, 배, 수박, 참외, 호박을 저장한다.
const dataList = ["딸기", "복숭아", "배", "수박", "참외", "호박"];
// 2-1. 위 선언된 배열에 오렌지 데이터를 추가하세요.
dataList.push("오렌지");
// 2-2. 위 선언된 배열의 총 길이를 출력하세요.
console.log(dataList.length);

// 3. 변수 k에 문자열 데이터 24를 저장하고,
//    k를 정수형으로 형변화하여 5를 더한 값을 다시 k에 저장하고 
//    출력하세요.

let k = "24";
k = parseInt(k) + 5;
console.log(k);

// 4. 배열 stuList(stu_list)에 라이언, 튜브, 콘, 무지, 제이지, 춘식이를 저장하고
// 반복문을 통해 모두 출력하세요.

const stuList = ["라이언", "튜브", "콘", "무지", "제이지", "춘식이"];

stuList.forEach((stu) => {
    console.log(stu);
});

// 5. 배열 nums에 1부터 20까지 저장하세요. (코드를 통해 저장하는 로직 작성 허용)
// nums를 반복하여, 짝수일 떄에는 짝수, 홀수일 때 에는 홀수라고 출력하세요
// ex)  1 : 홀수입니다.
//      2 : 짝수입디나.
//      3 : 홀수입니다.
//      ............
//      ............

const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

nums.forEach((num) => {
    if (num % 2 === 0) {
        console.log(`${num} : 짝수 입니다.✅`);
    } else {
        console.log(`${num} : 홀수 입니다.❌`);
    }
})
