/*
Lv. 2 연습문제
- 방문 길이
*/

/*
방문 길이
*/
function solution(dirs) {
    var answer = 0;
    let user = [0,0];
    let move = [];
    let dic = {L:[-1,0],R:[1,0],U:[0,1],D:[0,-1]};
    
    for(let s of dirs){
        if(user[0]+dic[s][0]>=-5&&user[0]+dic[s][0]<=5&&user[1]+dic[s][1]>=-5&&user[1]+dic[s][1]<=5){
            let m = [user[0]+dic[s][0],user[1]+dic[s][1]];
            move.push(user.join('')+m.join(''),m.join('')+user.join(''));
            answer++;
            user = m;
        }
    }

    move = [...new Set(move)];
    return move.length/2;
}
