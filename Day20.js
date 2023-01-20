/*
Day20 수학, 시뮬레이션, 문자열, 사칙연산
*/

/*
직사각형 넓이 구하기
*/
function solution(dots) {
    var answer = 0;
    let x=0;
    let y=0;
    
    //가로 x
    if(dots[0][0] != dots[1][0]){
        if(dots[0][0]*dots[1][0]<0) 
        x = Math.abs(dots[0][0])+Math.abs(dots[1][0]);
        else x = Math.abs(Math.abs(dots[0][0])-Math.abs(dots[1][0]))
    } 
    else {
        if(dots[0][0]*dots[2][0]<0) 
        x = Math.abs(dots[0][0])+Math.abs(dots[2][0]);
        else x = Math.abs(Math.abs(dots[0][0])-Math.abs(dots[2][0]))
    }
    console.log(x);
    
    //세로 y
    if(dots[0][1] != dots[1][1]){
        if(dots[0][1]*dots[1][1]<0) 
        y = Math.abs(dots[0][1])+Math.abs(dots[1][1]);
        else y = Math.abs(Math.abs(dots[0][1])-Math.abs(dots[1][1]))
    } 
    else {
        if(dots[0][1]*dots[2][1]<0) 
        y = Math.abs(dots[0][1])+Math.abs(dots[2][1]);
        else y = Math.abs(Math.abs(dots[0][1])-Math.abs(dots[2][1]))
    } 
    console.log(y);
    answer = Math.abs(x)*Math.abs(y);
    return answer;
}

/*
캐릭터의 좌표
*/
function solution(keyinput, board) {
    var answer = [0,0];

    let x = (board[0]-1)/2;
    let y = (board[1]-1)/2;
    
    for(let i=0;i<keyinput.length;i++){
        if(keyinput[i]=='left' && answer[0]-1 >= -x) answer[0]--; 
        else if(keyinput[i]=='right'&& answer[0]+1 <= x) answer[0]++;
        else if(keyinput[i]=='up' && answer[1]+1 <= y) answer[1]++;
        else if(keyinput[i]=='down' && answer[1]-1 >= -y) answer[1]--;        
    }
    return answer;
}

/*
최댓값 만들기 (2)
*/
function solution(numbers) {
    var answer = [];
    
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            answer.push(numbers[i]*numbers[j]);
        }
    }
    answer.sort((a,b)=>b-a);
    
    return answer[0];
}

/*
다항식 더하기
*/
function solution(polynomial) {
    var answer = '';
    let num = polynomial.split(" ");
    let x = 0;
    let n = 0;
    console.log(num);
    
    for(let i=0;i<num.length;i+=2){
        if(num[i].includes('x')) {
            if(num[i]=='x') x++;
            x += Number(num[i].slice(0,-1));
        }
        else n+=Number(num[i]);
    }
    
    if(x==0) answer = String(n);
    else if(n==0) {
        if(x==1) answer = 'x';
        else answer = String(x)+'x';
    }
    else {
        if(x==1) answer = 'x + ' + String(n);
        else answer = String(x)+'x + ' + String(n);
    }
    return answer;
}