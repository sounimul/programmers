/*
Day16 문자열, 수학, 배열, 조건문
*/

/*
편지
*/
const solution = (message => message.length*2);

/*
가장 큰 수 찾기
Math.max.apply(null, array) == Math.max(...array)
*/
function solution(array) {
    var answer = [];
    //answer.push(Math.max.apply(null, array), array.indexOf(Math.max.apply(null, array)));
    answer.push(Math.max(...array), array.indexOf(Math.max(...array)));
    return answer;
}

/*
문자열 계산하기
*/
function solution(my_string) {
    var answer = 0;
    let math = my_string.split(' ');
    answer = Number(math[0]);
    for(let i=1;i<math.length;i++){
        if(math[i]=='+') answer += Number(math[i+1]);
        else if(math[i]=='-') answer -= Number(math[i+1]);
        
    }
    return answer;
}

/*
배열의 유사도
*/
function solution(s1, s2) {
    var answer = 0;
    for(let i=0;i<s1.length;i++){
        if(s2.includes(s1[i])) answer++;
    }
    return answer;
}