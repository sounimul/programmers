/*
Lv. 2 연습문제
- 수식 최대화
*/

/*
수식 최대화
*/
function solution(expression) {
    var answer = [];
    
    let origin_num = expression.split(/[-+*/]/).map(item=>Number(item));
    let origin_exp = expression.match(/[-+*/]/g);
    let exp = [...new Set(expression.match(/[-+*/]/g))]; 

    function getCombinations(arr, selectNumber){
    const results = [];
    if (selectNumber === 1) return arr.map((item) => [item]); 

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((item) => [fixed, ...item]); 
      results.push(...attached); 
    });

    return results;
    }
    
    let order = getCombinations(exp, exp.length);
    order.forEach(arr=>{
        let copy = [...origin_num];
        let nexp = [...origin_exp];
        arr.forEach(e =>{
            let num = 0;
            while(nexp.includes(e)){
                if(e==='-'){
                    num = copy[nexp.indexOf(e)] - copy[nexp.indexOf(e)+1];
                }
                else if(e==='+'){
                    num = copy[nexp.indexOf(e)] + copy[nexp.indexOf(e)+1];
                }
                else {
                    num = copy[nexp.indexOf(e)] * copy[nexp.indexOf(e)+1];
                }
                
                copy.splice(nexp.indexOf(e),2,num);
                nexp.splice(nexp.indexOf(e),1);
            }
        });
        answer.push(...copy);
    });
    answer = answer.map(item=>Math.abs(item)).sort((a,b)=>b-a);
    
    return answer[0];
}
