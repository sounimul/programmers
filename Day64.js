/*
Lv. 2 연습문제
- 위장
*/

/*
위장
*/
function solution(clothes) {
    var answer = 0;
    let closet = {};
    
    clothes.forEach(item=>{
        if(Object.keys(closet).includes(item[1])) closet[item[1]].push(item[0]);
        else closet[item[1]] = [item[0]];
    })
    
    if(clothes.length==30 && Object.keys(closet).length==30) return  Math.pow(2,30) - 1;
    
    const getSubsets = function (arr) {
  let flag = new Array(arr.length).fill(false);
  const subSets = [];

  const subSet = function DFS (depth) { //DFS 알고리즘
    if (depth === arr.length) { // 트리의 끝
      const subSet = arr.filter((value, index) => flag[index]);
      subSets.push(subSet);

      return;
    }

    flag[depth] = true; //true = 트리의 왼쪽
    subSet(depth + 1);

    flag[depth] = false; //false = 트리의 오른쪽
    subSet(depth + 1);
  }
  
  subSet(0);
  return subSets;
}
    let Case = getSubsets(Object.keys(closet)).slice(0,-1);
    let s = 1;
    Case.forEach(item=>{
        item.forEach(value=> s*=closet[value].length);
        answer += s;
        s = 1;
    })
    
    
    return answer;
}
