/*
Lv. 2 연습문제
- 오픈채팅방
*/

/*
오픈채팅방
*/
function solution(record) {
    var answer = [];
    let inform = [];
    let user = {};
    
    for(let i=0;i<record.length;i++){
        inform = record[i].split(' ');
        if(inform[0]=='Enter'){
            user[inform[1]] = inform[2];
            answer.push([inform[1],'님이 들어왔습니다.']);
        }
        else if(inform[0]=='Leave'){
            answer.push([inform[1],'님이 나갔습니다.']);
        }
        else if(inform[0]=='Change'){
            user[inform[1]] = inform[2];
        }
        inform = [];
    }
    answer = answer.map(item=>{
       return user[item[0]] + item[1]; 
    });
    
    return answer;
}