/*
Lv. 2 연습문제
- 거리두기 확인하기
*/

/*
거리두기 확인하기
*/
function solution(places) {
    var answer = [];
    places = places.map(arr=>{
        return arr.map(str=>str.split(''));
    });
    function Check(P,O,sit){
        for(let i=0;i<P.length;i++){
            if(P[i][0]<4 && sit[P[i][0]+1][P[i][1]] === 'P') return 0;
            else if(P[i][1]<4 && sit[P[i][0]][P[i][1]+1] === 'P') return 0;
            else if(P[i][1]>1 && sit[P[i][0]][P[i][1]-1] === 'P') return 0;
            else if(P[i][0]>1 && sit[P[i][0]-1][P[i][1]] === 'P') return 0;
        }
        
        for(let i=0;i<O.length;i++){
            let cnt=0;
            if(O[i][0]<4 && sit[O[i][0]+1][O[i][1]] === 'P') cnt++;
            if(O[i][1]<4 && sit[O[i][0]][O[i][1]+1] === 'P') cnt++;
            if(O[i][1]>1 && sit[O[i][0]][O[i][1]-1] === 'P') cnt++;
            if(O[i][0]>1 && sit[O[i][0]-1][O[i][1]] === 'P') cnt++;
            if(cnt>1) return 0;
        }
        
        return 1;
       
    }
    
    places.forEach((Arr,ind)=>{
        let temp = [];
        let temp2 = [];
        Arr.forEach((arr,arr_index)=>{
            for(let i=0;i<arr.length;i++){
            if(arr[i]==='P') temp.push([arr_index,i]);
            if(arr[i]==='O') temp2.push([arr_index,i]);
        }
        });
        if(temp.length!=0){
            answer.push(Check(temp,temp2,Arr)); 
        }
        else answer.push(1);
    })
    return answer;
}
