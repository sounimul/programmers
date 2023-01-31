/*
Lv. 1 연습문제
- 로또의 최고 순위와 최저 순위
- 명예의 전당
*/

/*
로또의 최고 순위와 최저 순위
*/
function solution(lottos, win_nums) {
    var answer = [];
    const g = [6,6,5,4,3,2,1];
    let match = 0;
    let cnt = 0; //모르는 번호 개수
    lottos.forEach(item => {
        if(item==0) cnt++;
        else{
            if(win_nums.includes(item)) match++;
        }
    })
    answer.push(match+cnt, match);
    answer = answer.map(num => g[num]);
    return answer;
}

/*
명예의 전당
*/
function solution(k, score) {
    var arr = [];
    let answer = [];
 
    for(let i=0;i<score.length;i++){
    arr.push(score[i]);
    arr = arr.sort((a,b)=>b-a).slice(0,k);
    answer.push(arr.at(-1));
    }

    return answer;
}