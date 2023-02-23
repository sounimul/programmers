/*
Lv. 1 연습문제
- 둘만의 암호
*/

/*
둘만의 암호
*/
function solution(s, skip, index) {
    var answer = '';
    let num = [];
    let num2 = [];

    for(let i=0;i<s.length;i++){
        num.push(s.charCodeAt(i));
    }
    for(let j=0;j<skip.length;j++){
        num2.push(skip.charCodeAt(j));
    }
   
    let c = 0;
    num = num.map(item=>{
        let nnum = item;
        while(1){
            if(c==index) break;
           
            else{
                nnum++;
                }
           
            if(nnum>122) nnum = 97;
           
            if(!num2.includes(nnum)){
                 c++;
            }
            }
        c=0;
        return nnum;
    })
    answer = (num.map(item=>String.fromCharCode(item))).join('');
    return answer;
}