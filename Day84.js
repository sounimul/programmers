/*
Lv. 2 연습문제
- 택배상자
*/

/*
택배상자
*/
function solution(order) {
    let answer = 0;
    let second = [];
    const len = order.length;
    let i = 1;
    let oi = 0;
    while(1){
        if(oi==len) return answer;
        
        if(second.at(-1)==order[oi]){
            //order.shift(); 시간초과
            oi++;
            second.pop();
            answer++;
        }
        
        else if(i == order[oi]) {
            //order.shift(); //시간초과
            oi++;
            answer++;
            i++;
        }
        else {
            
            if(i>=len) return answer;
            second.push(i);
            i++;
        }
    }
    
    return answer;
}
