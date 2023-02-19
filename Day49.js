/*
Lv. 1 연습문제
- 숫자 짝꿍
*/

/*
숫자 짝꿍
*/
function solution(X, Y) {
    var answer = '';
    let num = {};
    let num2 = {};
    let str = {};
    for(let i of X){
        if(Object.keys(num).includes(i)) {
            num[i]++;
        }
        else {
            num[i]=1;
        }  
    }
    for(let j of Y){
        if(Object.keys(num2).includes(j)) {
            num2[j]++;
        }
        else {
            num2[j]=1;
        }  
    }
   
    for(let k of Object.keys(num)){
        if(Object.keys(num2).includes(k)){
            str[k] = (num[k]<num2[k])? num[k]:num2[k];
        }
    }
    for(let t of Object.keys(str)){
        for(let h=0;h<str[t];h++){
            answer += t;
        }
    }
    answer = answer.split('').sort((a,b)=>b-a).join('');
    if(answer=="") answer = '-1';
    else if(Number(answer)==0) answer = '0';
   
    return answer;
}