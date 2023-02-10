/*
Lv. 2 연습문제
- 귤 고르기
*/

/*
귤 고르기
*/
function solution(k, tangerine) {
    var answer = 0;
    //tangerine = tangerine.map(item=>String(item));
    let box = {1:0};
   
    for(let i=0;i<tangerine.length;i++){
        //if(Object.keys(box).includes(String(tangerine[i]))) box[tangerine[i]]++;
       
        if(box[tangerine[i]]==undefined) box[tangerine[i]]=1;
        else box[tangerine[i]]++;
    }
   
    let a = [];
    let o =0;
   
    for(let n in box){
        a.push(box[n]);
    }
    a.sort((a,b)=>b-a);
   
    while(answer<k){
        answer += a[o];
        o++;
    }
    return o;
}