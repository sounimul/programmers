/*
Day18 문자열, 수학, 조건문, 정렬
*/

/*
문자열안에 문자열
*/
function solution(str1, str2) {
    var answer = 0;
    const regex = new RegExp(str2);
    if(regex.test(str1) == true) answer = 1;
    else answer = 2;
    
    return answer;
}

/*
제곱수 판별하기
*/
function solution(n) {
    var answer = 0;
    for(let i=1;i<=n;i++){
        if(n==Math.pow(i,2)) answer = 1;
    }
    if(answer==0) answer = 2;
    return answer;
}

/*
세균 증식
*/
function solution(n, t) {
    var answer = n;
    for(let i=1;i<=t;i++){
        answer *= 2;
    }
    return answer;
}

/*
문자열 정렬하기 (2)
sort() -> 배열 메소드
*/
const solution = (my_string => my_string.toLowerCase().split('').sort().join(''));