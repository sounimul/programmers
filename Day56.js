/*
Lv. 1 연습문제
- 성격 유형 검사하기
- 키패트 누르기
- 크레인 인형뽑기 게임
- 카드 뭉치
- 대충 만든 자판
- 과일 장수
*/

/*
성격 유형 검사하기
*/
function solution(survey, choices) {
    var answer = '';

     let result = 
        {R:0, T:0,
        C:0, F:0,
        J:0, M:0,
        A:0, N:0};

    for(let i=0;i<survey.length;i++){
        if(choices[i]>4){
            result[survey[i][1]] += (choices[i]-4);}
        else if(choices[i]<4){
            result[survey[i][0]] += Math.abs(choices[i]-4);
        }
    }
    answer += result.R >= result.T ? 'R':'T' ;
    answer += result.C >= result.F ? 'C':'F' ;
    answer += result.J >= result.M ? 'J':'M' ;
    answer += result.A >= result.N ? 'A':'N' ;
    
    return answer;
}

/*
키패트 누르기
*/
function solution(numbers, hand) {
    var answer = '';
    
    const n = {
        1:[0,0],
        2:[0,1],
        3:[0,2],
        4:[1,0],
        5:[1,1],
        6:[1,2],
        7:[2,0],
        8:[2,1],
        9:[2,2],
        0:[3,1]
    }
    
    function L(p1,p2){
        let l = Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]) //x좌표 + y좌표
        return l;
    }
    
    let left = [3,0];
    let right = [3,2];
    
    for(let i=0;i<numbers.length;i++){
        
        if(numbers[i]==1 || numbers[i]==4 || numbers[i]==7) {
            answer += 'L';
            left = n[numbers[i]];
        }
        else if(numbers[i]==3 || numbers[i]==6 || numbers[i]==9) {
            answer += 'R';
            right = n[numbers[i]];
        }
        else {
            let left_l = L(n[String(numbers[i])],left);
            let right_l = L(n[String(numbers[i])],right);

            if((left_l)<(right_l) || (left_l)==(right_l)&&hand=='left') {
                answer += 'L';
                left = n[numbers[i]];
            }
            else if ((left_l)>(right_l) || (left_l)==(right_l)&&hand=='right') {
                answer += 'R';
                right = n[numbers[i]];
            }
        }
    }
    return answer;
}

/*
크레인 인형뽑기 게임
*/
function solution(board, moves) {
    var answer = 0;
    let get = [];
    
    for(let i=0;i<moves.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[j][moves[i]-1] !=0 ) {
            get.push(board[j][moves[i]-1]);
            board[j][moves[i]-1] = 0;
            break;  
            }
        }

        if(get.length !=0 && get.at(-2)==get.at(-1)) {
            answer += 2;
            get = get.slice(0,-2);
        }
    }
    return answer;
}

/*
카드 뭉치
*/
function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    for(let i=0;i<goal.length;i++){
        if(cards1[0]==goal[i]){
            cards1.shift();
        }
        else if(cards2[0]==goal[i]){
            cards2.shift();
        }
        else {
            answer = 'No';
            break;
        }
    }
    return answer;
}

/*
대충 만든 자판
*/
function solution(keymap, targets) {
    var answer = [];
    let min = [];
    let sum = 0;
    for(let i=0;i<targets.length;i++){
        for(let s of targets[i]){
            keymap.forEach(item=>{
                if(item.indexOf(s) != -1) min.push(item.indexOf(s)+1);
            });
            if(min.length == 0) {
                sum = -1;
                break;
            }
            else sum += Math.min(...min);
            min = [];
        }
       answer.push(sum);
       sum = 0;
    }
    return answer;
}

/*
과일 장수
*/
function solution(k, m, score) {
    var answer = 0;

    score.sort((a,b)=>b-a);

    for(let i=m-1;i<score.length;i+=m){
            answer += score[i]*m;
    }
    
    return answer;
}