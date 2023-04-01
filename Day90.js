/*
Lv. 2 연습문제
- 숫자 변환하기
*/

/*
숫자 변환하기
*/
function solution(x, y, n) {
    
    let result = [[y]];
    let ind = 1;
    
    if(x===y) return 0;
    
    while(1){
        result.push([]);
        result[ind-1].forEach(sum =>{
            if(sum-n>=0)result[ind].push(sum-n);
            if(Number.isInteger(sum/3)) result[ind].push(sum/3);
            if(Number.isInteger(sum/2)) result[ind].push(sum/2);
        })
        if(result[ind].includes(x)) break;
        if(result[ind].every(item=>item<x)) return -1;
        ind++;
    }

    return ind;
}
