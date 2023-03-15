/*
Lv. 2 연습문제
- [3차] n진수 게임
*/

/*
[3차] n진수 게임
*/
function solution(n, t, m, p) {
    var answer = '';
    let ind = [];
    let num = '';
    
    for(let i=0;i<t;i++){
        ind.push(p);
        p += m;
    }
    
    for(let c=0;c<t*m;c++){
        num += c.toString(n);
    }

    ind.forEach(index=> answer += num[index-1]);

    return answer.toUpperCase();
}
