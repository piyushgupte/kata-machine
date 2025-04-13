export default function recurssiveSum (input:number):number{
    // base case when input == 1 return 1
    // else return input + recurssiveSum(input-1);
    if(input<=0)
        return input;
    return input + recurssiveSum(input-1);
}