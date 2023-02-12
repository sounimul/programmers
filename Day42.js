/*
Lv. 2 연습문제
- 구명보트
*/

/*
구명보트
*/
function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>a-b);
    /*효율성 통과X 코드
    for(let i=0;i<people.length;i++){
        if(people[i]==-1) continue;
        else{
        for(let j=people.length;j>i;j--){
            if(people[j]+people[i] <= limit && people[j]!=-1){
                people[j]=-1;
                break;
            }
        }
            answer++;
        }
    }
    */
    while(people.length>0){
        if(people[0]+people.at(-1)>limit) {
            answer++;
            people.pop();
        }
        else{
            answer++;
            people.pop();
            people.shift();
        }
    }

    return answer;
}