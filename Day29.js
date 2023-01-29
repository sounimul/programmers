/*
Lv. 1 연습문제
- 소수 만들기
- 모의고사
- 삼총사
- 신규 아이디 추천
*/

/*
소수 만들기
*/
function solution(nums) {
    var answer = [];
    
    function isPrime(n){
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i==0) return -1; //소수 아님
        }
        return 1; //소수
    }
    
    function com(select, arr){ //combination
        
        let an = [];
        
        if(select == 1) return arr.map(v => [v]); //1개 고를때는 함수 안의 값 1개씩 반환
        
        arr.forEach((fixed, index, past) => {
            const rest = past.slice(index+1); //고정되어 있는 값 뒤에 값으로 조합 만들어야 함
            const combination = com(select-1,rest); 
            //고르는 숫자가 1개 될때까지 줄여가면서 고르고, 배열은 그 뒤에 것으로 이루어진 것 중에서 고름
            const result = combination.map(v => [fixed, ...v]); //고정값이랑 조합 합치기
            an.push(...result);
        });
        return an
    }
    
    answer = (com(3, nums)).map(item => item[0]+item[1]+item[2]);
    answer = answer.filter(item => isPrime(item)==1);
    return answer.length;
}

/*
모의고사
*/
function solution(answers) {
    var answer = [];
    
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let anone = 0;
    let antwo = 0;
    let anthree = 0;
    
    for(let i=0;i<answers.length;i++){
        if(answers[i]==one[i%5]) anone++;
        if(answers[i]==two[i%8]) antwo++;
        if(answers[i]==three[i%10]) anthree++;
    }
    
    let max = Math.max(anone, antwo, anthree);
    
    if(max==anone) answer.push(1);
    if(max==antwo) answer.push(2);
    if(max==anthree) answer.push(3);
    
    return answer;
}

/*
삼총사
*/
function solution(number) {
    var answer = [];
    
    function com(arr, select){//combination
        let final = [] //최종 반환값, 계속 추가되므로 let
        
        if(select == 1) return arr.map(item=>[item]); //1개 고를 때
        
        arr.forEach((fixed, index, past)=>{;//2개 이상 재귀
        const rest = past.slice(index+1);
        const combination = com(rest, select-1);
        const result = combination.map(item=>[fixed, ...item]);
        final.push(...result);
        });
        return final;
    }
    
    answer = com(number,3);
    answer = answer.filter(item => item[0]+item[1]+item[2]==0);
    return answer.length;
}

/*
신규 아이디 추천
*/
function solution(new_id) {
    var answer = '';

    const one = /[A-Z]/;
    const two = /[a-z0-9\d\-\_\.]/;

    for (let s of new_id) {    
        if(one.test(s)) s = s.toLowerCase(); //소문자 치환 1단계 
        if(two.test(s)) answer += s; //조건에 맞는 문자만 걸러냄 2단계
    };

    answer = answer.replaceAll(/\.{2,}/g,'.'); //점 여러개 한개로 변경 3단계
    if(answer[0]=='.') answer = answer.slice(1,);
    if(answer.at(-1)=='.') answer = answer.slice(0,-1);

    if(answer.length>=16){ 
        answer = answer.substr(0,15);
        if(answer.at(-1)=='.') answer = answer.substr(0,14);
    }
    
    if(answer.length==0) answer = 'aaa';
    if(answer.length==1) answer = answer + answer.at(-1) + answer.at(-1);
    if(answer.length==2) answer += answer.at(-1);

    return answer;
}