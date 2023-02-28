/*
Lv. 2 연습문제
- 괄호 회전하기
*/

/*
괄호 회전하기
*/
function solution(s) {
    var answer = 0;
    let stack = [];
    function Check(str){
        for(let i of str){
            if(i=='[' || i=='(' || i=='{' ){
                stack.push(i);            
            }
            else if(i==']') {
                if(stack.pop() != '[') return -1;
            }
            else if(i==')') {
                if(stack.pop() != '(') return -1;
            }
            else if(i=='}') {
                if(stack.pop() != '{') return -1;
            }
        }
        if(stack.length==0) return 1;
        else return -1;
    }
   
    for(let i=0;i<s.length;i++){
        if(Check(s)==1) answer++;
        s = s.slice(1,)+s.slice(0,1);
    }
    return answer;
}