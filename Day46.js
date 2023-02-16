/*
Lv. 2 연습문제
- 프린터
*/

/*
프린터
*/
function solution(priorities, location) {
    var answer = 0;
   
    let max = 0;
   
    let ind = priorities.map((item, index)=> index);
    let com = [];
    //console.log(ind);
    while(1){
        //console.log('ind', ind);
        max = Math.max(...priorities);
        if(priorities.length==0) break;
       
        if(priorities[0]==max) {
            //com.push(priorities[0]);
            com.push(ind[0]);
           
            priorities.shift();
            ind.shift();
           
            //answer++;
        }
        else {
            priorities.push(priorities[0]);
            ind.push(ind[0]);
           
            priorities.shift();
            ind.shift();
        }
    }
   
    answer = com.indexOf(location)+1;
    return answer;
}