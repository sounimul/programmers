/*
Lv. 2 연습문제
- 행렬의 곱셈
*/

/*
행렬의 곱셈
*/
function solution(arr1, arr2) {
    var answer = [];
    let sum = 0;
    let temp = [];
   let arr = [];
    for(let i=0;i<arr2[0].length;i++){
        for(let j=0;j<arr2.length;j++){
            arr.push(arr2[j][i]);
        }
        temp[i] = arr;
        arr=[];
    }
   let t = [];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<temp.length;j++){
            for(let k=0;k<arr2.length;k++){
             sum += arr1[i][k]*temp[j][k];  
            }
            t.push(sum);
            sum = 0;
        }
        answer.push(t);
        t = [];
    }

    return answer;
}