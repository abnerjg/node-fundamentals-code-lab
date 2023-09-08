import chalk from "chalk";

export const add = (_numero1, _numero2) => _numero1 + _numero2;

export const showResult = (_numero1, _numero2) => {
    
    const result = add (_numero1, _numero2);

    if (result>=5){
        return chalk.green(result);
    } else {
        return chalk.red(result);
    } 
}