/*
Lv. 2 연습문제
- 괄호 변환
*/

/*
괄호 변환
*/
function solution(p) {

    if(p==='') return p;
    
    let open = 0;
    let close = 0;
    let ind = 0;
    let bool = true;
    
    //처음에는 초기화 값이므로 open과 close값이 같아서 do while 사용
    do{
        if(p[ind]==='(') open++
        else close++;
        if(close>open) bool = false;
        
        ind++;
    }while(open!=close)
    
    let u = p.slice(0,ind);
    let v = p.slice(ind);
    
    if(bool) return u+solution(v);
    else{
        u = u.substr(1,u.length-2).replace(/[()]/g, (s) => s === ')' ? '(' : ')');
        v = '('+solution(v)+')';
        return v+u;
    }
}
