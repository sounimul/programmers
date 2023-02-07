/*
Lv. 2 연습문제
- 최솟값 만들기
- JadenCase 문자열 만들기
- 최댓값과 최솟값
- 이진 변환 반복하기
*/

/*
최솟값 만들기
*/
function solution(A,B){
    var answer = 0;

    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    for(let i=0;i<A.length;i++){
            answer += A[i]*B[i];
    }
    return answer;
}

/*
JadenCase 문자열 만들기
*/
function solution(s) {
    var answer = '';
    let str = s.split(' ');
    const regex = /[0-9]{1}/;
    
    str = str.map(item => {
        if(regex.test(item[0])) return item.toLowerCase();
        else return item.slice(0,1).toUpperCase() + item.slice(1,).toLowerCase();
    })
    answer = str.join(' ');
    return answer;
}

/*
최댓값과 최솟값
*/
function solution(s) {
    var answer = '';
    let ma =Math.max(...(s.split(' ').map(item=>Number(item))));
    let mi =Math.min(...(s.split(' ').map(item=>Number(item))));
    answer = `${mi} ${ma}`;
    return answer;
}

/*
이진 변환 반복하기
*/
function solution(s) {
    var answer = [0,0];
    let o = s.length;
    function Binary(n){
        let b = '';
        while(n>0){
            b += n%2;
            n = parseInt(n/2);
        }
        return b.split('').reverse().join('');
    }

    while(s != '1'){
        s = s.replaceAll('0','');
        answer[1] += o-s.length;
        s = Binary(s.length);
        answer[0]++;
        o = s.length;
    }
    
    return answer;
}