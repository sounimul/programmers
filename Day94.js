/*
Lv. 2 연습문제
- 하노이의 탑
*/

/*
하노이의 탑
*/
function solution(n) {
    let answer = [];
    
    function hanoi(n, start, end, middle){
        
        if(n===1) {
            answer.push([start,end]);
            return;
        }
        
        hanoi(n-1, start, middle, end);
        answer.push([start, end]);
        hanoi(n-1, middle, end, start);
        
        return answer;
    }
    hanoi(n,1,3,2);
    return answer;
}
