/*
Day 3 사칙연산, 배열, 수학
*/

//나머지 구하기
const solution = (num1, num2) => num1%num2;

//중앙값 구하기
function solution(array) {
    var answer = 0;
    
    array.sort((a,b) => a-b);
    console.log(array);
    answer = array[Math.trunc(array.length/2)];
    return answer;
}

//최빈값 구하기
//too complicated
//해시맵 -> 값과 전체 객체를 배열로 변환 -> 값 배열 중에서 최대값 찾고, 이때 여러개일 경우의 수(cnt) 계산함 -> cnt가 1개일 경우는 key값 찾아서 반환, 아닐경우 -1 반환 
function solution(array) {
    var answer = 0;
    let o = {};
    
    for(let i=0;i<array.length;i++){
        if(Object.keys(o).includes(array[i].toString())==true) {
            o[array[i]] += 1;
        }
        else o[array[i]] = 1;
    }
    let v = Object.values(o);
    let a = Object.entries(o);
    
    let max = Math.max.apply(null,v);
    
    console.log(v,a,max);
    
    let count = 0;
    for(let j =0;j<v.length;j++){
        if(v[j]==max) count++;
    }
    if(count>1) answer = -1;
    else answer = parseInt(a[v.indexOf(max)]);

    return answer;
}
//짝수는 싫어요
function solution(n) {
    var answer = [];
    for(let i =1;i<=n;i+=2){
        answer.push(i);
    }
    return answer;
}