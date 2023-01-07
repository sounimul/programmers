/*
Day8 배열, 구현, 수학
*/

/*
배열 자르기 
slice(begin, end) : 어떤 배열의 begin부터 end(미포함)까지에 대한 얕은 복사본을 새로운 배열 객체로 반환하며, 원본 배열을 바뀌지 않는다.
*/
const solution = (numbers, num1, num2) => numbers.slice(num1, num2+1);

/*
외계행성의 나이
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, 
PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 
나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
*/
function solution(age) {
    var answer = '';
    //인덱스로 간단히 생각할 수 있는 문제였음!
    /*
    let change = {
        0: 'a', //key값은 string
        1: 'b',
        2: 'c',
        3: 'd',
        4: 'e',
        5: 'f',
        6: 'g',
        7: 'h',
        8: 'i',
        9: 'j'
    }
    */
    let check = 'abcdefghij';
    let num = String(age);
    
    for(let i=0;i<num.length;i++){
        answer += check[num[i]];
    }
    
    return answer;
}

/*
진료순서 정하기
*/
function solution(emergency) {
    var answer = [];
    //배열을 복사하기 위해 =을 사용하면 바뀐 값까지 반영됨
    let temp = [...emergency]; //깊은 복사 [...배열명]
    emergency.sort((a,b)=>b-a); //내림차순 정렬
    
    for(let i=0;i<emergency.length;i++){
       answer.push((emergency.indexOf(temp[i]))+1); //순서이므로 +1
    }
    return answer;
}

/*
순서쌍의 개수
*/
function solution(n) {
    var answer = 0; //개수
    
    //순서쌍이니깐 중첩 반복문 => 시간 초과
    //약수 이용해야 하나, 제곱수라도 상관 없는듯...

    for(let i=1;i<=n;i++){
            if(n%i==0) answer++;
    }

    return answer;
}