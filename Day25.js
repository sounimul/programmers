/*
Day25 시뮬레이션, 조건문, 수학
*/

/*
문자열 밀기
*/
function solution(A, B) {
    var answer = 0;
    let c = 0;
    while(c<A.length){
        
        console.log(c);
        if(A===B) {
            answer = c;
            break;
        }
        
        A = A.at(-1) + A.slice(0,A.length-1);
        console.log(A);
        c++;
    }
    if(c>=A.length) answer = -1;
    return answer;
}

/*
종이 자르기
*/
function solution(M, N) {
    var answer = 0;
    if(M==0 && N==0) answer = 0;
    else{
        answer += M-1;
        answer += (N-1)*M;
    }
    return answer;
}

/*
연속된 수의 합
*/
function solution(num, total) {
    var answer = [];
    
    let mid = Math.trunc(total / num);
    answer.push(mid);
    for(let i=1;i<=Math.trunc(num/2);i++){
        answer.push(mid-i);
        answer.push(mid+i);
    }
    
    answer = answer.sort((a,b)=>a-b);
    if(num%2 == 0) answer = answer.slice(1,);
    return answer;
}

/*
다음에 올 숫자
*/
function solution(common) {
    var answer = 0;
    if(common[1]-common[0] == common[2]-common[1]){
        answer = common.at(-1)+(common[1]-common[0]);
    }
    else{
        answer = common.at(-1)*(common[1]/common[0]);
    }
    return answer;
}