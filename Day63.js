/*
Lv. 2 연습문제
- [1차] 뉴스 클러스터링
*/

/*
[1차] 뉴스 클러스터링
*/
function solution(str1, str2) {
    var answer = 0;
    
    let same=0;
    let sum=0;
    
    let one=[];
    let two=[];

    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();

    for(let i=0;i<str1.length-1;i++){
        if(str1[i]==' '|| !str1[i].match(/[a-zA-Z]{1}/)) {
            continue;
        }
        else if(str1[i+1]==' '|| !str1[i+1].match(/[a-zA-Z]{1}/g)) {
            i+=1;
        }
        else one.push(str1.slice(i,i+2));
    }
    
        for(let i=0;i<str2.length-1;i++){
        if(str2[i]==' '|| !str2[i].match(/[a-zA-Z]{1}/)) {
            continue;
        }
        else if(str2[i+1]==' '|| !str2[i+1].match(/[a-zA-Z]{1}/g)) {
            i+=1;
        }
        else two.push(str2.slice(i,i+2));
    }
    if(one.length==0 && two.length==0) answer=65536;
    else {
        one.forEach(item=>{
            if(two.includes(item)){
                same++;
                two.splice(two.indexOf(item),1);
            }
        });

        sum = one.length+two.length;
        answer = parseInt(same/sum*65536);
    }
    return answer;
}
