/*
Lv. 2 연습문제
- 피보나치 수
- 다음 큰 숫자
- 짝지어 제거하기
- 영어 끝말잇기
*/

/*
피보나치 수
*/
function solution(n) {
    var answer = 0;
    let num = [];
    num[0]=0;
    num[1]=1;
    num[2]=1;
    

    for(let i=3;i<n;i++){
        num[i] = (num[i-1]%1234567) + (num[i-2]%1234567);
    }
    answer = (num[n-1] + num[n-2])%1234567;
    return answer;
}

/*
다음 큰 숫자
*/
function solution(n) {
    var answer = n;
    
    function binary(num){
        let s = '';
        
        while(num>0){
            s += num%2;
            num = parseInt(num/2);
        }
        s = s.replaceAll('0','');
        return s.length;
    }
    
    const len = binary(n);
    while(1){
        answer++;
        if(binary(answer)==len) break;
    }
    
    return answer;
}

/*
짝지어 제거하기
*/
function solution(s)
{
    var answer = 0;
    let stack = [];
    
    for(let i of s){
        if(stack.at(-1)==i) stack.pop();
        else stack.push(i);
    };

    if(stack[0]==null) answer = 1; //length 효율성 통과 안됨
    return answer;
}

/*
영어 끝말잇기
*/
function solution(n, words) {
    var answer = [];
    var an = [];
    answer = new Array(n).fill(0);
    let said = [];
    let order = 1;
    said.push(words[0]);
    answer[0]++;
    for(let i=1;i<words.length;i++){
        if(said.includes(words[i]) || words[i-1].slice(-1,) !== words[i].slice(0,1)) {
            answer[order]++;
            an = [order+1, answer[order]];
            break;
        }
        else {
            said.push(words[i]);
            answer[order]++;
        }
        if(order==(n-1)) order = 0;
        else order++;
        
        if(i==words.length-1) an = [0,0];
    }
    return an;
}