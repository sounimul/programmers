/*
Lv. 2 연습문제
- 연속된 부분 수열의 합
*/

/*
연속된 부분 수열의 합
*/

function solution(sequence, k) {
    var answer = [];
    let sum = 0;
    
    let ind = 0;
    
    for(let i=0;i<sequence.length;i++){
        sum += sequence[i];
        if(sum>k) {
            while(sum>k){
                sum -= sequence[ind];
                ind++;
            }
        }
        if(sum===k) answer.push([ind,i]);
    }
    
    answer = answer.sort((a,b)=> (a[1]-a[0])-(b[1]-b[0]) | a[0]-b[0]);
    return answer[0];
}
