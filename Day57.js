/*
Lv. 2 연습문제
- 카펫
- [1차]캐시
*/

/*
카펫
*/
function solution(brown, yellow) {
    var answer = [];
    //가로가 더 길거나 같음
    let sum = brown + yellow;
    let width = 1;
    let height = 1;
    
    while(1){
        if(width*height>sum) break;
        else if(Number.isInteger(sum/height)){
            width = sum/height;
            if(width>=height && yellow == (width-2)*(height-2)) answer = [width,height];
        }
        width = 1;
        height++;
    }
    return answer;
}

/*
[1차]캐시
*/
function solution(cacheSize, cities) {
    var answer = 5;
    let cache = [cities[0].toLowerCase()];
    let value =0;
    for(let i=1;i<cities.length;i++){
        if(cacheSize==0) {
            answer = 5*cities.length;
            break;
        }
        value = cities[i].toLowerCase();
        
        if(cache.length<cacheSize){
            if(cache.includes(value)) {
                answer ++;
                cache = cache.filter(item=> item != value);
                cache.push(value);
            }
            else {
                answer+=5;
                cache.push(value);
            }
        }
        else{
            if(cache.includes(value)) {
                answer++;
                cache = cache.filter(item=> item != value);
                cache.push(value);
            }
            else {
                answer+=5;
                cache.shift();
                cache.push(value);
            }
        }
    }
     return answer;
}