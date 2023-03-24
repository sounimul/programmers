/*
Lv. 2 연습문제
- 2 x n 타일링
*/

/*
2 x n 타일링
*/
function solution(n) {
    var answer = 0;
    
    if(n<=2) return n;    

    let x = 2;
    let y = 1;
    
    for(let i = 2; i < n; i++){
        answer = (x + y) % 1000000007;
        y = x;
        x = answer;
    }
    
    return answer;
}
