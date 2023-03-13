/*
Lv. 2 연습문제
- 타겟 넘버
*/

/*
타겟 넘버
*/
function solution(numbers, target) {
    var answer = 0;
    const length = numbers.length;
    
    function getSum(ind, sum) {
          if (ind === length) {
            if (sum === target) {
              answer++;
            }
          } 
          else {
            getSum(ind + 1, sum + numbers[ind]);
            getSum(ind + 1, sum - numbers[ind]);
          }
        }

    getSum(0, 0);
    
    return answer;
}
