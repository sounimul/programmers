/*
Day 3 사칙연산, 배열, 수학
*/

//나머지 구하기
const solution = (num1, num2) => num1%num2;

//중앙값 구하기
function solution(array) {
    var answer = 0;
    
    array.sort((a,b) => a-b);
    console.log(array);
    answer = array[Math.trunc(array.length/2)];
    return answer;
}

//최빈값 구하기

//짝수는 싫어요
function solution(n) {
    var answer = [];
    for(let i =1;i<=n;i+=2){
        answer.push(i);
    }
    return answer;
}