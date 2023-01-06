/*
Day6 문자열, 반복문, 출력, 배열, 조건문
*/

/*
문자열 뒤집기
*/
function solution(my_string) {
    var answer = '';
    for(let i=my_string.length-1;i>=0;i--){
        answer += my_string[i];
    }
    return answer;
}
/*
직각삼각형 출력하기
node.js 개념 등장, readline 모듈로 콘솔을 통해 값을 입력받음, 공백을 기준으로 값을 입력받음
*/
//Node.js
const readline = require('readline'); //require('파일 경로 src');
const rl = readline.createInterface({ //readline 모듈에서 콘솔을 통해 값을 입력받음
    input: process.stdin,
    output: process.stdout
});

let input = [];

let a = 0;

//한줄 입력받기, 공백을 기준으로 값 입력받기
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    //console.log(Number(input[0]));
    for(let i=0;i<Number(input[0]);i++){
        for(let j=0;j<=i;j++){
            //console.log('*');
            process.stdout.write('*'); //줄바꿈 없이 출력
        }
        console.log(''); 
        //console.log는 줄바꿈이 포함되어 있기 때문에, '\n' 출력하면 한 번 더 줄바꿈이 되어서 출력됨
    }
});

/*
짝수 홀수 개수
*/
function solution(num_list) {
    var answer = [0,0];
    
    for(let i=0;i<num_list.length;i++){
        if(num_list[i]%2==0) answer[0]++;
        else answer[1]++;
    }
    return answer;
}
/*
문자 반복 출력하기
*/
function solution(my_string, n) {
    var answer = '';
    for(let i=0;i<my_string.length;i++){
        for(let j=0;j<n;j++){
            answer += my_string[i];
        }
    }
    return answer;
}