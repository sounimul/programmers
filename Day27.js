/*
Lv. 1 연습문제
- 2016년
*/

/*
2016년
*/

function solution(a, b) {
    var answer = '';
    let day = ['FRI', 'SAT', 'SUN','MON','TUE','WED','THU'];
    let n = 0;
    //2월달 29일
    for(let i=1;i<a;i++){
        {
        if(i==1 || i==3 || i==5 || i==7 || i==8|| i==10 || i==12){
            n += 31;
        }
        else if(i==2) n+=29;
        else n+= 30;
        }
        }
    n += b;
    let index = n%7-1;
    if(index==-1) answer= day.at(-1);
    else answer = day[index];
    return answer;
}