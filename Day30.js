/*
Lv. 1 연습문제
- [1차]비밀지도
- 콜라 문제
- 푸드 파이트 대회
- 최소직사각형
- 실패율
*/

/*
[1차]비밀지도
*/
function solution(n, arr1, arr2) {
    var answer = [];
    let map1 = [];
    let map2 = [];
    //이진수 변환해서 배열에 넣기
    function Binary(num){
        let result=[];
        while(num>0){
            result.push(num%2);
            //n = parseInt(num/2);
            num = (num-(num%2))/2;
        }

        
        while(result.length!=n){
            result.push(0);
        }
        result = result.reverse();
        return result;
    }
    
    map1 = arr1.map(item=>Binary(item));
    map2 = arr2.map(item=>Binary(item));
    //console.log(map1, map2);
   
    for(let i=0;i<n;i++){
        answer[i] = [];
        for(let j=0;j<n;j++){
            if( map1[i][j]=='1' || map2[i][j]=='1') answer[i].push('#');
            else answer[i].push(' ');
        }
        answer[i] = answer[i].join('');
    }
    //console.log(answer);
    return answer;
}

/*
콜라 문제
*/
function solution(a, b, n) {
    var answer = 0;

    while(n>=a){
        answer += parseInt(n/a)*b;
        n = (parseInt(n/a)*b) + (n%a);
    }
    return answer;
}

/*
푸드 파이트 대회
*/
function solution(food) {
    var answer = '0';
    let order = '';
    //앞, 뒤에 음식 순서 붙임 => 음식순서+answer+음식순서
    let n = 0;
    food.forEach(item => {
    if(item>=2){
        for(let i=0;i<parseInt(item/2);i++){
            order += String(n);
        }
    }
        n++;
    });
    
    answer = order + answer + order.split('').reverse().join('');
    
    return answer;
}

/*
최소직사각형
*/
function solution(sizes) {
    var answer = 0;
    let s1 = Math.max(sizes[0][0], sizes[0][1]); //긴변
    let s2 = Math.min(sizes[0][0], sizes[0][1]); //짧변
    
    
    for(let i=0;i<sizes.length;i++){

        if(s1 >= Math.max(sizes[i][0],sizes[i][1]) 
           && s2 >= Math.min(sizes[i][0],sizes[i][1])) continue;
        
        else {
            
            s1= s1<Math.max(sizes[i][0],sizes[i][1]) ? Math.max(sizes[i][0],sizes[i][1]) : s1;
            s2 = s2<Math.min(sizes[i][0],sizes[i][1]) ? Math.min(sizes[i][0],sizes[i][1]) : s2;

        }
    }
    
    answer = s1*s2;
    return answer;
}

/*
실패율
*/
function solution(N, stages) {
    var answer = [];
    //스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    let nclear = 0;
    let reach = 0;
    
    for(let i=1;i<=N;i++){
        stages.forEach(item=> {
            if(item>=i) {reach++;
                         if(item==i) nclear++;
                        }
            
        })
        answer.push([i,nclear/reach]);
        nclear=0;
        reach=0;
    }
    answer = answer.sort((a,b)=> b[1]-a[1] || a[0]-b[0]).map(v=>v[0]);
    
    return answer;
}