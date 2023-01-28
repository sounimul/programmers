/*
Lv. 1 연습문제
- 문자열 나누기
- 햄버거 만들기
- 옹알이 (2)
- 소수 찾기
*/

/*
문자열 나누기
*/
function solution(s) {
    var answer = [];
    let one = 1;
    let others = 0;
    
    while(s.length != 0){

        if(s.length==1){
            answer.push(s);
            break;
        }

        else {
        for(let i=1;i<s.length;i++){
        
            if(s[i]==s[0]) one++;
            else others++;
        
            if(one==others) {
                answer.push(s.slice(0,i+1)); //뒤에 인덱스 포함 안됨
                s = s.slice(i+1,);
                break;
            }
            else if(i+1>=s.length){ //두 횟수는 다른데, 더 이상 읽을게 없다면 종료
                answer.push(s.slice(0,i+1)); //뒤에 인덱스 포함 안됨
                s = '';
                break;
            }
        }

        one = 1;
        others = 0;
    }
        
    }

    return answer.length;
}

/*
햄버거 만들기
*/
function solution(ingredient) {
    var answer = 0;
    let stack = [];
    
    for(let i=0;i<ingredient.length;i++){
        if(ingredient[i]==1) {
            if(stack.at(-1) == 1 || stack.length==0) stack.push(1);
            
            else if(stack.at(-1)==3) {
                stack = stack.slice(0,-3);
                answer++;
            }
            else stack.push(1);
        }
        
        else if(ingredient[i]-1==stack.at(-1)) {
            stack.push(ingredient[i]);
        }
        
        else{
           stack = [];
        }
    }

    return answer;
}

/*
옹알이 (2)
*/
function solution(babbling) {
    var answer = 0;
    let say = ["aya", "ye", "woo", "ma"];
    
    //연속해서 같은 발음을 하는 것을 어려워함, 연속하지 않으면 가능함
    
    for(let i=0;i<babbling.length;i++){
        babbling[i] = babbling[i].replaceAll(/aya/g,'1');
        babbling[i] = babbling[i].replaceAll(/ye/g,'2');
        babbling[i] = babbling[i].replaceAll(/woo/g,'3');
        babbling[i] = babbling[i].replaceAll(/ma/g,'4');
        
        if(isNaN(Number(babbling[i])) === false) {
          // console.log();
           if(babbling[i].match(/1{2,}|2{2,}|3{2,}|4{2,}/g)) continue;
            else answer++;
           }
        //if(babbling[i]=='*'||babbling[i]=='**'||babbling[i]=='***'||babbling[i]=='****') answer++;
        
    }
    return answer;
}

/*
소수 찾기
(효율성 문제)
*/
function solution(n) {
    var answer = 0;
    
    function isPrime(num){
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0) return -1; //소수 아님
        }
        return 1;
    }
    
    for(let i=2;i<=n;i++){
        
        if(i==2 || i==3) answer++;
        else if(isPrime(i)==1) answer++;
    }
    
    return answer;
}
