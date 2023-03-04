/*
Lv. 2 연습문제
- [3차] 파일명 정렬
*/

/*
[3차] 파일명 정렬
*/
function solution(files) {
    var answer = [];
    
    answer = files
          .map((file) => {
            return file.match(/(\D+)(\d+)/);
            })
          .sort((a, b) => {
            if (a[1].toLowerCase() > b[1].toLowerCase()) { 
              return 1;
            } else if (a[1].toLowerCase() < b[1].toLowerCase()) {
              return -1;
            } else if(a[1].toLowerCase() === b[1].toLowerCase()){ 
              return parseInt(a[2]) - parseInt(b[2]);
            } else a.index-b.index;
          })
          .map((file) => file.input);
    return answer;
}
