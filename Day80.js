/*
Lv. 2 연습문제
- 게임 맵 최단거리
*/

/*
게임 맵 최단거리
*/

function solution(maps) {
    var answer = -1;
    
    const n = maps.length;
    const m = maps[0].length;
    
    let visited = new Array(n).fill(0).map(arr => new Array(m).fill(false));
    
    //오른쪽 아래 왼쪽 위
    let dx = [0,1,0,-1,];
    let dy = [1,0,-1,0];
    
    let queue = [[0,0,1]];
    
    let ind = 0;

    function Visit(x,y,count){
        
        visited[x][y] = true; //방문 체크

        for(let i=0; i<4; i++){ //사방으로 이동
            const nx = x+dx[i];
            const ny = y+dy[i];
            
            if(nx >= 0 && nx < n && ny >= 0 && ny < m &&
               !visited[nx][ny] && maps[nx][ny] == 1){
                queue.push([nx, ny, count+1]);
            }
        }
    }
    
    while(queue.length > ind){
        const user = queue[ind];
        ind++;
        
        if(user[0] == n-1 && user[1] == m-1) //도착지
        {   
            answer = user[2];
            break;
        }
        
        if(!visited[user[0]][user[1]]) { //방문 안했다면
            Visit(user[0],user[1],user[2]);
        }
    }

    return answer;
}
