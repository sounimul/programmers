/*
Lv. 2 연습문제
- 할인 행사
*/

/*
할인 행사
*/
function solution(want, number, discount) {
    var answer = 0;
    
    let ind = 0;
    while(ind<=discount.length-10){
        let buy = new Array(want.length).fill(0);
        let c = 0 ;
        for(let i=ind;i<ind+10;i++){
            if(want.includes(discount[i])) buy[want.indexOf(discount[i])]++;
            else {
                c=1;
                break;
            }
        }
        if(c!=1) {
            if(number.join('') == buy.join('')) answer++;
        }
        ind++;
    }
    return answer;
}
