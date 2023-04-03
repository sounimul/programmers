/*
Lv. 2 연습문제
- 줄 서는 방법
*/

/*
줄 서는 방법
*/
function solution(n, k) {
    var answer = [];
    let arr = new Array(n).fill(0).map((item,index)=>index+1);
    
    function Get(A){
        let f = 1;
        for(let i=2;i<A.length;i++){
            f*=i;
        }
        
        const ind = Math.ceil(k/f)-1;
        k = k - (ind*f);
        return A[ind];
    }
    
    for(let i=0;i<n;i++){
        const num = Get(arr);
        answer.push(num);
        arr.splice(arr.indexOf(num),1);
    }
    
    return answer;
}
