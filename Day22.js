/*
Day22 dp, 수학, 조건문, 배열
*/

/*
저주의 숫자 3
*/
function solution(n) {
    var answer = 2;
    
    for(let i=2;i<=n;i++){
        if(answer%3==0 || String(answer).includes('3')){
        while(answer%3==0 || (String(answer).includes('3'))){
            answer++;
        }
        }
        answer++;
    }
    
    return answer-1;
}

/*
평행
*/
function solution(dots) {
    var answer = 0;
    
    function D(a,b,c,d){
let m1 = (a[1]-b[1])/(a[0]-b[0]);
let m2 = (c[1]-d[1])/(c[0]-d[0]);
        console.log(m1,m2);
        if(m1===m2) return 1;
}
    if(D(dots[0],dots[1],dots[2],dots[3])==1) answer=1;
    else if (D(dots[0],dots[2],dots[1],dots[3])==1) answer=1;
    else if(D(dots[0],dots[3],dots[1],dots[2])==1) answer=1;
    
    return answer;
}

/*
겹치는 선분의 길이
*/
function solution(lines) {
    var answer = 0;
    let line =[];
    let start =Math.min(lines[0][0],lines[1][0],lines[2][0]);
    let end = Math.max(lines[0][1],lines[1][1],lines[2][1]);
    
    let len = (start*end<=0)?Math.abs(end)+Math.abs(start):Math.abs(end-start);
    
    for(let i=0;i<=len;i++){
line.push(0);}
    //console.log('empty',line);

    for(let i=lines[0][0]-start;i<lines[0][0]-start+lines[0][1]-lines[0][0];i++){line[i]++;}
    
    //console.log(line);
    
    for(let i=lines[1][0]-start;i<lines[1][0]-start+lines[1][1]-lines[1][0];i++){
line[i]++;}
    //console.log(line);
    
    for(let i=lines[2][0]-start;i<lines[2][0]-start+lines[2][1]-lines[2][0];i++){
line[i]++;}
    
    //console.log(line);
    
    answer+=(line.filter(item=>item>=2)).length;

    return answer;

}

/*
유한소수 판별하기
*/
function solution(a, b) {
    var answer = 0;
    let a_arr = [];
    let b_arr = [];
    
    function isPrime(num){
        for(let i=2;i<num;i++){
            if(num%i == 0) return false;
        }
        return true;
    }
    
        for(let k=1;k<=a;k++){
        if(a%k==0) a_arr.push(k);
        }    
        for(let i=a_arr.length;i>0;i--){
                if(b%a_arr[i]==0) {
                    a /= a_arr[i];
                    b /= a_arr[i];
                    break;
                }
        }
    
    for(let k=2;k<=b;k++){
        if(isPrime(k)==true) {
                if(b%k==0)b_arr.push(k);
            }
        }
    console.log(b_arr);
    for(let i=0;i<b_arr.length;i++){
        if(b_arr[i]==2 || b_arr[i]==5) continue;
        else {
            answer = 2;
            break;
        }
    }
    if(answer==0) answer=1;
    return answer;
}