/*
Day24 수학, 시뮬레이션, 문자열, 조건문, 반복문
*/

/*
치킨 쿠폰
*/
function solution(chicken) {
    var answer = 0;
    let sv = 0;

   while(chicken>=10){
    sv = Math.trunc(chicken/10);
    answer +=sv;
    chicken = sv+chicken%10;
   }
    return answer;
}

/*
이진수 더하기
입력값이 둘 다 0일 때 0 반환해야 함
*/
function solution(bin1, bin2) {
    var answer = '';
    function Bin(n){
        var num = [];
        let x = 0;
        num = n.split('');
        for(let i=1;i<=num.length;i++){
            
            x += num[num.length-i]*Math.pow(2,i-1);
        }
        console.log(x);
        return x;
    }
    let n = Bin(bin1)+Bin(bin2);
    if(n==0) return '0';
    else{
    while(n>0){
        answer += n%2;
        n = Math.trunc(n/2);
    }
    return answer.split('').reverse().join('');
    }
}

/*
A로 B 만들기
*/
function solution(before, after) {
    //뒤집기가 아닌 순서 바꾸기
    var answer = 0;
    for(let i=0;i<after.length;i++){
        before = before.replace(after[i],'*');
    }
    let check = before.split('').filter(item=>item != '*');
    if(check.length==0) answer = 1;
    
    return answer;
}

/*
k의 개수
*/
function solution(i, j, k) {
    var answer = 0;

    for(let c=i;c<=j;c++){
        if(String(c).includes(k)==true)
        answer += String(c).split(String(k)).length-1;
    }
    return answer;
}