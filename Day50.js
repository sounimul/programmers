/*
Lv. 2 연습문제
- 호텔 대실
*/

/*
호텔 대실
*/
function solution(book_time) {
    var answer = 0;
    let room = [];
   
    function Out(time){
        let hour = Number(time.slice(0,2))*60;
        let min = Number(time.slice(3,))+10;
        //console.log('시',hour,'분',min, hour+min);
        return hour+min;
    }
    book_time = book_time.map(item=>[(Number(item[0].slice(0,2))*60)+(Number(item[0].slice(3,))),Out(item[1])]);
    book_time.sort((a,b)=>a[0]-b[0]);
    //console.log(book_time);
   
    let c =0 ;
    for(let i=0;i<book_time.length;i++){
        for(let j=0;j<room.length;j++){
            if(room[j]<=book_time[i][0]){
                room[j]=book_time[i][1];
                c=1;
                break;
            }
        }
        if(c!=1) room.push(book_time[i][1]);
        c=0;
    }
    //console.log(room);
    answer = room.length;
   
    return answer;
}