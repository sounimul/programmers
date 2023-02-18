/*
Lv. 2 연습문제
- 124 나라의 숫자
*/

/*
124 나라의 숫자
*/

function solution(n) {
    var answer = '';
    let num = '';
   
    while(1){
        if(n/3<=1) {
            num += String(n);
            break;
        }
        else if(n%3==0){
            num += 3;
            n = parseInt(n/3)-1;
        }
        else{
            num += String(n%3);
            n = parseInt(n/3);
        }
    }
    answer = num.split('').reverse().join('').replaceAll('3','4');
    return answer;
}