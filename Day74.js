/*
Lv. 2 연습문제
- [3차] 압축
*/

/*
[3차] 압축
*/
function solution(msg) {
    var answer = [];
    let dic = {};
    let n = 65;
    
    for(let s=1;s<=26;s++){
        dic[s] = String.fromCharCode(n);
        n++;
    }
    
    let k = 27;
    
    while(1){
        if(msg.length<1) break;
        let last = 0;
        
        for(let i=1;i<=msg.length;i++){
            if(Object.values(dic).includes(msg.slice(0,i))) { last = i;    
        }
            else {
                dic[k] = msg.slice(0,i);
                k++;
                break;
            }
        }
        answer.push(Object.keys(dic).find(key => dic[key] === msg.slice(0,last)));
        msg = msg.slice(last,);
    }
    answer = answer.map(item=>Number(item));
    return answer;
}
