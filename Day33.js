/*
Lv. 1 연습문제
- 숫자 짝꿍(시간초과)
*/

/*
숫자 짝꿍
*/
function solution(X, Y) {
    var answer = '';
    const x = X.split('');

    let number = [];
    for(let i of X) {
        if(Y.includes(i)) {
            number.push(i);
            Y = Y.replace(i,"");
        }
    }
   
    if(number.length == 0) answer = '-1';
    else if(number.every(item => item =='0')) answer = '0';
    else {
        answer = number.sort((a,b)=>b-a).join('');
    }
   
    return answer;
}