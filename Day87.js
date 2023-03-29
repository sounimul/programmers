/*
Lv. 2 연습문제
- 2개 이하로 다른 비트
*/

/*
2개 이하로 다른 비트
*/
function solution(numbers) {
    let answer = [];
    
    answer = numbers.map(item => {
        let ind = item.toString(2).split('').reverse().indexOf('0');
        if(ind === -1) return item + 2**(item.toString(2).length-1);
        return item + (ind===0 ? 1:2**(ind-1));
    });
    
   
    return answer;
}
