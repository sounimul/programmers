/*
Lv. 1 연습문제
- 체육복
*/

/*
체육복
*/
function solution(n, lost, reserve) {
    var answer = 0;
    let student = new Array(n).fill(1);
    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);
   
    reserve.map((item,index) => {
        if(lost.includes(item)) {
            reserve[index] = 0;
            lost.splice(lost.indexOf(item),1);
        }
    });
    // 반복문 내에서 삭제하면 오류 발생
    //잃어버리고 빌려줄 수 있는 학생 정보를 다시 세팅 먼저 해야함
    lost = lost.filter(item=>item!=0);
    reserve = reserve.filter(item=>item!=0);
    console.log(lost,reserve);
    for(let i=0;i<n;i++){
        if(lost.includes(i+1)){
            if(reserve.includes(i)) {
                reserve.splice(reserve.indexOf(i),1);
            }
            else if(reserve.includes(i+2)){
                reserve.splice(reserve.indexOf(i+2),1);
            }
            else student[i]=0;
        }
    }
   
    student.forEach(item => {
        if(item==1) answer++;
    });
   
    return answer;
}