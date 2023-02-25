/*
Lv. 1 연습문제
- 개인정보 수집 유효기간
*/

/*
개인정보 수집 유효기간
*/
function solution(today, terms, privacies) {
    var answer = [];
    let dead = today.split('.').map(item=>Number(item));
    dead = dead[0]*12*28 + dead[1]*28 + dead[2];
    //모든 달은 28일

    function Save(start){
        let t = [];
        let type = start[3];
       
        let n =Number(start[0])*12*28 + Number(start[1])*28 + Number(start[2]);
        terms.forEach(item=>{
            if(item.split(' ')[0]==type) n += (28*Number(item.split(' ')[1]));
        });
        n--;
        return n;
    }
    for(let i=0;i<privacies.length;i++){
        let time = privacies[i].split(/[. ]/);
        time = Save(time);
        if(time<dead) answer.push(i+1);
    }
    return answer;
}