/*
Day5 수학, 배열
*/

/*
옷가게 할인받기
머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

소수 생각하기!
큰 값부터 조건문에 집어넣기!
*/
function solution(price) {
    
    if(price>=500000) price*=0.8;
    else if(price>=300000) price*=0.9;
    else if(price>=100000) price*=0.95;
    
    return Math.trunc(price);
}

/*
아이스 아메리카노
머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 
머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 
잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

소수 생각하기!
*/
function solution(money) {
    var answer = [];
    
    answer.push(Math.trunc(money/5500));
    answer.push(money-answer[0]*5500);
    
    return answer;
}

/*
나이 출력(출생 연도 계산)
function solution(age) {
    var answer = 0;
    answer = 2023-age
    return answer;
}
*/
const solution = (age)=>2023-age;

/*
배열 뒤집기
arr.reverse()

function solution(num_list) {
    var answer = [];
    answer = num_list.reverse();
    return answer;
}
*/
const solution = (num_list) => num_list.reverse();