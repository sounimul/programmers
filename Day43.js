/*
Lv. 2 연습문제
- 숫자의 표현
*/

/*
숫자의 표현
*/
function solution(n) {
    var answer = 0;
    let num = [];
    for(let i=1;i<=n;i++){
        num.push(i);
    }
   
    let sum = 0;
    let ind = 0;
   
    num.forEach((item,index)=>{
        ind = index;
        while(1){
            sum += num[ind];
            ind++;
           
            if(sum==n) {
                answer++;
                break;
            }
            else if(sum>n)break;
           
        }
        sum =0;
    });
    return answer;
}