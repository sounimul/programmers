/*
Lv. 2 연습문제
- 삼각 달팽이
*/

/*
삼각 달팽이
*/
function solution(n) {
    var answer = [];
    
    let sum2 = 0;
    for(let i=1;i<=n;i++){
        sum2 += i;
        answer.push(new Array(i).fill(0));
    }
    
    Fill(1,n,1,0,0);
    
    function Fill(c, len, sum,f,s){
        if(sum>sum2) return answer;
        
        else if(c==1){
            for(let i=sum;i<len+sum;i++){
                answer[f][s] = i;
                f++;
            }
            return Fill(2,len-1,sum+len,f-1,s+1);
        }
        else if(c==2){
            for(let i=sum;i<len+sum;i++){
                answer[f][s] = i;
                s++;
            }
            return Fill(3,len-1,sum+len,f-1,s-2);
        }
        else if(c==3){
            for(let i=sum;i<len+sum;i++){
                answer[f][s] = i;
                f--;
                s--;
            }
            return Fill(1,len-1,sum+len,f+2,s+1);
        }
    }
    let answer2 = [];
    answer.forEach(arr=>answer2.push(...arr));
    return answer2;
}
