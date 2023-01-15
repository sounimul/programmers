/*
Day15 문자열, 해시, 배열, 수학 
*/

/*
영어가 싫어요
*/
function solution(numbers) {
    var answer = 0;
    
    let num = ['zero','one','two','three','four',
               'five','six','seven','eight','nine']
    
    num.forEach((item, index) => numbers = numbers.split(item).join(String(index)));
    
    if(numbers[0]==0) numbers.substr(0,1);
    answer = Number(numbers);

    return answer;
}

/*
인덱스 바꾸기
*/
function solution(my_string, num1, num2) {
    var answer = '';
    answer = my_string.substring(0,num1)
            +my_string[num2] 
            +my_string.substring(num1+1, num2)
            + my_string[num1]
            + my_string.substring(num2+1);

    return answer;
}

/*
한 번만 등장한 문자
*/
function solution(s) {
    var answer = '';
    let count = {};
    
    for(let i=0;i<s.length;i++){
        if(Object.keys(count).includes(s[i])) count[s[i]]++;
        else count[s[i]] = 1;
    }
    let a = [];
    for (let key in count) {
        const value = count[key]

        if(value==1) a.push(key);
    }
    a.sort();
    answer = a.join('');
    return answer;
}

/*
약수 구하기
*/
function solution(n) {
    var answer = [];
    for(let i=1;i<=n;i++){
        if(n%i==0) answer.push(i);
    }
    return answer;
}