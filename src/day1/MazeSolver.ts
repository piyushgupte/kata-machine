function walk(
    maze: string[],
    wall: string,
    cur: Point,
    end: Point,
    visited: boolean[][],
    path: Point[],
) {
    // console.log('cur',cur,'visited',visited,'path',path);
    // base case
    // 1) on the wall
    // 2) out of bounds of the maze
    // 3) last visited node
    // 4) the exit node
    const travel = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    if (maze[cur.y][cur.x] === wall) return false;
    if (
        cur.x < 0 ||
        cur.x >= maze[0].length ||
        cur.y < 0 ||
        cur.y >= maze.length
    ){
        return false;
    }
    if (cur.x === end.x && cur.y === end.y) {
        path.push(cur);
        return true;
    }
    if(visited[cur.y][cur.x]===true){
        return false;
    }
    visited[cur.y][cur.x] = true;
    path.push(cur);
    for (let i = 0; i < travel.length; i++) {
        const [ x,y] = travel[i];
        if (
            walk(
                maze,
                wall,
                { x: cur.x +x, y: cur.y + y },
                end,
                visited,
                path,
            )
        ) {
            return true;
        }
    }
    path.pop();

    return false;
}
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const visited: boolean[][] = [];
    const path: Point[] = [];
    for (let i = 0; i <= maze.length - 1; i++) {
        visited.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, visited, path);
    // console.log('path',path);

    return path;
}
