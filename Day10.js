/*
Day 10 조건문, 배열, 수학, 시뮬레이션
*/

/*
점의 위치 구하기
좌표가 몇 사분면에 속하는지 구하기
*/
function solution(dot) {
    var answer = 0;
    if(dot[0]>0){
        if(dot[1]>0) answer = 1;
        else answer = 4;
    }
    
    else{
        if(dot[1]>0) answer = 2;
        else answer = 3;
    }
    return answer;
}

/*
(배열)2차원으로 만들기
주어진 n 길이로 잘라서 2차원 배열로 만들기
*/
function solution(num_list, n) {
    var answer = [];
    for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n));
  }

    return answer;
}
/*
공 던지기
머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 
친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
*/
function solution(numbers, k) {
    var answer = 0;
    let ind = 1;
    for(let i=1;i<k;i++){ //공을 던지는 사람을 구해야 하므로 횟수-1
        ind+=2; //일단 순서 넘어가야하니깐 더하고,
        if(ind>numbers.length) ind -= numbers.length; //빼준다
        console.log(ind);
    }
    answer = ind;
    return answer;
}

/*
배열 회전시키기
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
배열 numbers의 원소를 direction방향(left or right)으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
*/
function solution(numbers, direction) {
    var answer = [];
    let ind = 0;
    if(direction == 'right'){
        answer.push(numbers[numbers.length-1]); //마지막 인덱스 -1 쓰는 것은 slice
        ind = 0;
        for(let i=1;i<numbers.length;i++){
            answer[i] = (numbers[ind]);
            ind++;
        }
    }
    else{
        answer[0] = (numbers[1]);
        ind = 2;
        for(let i=1;i<numbers.length-1;i++){
            answer[i] = (numbers[ind]);
            ind++;
        }
        answer.push(numbers[0]);
        
    }
    return answer;
}