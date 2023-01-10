/*
Day 11 수학, 반복문
*/

/*
주사위의 개수
머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 
상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 
상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

부피 계산이 아니라 변끼리 나누어서 곱해줘야 함
*/
const solution = (box, n) => Math.trunc(box[0]/n)*Math.trunc(box[1]/n)*Math.trunc(box[2]/n);

/*
합성수 찾기(소수와 반대 개념)
n이하의 합성수의 개
*/
function solution(n) {
    var answer = 0; //cnt
    //소수 판별
    function check(n){
        let c = 0;
        for(let i=2;i<n;i++){
            if(n%i==0){
                c = 1; //자기자신 이외에 나누어 떨어짐
                break;
            }
        }
        if(c==1) return 1; //합성수
        else return 0; //소수
    }
    
    for(let i=1;i<=n;i++){
        //console.log(i,check(i));
        if(check(i)==1) answer++;
    }
    return answer;
}

/*
(배열에 들어있는 두 개의 수를 곱해서)최댓값 만들기(1)
*/
function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=> b-a);
    answer = numbers[0]*numbers[1]
    return answer;
}

/*
팩토리얼
n보다 작은 팩토리얼을 만드는 수 구하기
n은 3,628,800보다 작으며, 10! = 3,628,800
*/
function solution(n) {
    var answer = 0;
    let a = 1;
    for(let i=2;i<=10;i++){
        a *= i;
        console.log(i, a);
        
        if(a == n) {
            answer = i;
            break;
        }
        else if(a>n){
            answer = i-1;
            break;
        }
    }
    return answer;
}