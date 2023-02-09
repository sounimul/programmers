/*
Lv. 2 연습문제
- 기능개발
*/

/*
기능개발 
*/
function solution(progresses, speeds) {
    var answer = [];
    let index =0;
    let c=0;
   
    while(1){
        for(let i=0;i<progresses.length;i++){
            if(progresses[i]!=-1) progresses[i] += speeds[i];
        }
       
        progresses.forEach((item,index)=>{
            if(item>=100) {
                progresses[index]=-1;
            };
        });
       
        if(progresses[index]==-1) {
            for(let i=index;i<progresses.length;i++){
               
                if(progresses[i]!=-1){
                    index = i;
                    answer.push(c);
                    c=0;

                    break;
                }
                else c++;
            }
        };
       
        if(progresses.every(item=>item==-1)) {
            answer.push(c);
            break;
        }

    }
   
    return answer;
}