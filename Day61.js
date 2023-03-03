/*
Lv. 2 연습문제
- 다리를 지나는 트럭
*/

/*
다리를 지나는 트럭
*/
function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    let bridge = [[truck_weights.shift(),0]];
    let sum = 0;
    sum += bridge[0][0];
    console.log(bridge, sum);
    
    while(1){
        if(truck_weights.length==0 && bridge.length==0) break;
        
        bridge.forEach(item=>item[1]++);
        
        if(bridge[0][1]==bridge_length) {
            sum -= bridge[0][0];
            bridge.shift();
        }
        
        if(bridge.length+1<=bridge_length && sum+truck_weights[0]<=weight){
            bridge.push([truck_weights.shift(),0])
            sum += bridge.at(-1)[0];
        }
        answer++;
    }
    
    return answer;
}