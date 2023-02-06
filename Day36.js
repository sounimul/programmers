/*
Lv. 1 연습문제
- 숫자 짝꿍(시간 초과)
*/

/*
숫지 짝꿍
*/
function solution(X, Y) {
    var answer = '';
   
    const x = X.split('');
   
    x.forEach(item => {
        if(Y.includes(item)) {
           answer += item;
           Y = Y.replace(item, '');
    }
    });

    if(answer == '') answer = '-1';
    else if(answer.split('').every(item => item=='0')) answer = '0';
    else answer = answer.split('').sort((a,b)=>b-a).join('');
   
    return answer;
}