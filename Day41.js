/*
Lv. 2 연습문제
- N개의 최소공배수
*/

/*
N개의 최소공배수
*/
function solution(arr) {
    var answer = 1;
    function D(num1, num2){
        let d = 1;
       
        for(let i=2;i<=Math.min(num1, num2);i++){
            if(num1%i==0 && num2%i==0) d = i;
        }
        return d;
    }
   
    for(let i=0;i<arr.length;i++){
        answer = (answer*arr[i]) / D(answer, arr[i]);
    }
   
    return answer;
}