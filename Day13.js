/*
Day13 문자열, 배열, 사칙연산, 수학, 조건문
*/

/*
컨트롤 제트
*/
function solution(s) {
    var answer = 0;
    let S = s.split(' ');
    for(let i=0;i<S.length;i++){
        if(S[i]=='Z') answer -= Number(S[i-1]);
        else answer += Number(S[i]);
    }
    return answer;
}

/*
배열 원소의 길이
*/
function solution(strlist) {
    var answer = [];
    for(let i=0;i<strlist.length;i++){
        answer.push(strlist[i].length);
    }
    return answer;
}

/*
중복된 문자 제거
*/
function solution(my_string) {
    var answer = '';
    let s = [];
    
    for(let i=0;i<my_string.length;i++){
       if(s.includes(my_string[i])!=true) s.push(my_string[i]);
    }
    
    answer = s.join('');
    return answer;
}

/*
삼각형의 완성조건(1)
*/
function solution(sides) {
    var answer = 0;
    sides.sort((a,b) => b-a)
    
    if(sides[0]<sides[1]+sides[2]) answer = 1;
    else answer = 2;
    
    return answer;
}