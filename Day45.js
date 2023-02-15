/*
Lv. 2 연습문제
- 점프와 순간 이동
*/

/*
점프와 순간 이동
*/
function solution(n)
{
    var ans = 1;
    while(n>1){
      if(n%2==0) n /= 2;
      else {
          ans++;
          n = (n-1)/2;
      }
    }
    return ans;
}