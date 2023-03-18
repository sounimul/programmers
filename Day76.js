/*
Lv. 2 연습문제
- k진수에서 소수 개수 구하기
*/

/*
k진수에서 소수 개수 구하기
*/
function solution(n, k) {
    var answer = 0;
    
    let number = '';
    while(1){
        if(n<k){
            number += String(n);
            break;
        }
        number += String(n%k);
        n = parseInt(n/k);
    }
    function Check(l){
        for(let i=2;i<=Math.sqrt(l);i++){
            if(l%i==0) return -1;
        }
        return 1;
    }
    let num = number.split('').reverse().join('').split('0');
    num.forEach(item=>{
        if(Check(Number(item))==1 && item != '1' && item != '') answer++;
    })
    return answer;
}
