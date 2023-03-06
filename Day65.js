/*
Lv. 2 연습문제
- 스킬트리
*/

/*
스킬트리
*/
function solution(skill, skill_trees) {
    var answer = 0;
    let check = '';
    skill2 = skill.split('').map(item=> item+ '?').join('');
    check = new RegExp(`${skill2}`,'g');
    
    let step ={};
    skill.split('').forEach((item,index)=>step[item]=index);
    
    let sample = Object.values(step);
    let order = [];
    let c =0;
    skill_trees.forEach(item=>
    {
        let str = item.match(check).join('');
        for(let i of str){
            order.push(step[i]);
        }
        
        for(let j=0;j<order.length;j++){
if(order[j]!=sample[j]) {
c=-1; break;
                        }
}
        if(c==0) answer++;
        c=0;
        order= [];
    })
    
    return answer;
}
