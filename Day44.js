/*
Lv. 2 연습문제
- 프린터(반례 오류발생으로 해결중)
*/

/*
프린터
*/
function solution(priorities, location) {
    var answer = 0;
    let max = Math.max(...priorities);
    let index = 0;
   
    let stack = [];
    while(1){
       
       
        if(max==priorities[location]) {
           priorities.forEach((item,index) => {
            if(item==max) {
                stack.push(index);
            }
        });
            break;
           }
        else if(priorities.lastIndexOf(max)!=-1) index = priorities.lastIndexOf(max);
        answer += priorities.filter(item=>item==max).length;
       
        max--;
        if(max == priorities[location]-1) break;
       
       
    }
    console.log(answer, stack, index);
    answer += stack.filter(item=>item>index).length;
    console.log(answer);
    if(index>location) answer += stack.filter(item=>item<=location).length;
   

    return answer;
}