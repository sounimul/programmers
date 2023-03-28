/*
Lv. 2 연습문제
- 큰 수 만들기
*/

/*
큰 수 만들기
*/
function solution(number, k) {
    var answer = [];
    
    const len = number.length; 
    
    for(let i=0;i<len;i++){
        while(answer.length > 0 && k>0 && answer[answer.length-1] < number[i]){
            answer.pop();
            k--;
        }
        answer.push(number[i]);
    }
    if(k>0) answer.splice(-k,k);
    return answer.join('');
}
