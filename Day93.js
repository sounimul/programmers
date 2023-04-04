/*
Lv. 2 연습문제
- 마법의 엘리베이터
*/

/*
마법의 엘리베이터
*/
function solution(storey) {
    var answer = 0;
    let num = [];
    
    while(1){
        if(storey<10) {
            num.push(storey);
            break;
        }
        num.push(storey%10);
        storey = parseInt(storey/10);  
    }
    
    for(let i=0;i<num.length-1;i++){
        
        if(num[i]<6) {
            answer += num[i];
            if(num[i]===5&&num[i+1]+1>5) {
                num[i+1] += 1;
            }
        }
        else {
            answer += (10-num[i]);
            num[i+1] += 1;
        }

    }
    if(num.at(-1)<6) answer += num.at(-1);
    
    else {
        answer += (10-num.at(-1));
        answer += 1;
    }
    return answer;
}
