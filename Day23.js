/*
Day23 배열, 정렬, 문자열
*/

 /*
특이한 정렬
2차원 배열 중 한 원소 기준으로 정렬
 */
function solution(numlist, n) {
    var answer = [];
    let dif = [];
    dif = numlist.map(item => [Math.abs(item-n),item]);
    dif.sort((a,b) => a[0] - b[0] || b[1] - a[1]); //2차원 배열 중 한 원소 기준으로 정렬
    answer = dif.map(item=>item[1]);
    return answer;
}

//정렬할 때 기준을 따로 배열 만들지 않고도 가능
// 정렬시에 오름차순일 경우 b-a, b가 더 커야 하는 값, a가 더 작아야 하는 값
// || 뒤는 값이 같을 때 다음 판단 조건
//numlist.sort((a,b) => Math.abs(a-n) - Math.abs(b-n) || b - a);

/*
등수 매기기
*/
function solution(score) {
    var answer = [];
    function sum(s){
        return (s[0]+s[1])/2;
    }
    score = score.map(item=>sum(item));
    answer = score.slice();
    console.log(answer);
    score.sort((a,b)=>b-a);
    for(let i=0;i<score.length;i++){
        answer[i] = (score.indexOf(answer[i]))+1;
    }
    return answer;
}

/*
옹알이 (1)
*/
function solution(babbling) {
    var answer = 0;
 for(let i=0;i<babbling.length;i++){
    babbling[i] = babbling[i].replace("aya","*");
     babbling[i] = babbling[i].replace("ye","*");
     babbling[i] = babbling[i].replace("woo","*");
     babbling[i] = babbling[i].replace("ma","*");
     if(babbling[i]=='*'||babbling[i]=='**'||babbling[i]=='***'||babbling[i]=='****') {
        answer++;
    }
}
    return answer;
}

/*
로그인 성공?
*/
function solution(id_pw, db) {
    var answer = '';
    function log_in(log){
        var ind = 0;
        for(let i=0;i<db.length;i++){
            if(db[i][0]==log[0]){
                if(db[i][1]==log[1]) return "login";
                else return "wrong pw"
            }
        }
        return "fail";
    }
    answer = log_in(id_pw);
    return answer;
}