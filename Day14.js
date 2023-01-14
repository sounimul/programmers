/*
Day14 조건문, 반복문, 시뮬레이션, 문자열
*/

/*
가까운 수
*/
function solution(array, n) {
    
    var answer = 0;
    
    array.sort((a,b) => a-b);
    //정렬 후에 값 처리하기
    answer = array[0];
    let gap = Math.abs(array[0]-n);
    
    for(let i=1;i<array.length;i++){
        if(Math.abs(array[i]-n)<gap) {
            gap = Math.abs(array[i]-n);
            answer = array[i];
            }
    }
    return answer;
}

/*
369게임
*/
function solution(order) {
    var answer = 0;
    order = String(order);
    for(let i=0;i<order.length;i++){
        if(order[i]=='3' || order[i]=='6' || order[i]=='9') answer++;
    }
    return answer;
}

/*
암호 해독
*/
function solution(cipher, code) {
    var answer = '';
    for(let i=code-1;i<cipher.length;i+=code){
        answer += cipher[i];
    }
    return answer;
}

/*
대문자와 소문자
*/
function solution(my_string) {
    var answer = '';
    function isUpper(s){
        if(s==s.toUpperCase()) return true;
        else return false;
    }
    
    for(let i=0;i<my_string.length;i++){
        if(isUpper(my_string[i])==true) answer += my_string[i].toLowerCase();
        else answer += my_string[i].toUpperCase();
    }
    return answer;
}