/*
Lv. 1 연습문제
- 기사단원의 무기
*/

/*
기사단원의 무기
*/
function solution(number, limit, power) {
    var answer = 0;
    let arr = new Array(number+1).fill(0);
    
    for(let i=1;i<=number;i++){
        for(let j=i;j<=number;j+=i){
            arr[j] += 1;
        }
    }
    arr.forEach(item => {
        if(item>limit) answer += power;
        else answer += item;
    });
    
    return answer;
}