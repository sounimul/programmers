/*
Day21 문자열, 사칙연산, 시뮬레이션, 2차원배열, 수학, 배열
*/

/*
숨어있는 숫자의 덧셈(2)
*/
function solution(my_string) {
    var answer = 0;
    //let num = my_string.split(/[a-zA-Z]+/).map(item=>Number(item));
    let num = my_string.split(/[\D]+/).map(item=>Number(item));
    for(let i=0;i<num.length;i++){
        answer += num[i];
    }
    return answer;
}

/*
안전지대
*/
function solution(board) {
    var answer = Math.pow(board.length,2);
    //board.map(i=>console.log(i));
    //board.map(i=>i.map(j=>console.log(j)));
    
    //console.log(board.every(i=>i.every(j=>j==1))); //이차원 배열이니깐 every 두번
    if(board.every(i=>i.every(j=>j==1))==true) {
        answer = 0;
        console.log('모두 1');
    }
    
    else {

        for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]==1){
                //런타임 에러, 폭탄이 모서리에 위치할 때 인덱스 참조 에러
                if(i>0 && board[i-1][j]!=1) board[i-1][j]=2;
                if(j>0&&board[i][j-1]!=1) board[i][j-1]=2;
                if(i+1<board.length&&board[i+1][j]!=1) board[i+1][j]=2;
                if(j+1<board.length&&board[i][j+1]!=1) board[i][j+1]=2;
                if(i+1<board.length && j+1<board.length&&board[i+1][j+1]!=1) 
                    board[i+1][j+1]=2;
                if(i>0 && j+1<board.length&&board[i-1][j+1]!=1) 
                    board[i-1][j+1]=2;
                if(j>0 && i+1<board.length&&board[i+1][j-1]!=1) 
                    board[i+1][j-1]=2;
                if(i>0 && j>0&&board[i-1][j-1]!=1) board[i-1][j-1]=2;
            }
        }
    }
          /*
          for(let i=0;i<board.length;i++){
              for(let j=0;j<board.length;j++){
                  if(board[i][j]==1 || board[i][j]==2) answer--;
              }
          }
          */
          board.map(i=>i.map(j=>{
              if(j==1||j==2) answer--;
          }))
         }
    
    return answer;
}

/*
삼각형의 완성조건(2)
*/
function solution(sides) {
    var answer = 0;
    
    //주어진 것 중에 가장 큰 변 존재
    for(let i=1;i<=Math.max(...sides);i++){
        if(Math.max(...sides)<Math.min(...sides)+i) answer++;
        //console.log(i,answer);
    }
    //추가되는 것이 가장 큰 변
    let n = Math.max(...sides)+1;
    while(n<Math.max(...sides)+Math.min(...sides)){
        answer++;
        //console.log(n,answer);
        n++
        
    }
    
    return answer;
}

/*
외계어 사전
*/
function solution(spell, dic) {
    var answer = 0;
    
    for(let i=0;i<dic.length;i++){
           for(let j=0;j<spell.length;j++){
            if(dic[i].includes(spell[j])==false) {
                console.log(spell[j]+'포함안함');
                answer--;               
        }
               else answer++;
        }
        if(answer==spell.length) {
        answer=1;
        break;
        }
        else answer=0;
    }
    if(answer!=1) answer=2;

    return answer;
}