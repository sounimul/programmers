/*
Lv. 2 연습문제
- 124 나라의 숫자
*/

/*
124 나라의 숫자
*/

function solution(n) {
    var answer = '';
    const arr = [1,2,4];

    let k = 1;
    let diff = 0;
    while(1){
         if(Math.pow(3,k)>=n) {
             break;
         }
        else {
            diff += Math.pow(3,k);
            k++;
        }
    }
  
    function P(arr, s) {
        const results = [];
        if (s === 1) return arr.map((item) => [item]);

        arr.forEach((fixed, index, origin) => {
            const permutations = P(arr, s - 1);
            const attached = permutations.map((permutation) => [fixed, ...permutation]);
        results.push(...attached);
  });
  return results;
};
    let world = (P(arr,k)).map(item=>item.join(''));
    
    return answer;
}