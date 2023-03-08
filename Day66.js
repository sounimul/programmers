/*
Lv. 2 연습문제
- 덧칠하기
*/

/*
덧칠하기
*/
function solution(n, m, section) {
    var answer = 0;
    let arr = new Array(n).fill(0);
    section.forEach(item=>{
        if(arr[item-1]==0){
            answer++;
            for(let i=item-1;i<item+m-1;i++){
                if(i<arr.length) arr[i] = 1;
            }
        }
    });
    return answer;
}
