/*
Lv. 2 연습문제
- 메뉴 리뉴얼
*/

/*
메뉴 리뉴얼
*/

function solution(orders, course) {
    var answer = [];
    let letter = {};
    let temp = [];
    
    function getCombinations(arr, selectNumber){
    const results = [];
    if (selectNumber === 1) return arr.map((item) => [item]); 

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((item) => [fixed, ...item]); 
      results.push(...attached); 
    });

        return results;
}
    
    orders.forEach(item=>{
        course.forEach(len=>{
            temp.push(...getCombinations(item.split('').sort(),len).map(item=>item.join('')));
        })
    })

    temp.forEach(item=>{
        if(letter[item]) letter[item]++;
        else letter[item]=1;
    })

    temp = Object.entries(letter).filter(item=>item[1]>=2);
    for(let i=0;i<course.length;i++){
        
        
        let arr = temp.filter(arr=>arr[0].length == course[i]);
        let max = Math.max(...arr.map(arr=>arr[1]));
        arr.forEach(arr=>{
            if(arr[1]==max) answer.push(arr[0]);
        });
    }
    return answer.sort();
}
