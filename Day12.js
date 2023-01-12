/*
Day 12 문자열, 정렬, 사칙연산, 수학
*/

/*
모음('a','e','i','o','u') 제거
*/
function solution(my_string) {
    var answer = '';
    
    for(let i=0;i<my_string.length;i++){
        if(my_string[i]=='a' || my_string[i]=='e' || my_string[i]=='i'
          || my_string[i]=='o' || my_string[i]=='u') continue;
        else answer += my_string[i];
    }
    
    return answer;
}
/*
문자열 정렬하기 (1)
문자열 중에 숫자만 골라 오름차순 정렬
*/
function solution(my_string) {
    var answer = [];
    
    for(let i=0;i<my_string.length;i++){
        console.log(Number(my_string[i]));
        if(isNaN(Number(my_string[i]))==false) answer.push(Number(my_string[i]));
    }
    answer.sort();
    return answer;
}

/*
숨어있는 숫자의 덧셈(1)
*/
function solution(my_string) {
    var answer = 0;
    for(let i=0;i<my_string.length;i++){
        if(isNaN(Number(my_string[i]))==false) answer += Number(my_string[i]);
    }
    return answer;
}

/*
소인수분해
isPrime 소수 판단
*/
function solution(n) {
    var answer = [];
    
    function isPrime(num){
        for(let i=2;i<num;i++){
            if(num%i == 0) return false;
        }
        return true;
    }
    
    if(isPrime(n)==true) answer.push(n);
    else {
        for(let k=2;k<n;k++){
        if(isPrime(k)==true) {
                if (n%k==0)answer.push(k);
            }
        }
    }
    return answer;
}