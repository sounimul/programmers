/*
Lv. 2 연습문제
- 뒤에 있는 큰 수 찾기
*/

/*
뒤에 있는 큰 수 찾기
*/
function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1);
    let stack = [];
    
    for(let i=0;i<numbers.length;i++){
        while(stack.length!=0){
            if(numbers[stack.at(-1)] >= numbers[i]) break;
            
            answer[stack.at(-1)] = numbers[i];
            stack.pop();
        }
        stack.push(i);      
        }
    
    return answer;
}
