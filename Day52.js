/*
Lv. 2 연습문제
- 피로도
*/

/*
피로도
*/
function solution(k, dungeons) {
    var answer = [];
    let need = [];
    
    function getSteps(arr, num) {
    const results = [];
    if (num === 1) return arr.map((item) => [item]); 

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      const permutations = getSteps(rest, num - 1); 
      const attached = permutations.map((item) => [fixed, ...item]); 
      results.push(...attached); 

    });

    return results;
}
    dungeons = getSteps(dungeons,dungeons.length);
    let blood = 0;
    let c = 0; //통과한 던전 수
    for(let i=0;i<dungeons.length;i++){
        blood = k;
        for(let j=0;j<dungeons[i].length;j++){
            
            if(blood<dungeons[i][j][0] || (blood-dungeons[i][j][1])<0){
                break;
            }
            else {
                blood -= dungeons[i][j][1];
                c++;
            }
            
        }
        answer.push(c);
        c = 0;
        }
  
    return Math.max(...answer);
}