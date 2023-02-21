/*
Lv. 2 연습문제
- 주차 요금 계산
*/

/*
주차 요금 계산
*/
function solution(fees, records) {
    var answer = []; //차량번호 작은 순서대로 요금 집언허기
    let park = {};
    let parking = {};
   
    function Park(t1,t2){
        let time1 = (Number(t1.slice(0,2))*60)+Number(t1.slice(3,));
        let time2 = (Number(t2.slice(0,2))*60)+Number(t2.slice(3,));
        return time2-time1;
    }
   
    function Add(time){
        let fee = fees[1];
        fee += Math.ceil((time-fees[0])/fees[2])*fees[3];
        return fee;
    }
   
   
    //시간기록
    for(let i=0;i<records.length;i++){
        //console.log(i);
        let s = records[i].slice(11,); //상태 IN OUT
        let t = records[i].slice(0,5); //시간
        let cn = records[i].slice(6,10); //차량번호
        //console.log(s, cn);
        if(s=='IN'){
            park[cn]=records[i].slice(0,5);
            //console.log('들어간다',park);
        }
        else {
            let pt= Park(park[cn],t);//주차 시간
           
            if(Object.keys(parking).includes(cn)) {
                //console.log(cn, '들어왔던 차');
                parking[cn] += pt;
            }
            else parking[cn] = pt;
           
            delete park[cn];

        }
    }
    for(let c of Object.keys(park)){
        let pt= Park(park[c],"23:59");
        if(!parking[c]) {
            parking[c] = pt;
        }
        else{
        parking[c] += pt;
        delete park[c];
        }
    }
   
    answer = Object.keys(parking).sort((a,b)=>a-b);
    answer = answer.map(item=>parking[item]);
    answer = answer.map(item=>{
        if(item<=fees[0]) return fees[1];
        else{
            return Add(item);
        }
    })
   
    return answer;
}