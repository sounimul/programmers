/*
Day 2 사칙연산, 조건문, 배열
*/

/*
두 수의 나눗셈
정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 
1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
*/
const solution = (num1, num2) => parseInt(num1/num2*1000);

/*
숫자 비교하기
정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
*/
function solution(num1, num2) {
    return num1 === num2 ? 1 : -1 ;
}

/* 최대 공약수 구하기
분수의 덧셈
첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/
function solution(denum1, num1, denum2, num2) {
    
    var answer = [denum1*num2+denum2*num1,num1*num2];
    let gcd = 1;
    /*
    //최대공약수 구하기  
    const GCD = (n1, n2)=>{
        for(let i = 2;i<=Math.min(n1,n2);i++){
            if(n1%i===0&&n2%i===0) gcd = i;
        }
    }
    
    GCD(answer[0],answer[1]);
    
    answer[0]/= gcd;
    answer[1]/=gcd;
    
    return answer;
    */
    
    function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
    }
    
    gcd = fnGCD(answer[0],answer[1]);
    
    return [answer[0]/gcd, answer[1]/gcd];
}
/* 최대 공약수 구하는 공식
let gcd = 1;
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}
gcd = fnGCD(n1,n2);
*/

/* arr.map()사용하기 ans = arr.map(매개변수 => 변환식)
배열 두 배 만들기
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
*/
function solution(numbers) {
    let answer = [];
    /* 반복문 풀이
    for(let i =0;i<numbers.length;i++){
        answer.push(numbers[i]*2);
    }
    */

    //map 이용 풀이
    answer = numbers.map(n => n*2)
    return answer;
}