/*
Lv. 1 연습문제
- 문자열 내 마음대로 정렬하기
- 두 개 뽑아서 더하기
- 숫자 문자열과 영단어
- 가장 가까운 같은 글자
*/

/*
문자열 내 마음대로 정렬하기
*/
function solution(strings, n) {
    var answer = [];
    let string = [];
    
    for(let i=0;i<strings.length;i++){
        string.push(strings[i][n]+strings[i]);
    }
    
    string.sort();
    answer = string.map(item=>item.slice(1,));
    return answer;
}

/*
두 개 뽑아서 더하기
*/
function solution(numbers) {
    var answer = [];
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(answer.includes(numbers[i]+numbers[j])==false) answer.push(numbers[i]+numbers[j]);
        }
    }
    answer.sort((a,b)=>a-b);
    return answer;
}

/*
숫자 문자열과 영단어
*/
function solution(s) {
    var answer = 0;
    const number = {
        zero : 0,
        one : 1,
        two: 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9
    }
    Object.keys(number).map(function(key){
       s = s.replaceAll(key, number[key]);
    });
    //console.log(s);
    answer = Number(s);
    return answer;
}

/*
가장 가까운 같은 글자
*/
function solution(s) {
    var answer = [];
    let dic = {};
    
    for(let i=0;i<s.length;i++){
        if(Object.keys(dic).includes(s[i]) === false) {
            answer.push(-1);
            dic[s[i]] = i;
        }
        else {
            answer.push(Math.abs(i-dic[s[i]]));
            dic[s[i]] = i;
        }
    }
    return answer;
}