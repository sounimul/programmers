/*
Lv. 1 연습문제
- 신고 결과 받기
*/

/*
신고 결과 받기
*/
function solution(id_list, report, k) {
    var answer = {};
    let result = {};
    let list = [];
   
    report = [...new Set(report)];
    id_list.forEach(item=>{
        result[item]=[];
        answer[item]=0;
    });
   
    for(let j=0;j<report.length;j++){
        result[report[j].split(' ')[1]].push(report[j].split(' ')[0]);
    }

    for(let i of Object.keys(result)){
        if(result[i].length>=k) {
            result[i].forEach(item=>answer[item]++);
        }
    }
    return Object.values(answer);
}