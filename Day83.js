/*
Lv. 2 연습문제
- 모음사전
*/

/*
모음사전
*/
function solution(word) {
    var answer = 0;
    let al = ['A','E','I','O','U'];
    let dic = [];
    
    function Dic(al, len){
        const result = [];
        if(len === 1) return al.map(item => item);
        
        al.forEach((fixed,index, arr) => {
            const rest = arr;
            const combination = Dic(rest, len-1);
            const attached = combination.map(item=>[fixed,...item].join(''));
            result.push(...attached);
        })
        return result;
    }
    
    for(let i=1;i<=5;i++){
        dic.push(...Dic(al,i));
    }
    dic.sort();
    
    answer = dic.indexOf(word) + 1;
    return answer;
}
