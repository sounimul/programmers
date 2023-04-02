/*
Lv. 2 연습문제
- 롤케이크 자르기
*/

/*
롤케이크 자르기
*/
function solution(topping) {
    var answer = 0;
    
    let toppings = new Map();
    let brother = new Map();
    
    topping.forEach(top =>{
       toppings.set(top,(toppings.get(top)||0)+1);
    });
    
    for(let t of topping){
        
        toppings.set(t, toppings.get(t)-1);
        brother.set(t, 1);
        
        if(toppings.get(t)===0) toppings.delete(t);
        if(toppings.size===brother.size) answer++;
        
        if(toppings.size<brother.size) break;
    }
    
    return answer;
}
