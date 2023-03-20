/*
Lv. 2 연습문제
- 땅따먹기
*/

/*
땅따먹기
*/
function solution(land) {
    var answer = 0;
    
    for(let i=1;i<land.length;i++){
        land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);
        land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);
        land[i][2] += Math.max(land[i-1][0], land[i-1][1], land[i-1][3]);
        land[i][3] += Math.max(land[i-1][0], land[i-1][1], land[i-1][2]);
    }
    answer = Math.max(...land[land.length-1]);
    return answer;
}
