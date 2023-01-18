/*
Day19 문자열, 배열, 조건문
*/

/*
7의 개수
*/
function solution(array) {
    var answer = 0;
    answer = array.join().split('7').length-1;
    console.log(answer);
    return answer;
}

/*
잘라서 배열로 저장하기
*/
function solution(my_str, n) {
    var answer = [];
    for(let i=0;i<my_str.length;i += n){
        answer.push(my_str.slice(i,i+n));
    }
    console.log(answer);
    return answer;
}

/*
중복된 숫자 개수
*/
function solution(array, n) {
    var answer = [];
    answer = array.filter(item => item==n);
    return answer.length;
}

/*
머쓱이보다 키 큰 사람
*/
function solution(array, height) {
    var answer = [];
    answer = array.filter(item => item > height);
    console.log(answer);
    return answer.length;
}