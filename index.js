// code your solution here
function superbowlWin(obj){
    const found = obj.find(({result}) => result === 'W')
    if (found){
        return found.year
    } else return undefined
}