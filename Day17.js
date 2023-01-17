/*
Day17 문자열, 수학, 조건문, 배열, 사칙연산
*/

/*
숫자 찾기
*/
function solution(num, k) {
    var answer = 0;
    num = String(num);
    
    for(let i=0;i<num.length;i++){
        if(Number(num[i])===k) {
            answer = i+1;
            break;
        }
    }
    if(answer==0) answer=-1;
    
    return answer;
}

/*
n의 배수 고르기
*/
function solution(n, numlist) {
    var answer = [];
    for(let i=0;i<numlist.length;i++){
        if(numlist[i]%n==0) answer.push(numlist[i]);
    }
    return answer;
}

/*
자릿수 더하기
*/
function solution(n) {
    var answer = 0;
    while(n>0){
        answer += n%10;
        n = Math.trunc(n/10);
    }
    return answer;
}

/*
OX퀴즈
숫자를 다룰 땐 문자형인지 아닌지 확인하기!
*/
function solution(quiz) {
    var answer = [];
    
    let math = [];
    for(let i=0;i<quiz.length;i++){
        math = quiz[i].split(' ');
    if(math[1] == '-'){
        if(Number(math[0])-Number(math[2])==Number(math[4])) answer.push("O");
        else answer.push("X");
    }
    else{
        if(Number(math[0])+Number(math[2])==Number(math[4])) answer.push("O");
        else answer.push("X");
    }
    }
    
    return answer;
}