/*
Day9 수학, 문자열, 해시, 완전탐색, 조건문
*/

/*
개미 군단
개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 
장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 
일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 
사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
*/
function solution(hp) {
    var answer = 0;
    
    //최소의 병력이므로 가장 큰 공격력을 가진 장군개미가 가장 많이 나가고
    answer += Math.trunc(hp/5);
    //남은 hp 0~4는 공격력 3을 가진 병정개미 최대 1마리와, 공격력 1인 일개미로 나가게 한다 
    switch (hp%5){
        case 0:
            break;
        case 1:
            answer += 1;
            break;
        case 2:
            answer += 2;
            break;
        case 3:
            answer += 1;
            break;
        case 4:
            answer += 2;
            break;
    }
    
    return answer;
}

/*
모스부호(1)
머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 
문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
*/
function solution(letter) {
    var answer = '';
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    //공백을 기준으로 새로운 배열 생성
    let code = letter.split(" ");
    for(let i=0;i<code.length;i++){
        answer += morse[code[i]];
    }
    return answer;
}

/*
가위 바위 보
이기는 경우를 순서대로 나타낸 문자열 return
*/
function solution(rsp) {
    var answer = '';
    //가위 2 바위 0 보 5
    for(let i=0;i<rsp.length;i++){
        if(rsp[i]==='2') answer += '0';
        else if(rsp[i]==='0') answer += '5';
        else answer += 2;
    }
    return answer;
}

/*
구슬을 나누는 경우의 수
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 
머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
 balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
 
 BigInt(n) : 최대치이상의 수(자바스크립트에서는 2^53 - 1)를 사용하기 위해서 사용하는 것이 BigInt이다. 
             BigInt는 Number와 연산, 비교를 할 수 없다.
*/

//문제를 푸는 핵심은 BigInt(1)를 사용하는 것
function solution(balls, share) {
    var answer = 0;
    /*
    서로 다른 n개 중 m개를 뽑는 경우의 수 공식 : n! / (n-m)! x m!
    팩토리얼 구하기 -> 함수로 활용
    */
    function f(n) { //factorial
        //var result = 1;
        var result = BigInt(1);
        for(let i=2; i<=n; i++) result *= BigInt(i);
        return result;
    }

    answer = f(balls)/(f(balls-share)*f(share));
    
    return answer;
}