export default function (input: string[][]) {
    const rows = new Map<number, Set<string>>();
    const cols = new Map<number, Set<string>>();
    const squares = new Map<string, Set<string>>();

    for (let r = 0; r <9; r++) {
        for (let c = 0; c < 9; c++) {
            if (input[r][c] === ".") continue;

            const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
            if (
                (rows.get(r) && rows.get(r)?.has(input[r][c])) ||
                (cols.get(c) && cols.get(c)?.has(input[r][c])) ||
                (squares.get(squareKey) && squares.get(squareKey)?.has(input[r][c]))
            ) {
                return false;
            }
            
            
                        if(!rows.get(r)) rows.set(r,new Set<string>());
                        if(!cols.get(c)) cols.set(c, new Set<string>());
                        if(!squares.get(squareKey)) squares.set(squareKey, new Set<string>());

            rows.get(r)?.add(input[r][c]);
            cols.get(c)?.add(input[r][c]);
            squares.get(squareKey)?.add(input[r][c]);
        }
    }
    return true;
}
