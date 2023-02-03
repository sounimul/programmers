/*
Lv. 1 연습문제
- [1차] 다트 게임
*/

/*
[1차] 다트 게임
*/
function solution(dartResult) {
    var answer = 0;
    let game = [];
    const regex = /([0-9]|10){1}[SDT]{1}[*#]?/g;

    game = dartResult.match(regex);

    let num = '';
    let result = [0,0,0];

    game.forEach((item, index) => {
            num = Number(item.match(/[0-9]{1}0?/));
            //console.log(index);
       
            if(item.includes('S')) {result[index] += num;}
            else if(item.includes('D')) {result[index] += Math.pow(num,2);}
            else if(item.includes('T')) {result[index] += Math.pow(num,3);}
           
            if(item.includes('*')) {
                if(index==0) result[index] *= 2;
                else {
                    result[index-1] *= 2;
                    result[index] *= 2;
                }
               
            }
            if(item.includes('#')) {
                result[index]*= -1;
            }
        //console.log(result);
    })
    answer = result.reduce((sum, value)=> sum+value);
    return answer;
   
}