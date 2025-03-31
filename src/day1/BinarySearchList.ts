export default function bs_list(haystack: number[], needle: number): boolean {
    let hi = haystack.length - 1;
    let lo = 0;
    while(lo<=hi ){
        const m = Math.floor((hi+lo)/2);
        const v = haystack[m];
        if(v===needle){
            return true;
        }else if(v>needle){
            hi = m -1;
        }else {
            lo = m+1;
        }
    }
    return false;
}
