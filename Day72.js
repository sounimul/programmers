/*
Lv. 2 연습문제
- 소수 찾기
*/

/*
소수 찾기
*/
function solution(numbers) {
    var answer = 0;
    let temp = [];
    let num = numbers.split('');
    
    function getCombination(arr, selectNumber){
        const result = [];
        
        if(selectNumber===1) return arr.map(item=>[item]);
        
        arr.forEach((fixed, index, origin)=>{
            const rest = [...origin.slice(0,index), ...origin.slice(index+1)];
            const combinations = getCombination(rest, selectNumber - 1);
            const attached = combinations.map(item=>[fixed, ...item]);
            result.push(...attached);
        });
        return result;
    }
    
    for(let i=1;i<=num.length;i++){
        getCombination(num,i).forEach(item=>temp.push(Number(item.join(''))));
    }
    temp = [...new Set(temp)];
    
    function Check(n){
        for(let i=2;i<=n/2;i++){
            if(n%i==0) return -1;
        }
        return 1;
    }
    temp.forEach(item=> {if(Check(item)==1 && item>1) answer++;});
    return answer;
}
