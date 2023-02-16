/*
Lv. 2 연습문제
- 튜플
*/

/*
튜플
*/
function solution(s) {
    var answer = [];
    /*
    s = s.slice(1,-1);
    s = s.split('},');
    s = s.map(item=>item.replaceAll(/[{}]/g,''));
    s.sort((a,b)=>a.length-b.length);
    */
    s = s.slice(1,-1).split('},').map(item=>item.replaceAll(/[{}]/g,'')).sort((a,b)=>a.length-b.length);
    s = s.map(item=>{
        item = item.split(',');
        return item.map(x=>Number(x));
    });
   
    answer.push(Number(s[0]));

    for(let i=1;i<s.length;i++){
        answer.push(Number(s[i].filter(item => !s[i-1].includes(item)).join('')));
    }
   
    return answer;
}