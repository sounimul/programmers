/*
Day7 문자열, 조건문, 수학, 반복문
*/

/*
특정 문자 제거하기
모든 문자 찾는 것이므로 정규식 생성 객체 RegExp() 활용함
혹은 다른 풀이법으로 split활용 가능 
split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눈다.
*/
const solution = (my_string,letter) => {
    let l = new RegExp(letter,"g");
    return my_string.replace(l,'');
};
/*
각도기
filter() 사용 가능
*/
function solution(angle) {
    var answer = 0;
    if(angle>0 && angle<90) answer = 1;
    else if(angle==90) answer = 2;
    if(angle>90 && angle<180) answer = 3;
    else if(angle==180) answer = 4; //else
    
    return answer;
}
/*
양꼬치
*/
/*
function solution(n, k) {
    var answer = 0;
    
    answer += 12000*n;
    answer += 2000*(k-(Math.trunc(n/10)));
    
    return answer;
}
*/

const solution = (n,k) => (12000*n) + 2000*(k-(Math.trunc(n/10)));
/*
짝수의 합
*/
function solution(n) {
    var answer = 0;
    for(let i=1;i<=n;i++){
        if(i%2==0) answer += i;
    }
    return answer;
}