/*
Lv. 2 연습문제
- 연속 부분 수열 합의 개수
*/

/*
연속 부분 수열 합의 개수
*/
function solution(elements) {
    var answer = [];
    let n = elements.length;
    elements.push(...elements);
    
    while(n>0){
        
        for(let i=0;i<elements.length;i++){
                answer.push(elements.slice(i,i+n).reduce((item,sum)=>sum+item));
        }
        n--;
        
    }
    
    answer = [...new Set(answer)];
    return answer.length;
}
