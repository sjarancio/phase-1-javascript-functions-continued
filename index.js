// Your code here
function saturdayFun(act="roller-skate"){
    return `This Saturday, I want to ${act}!`
}



const mondayWork = function(work="go to the office"){
    return `This Monday, I will ${work}.`
}


function wrapAdjective(str="*"){
    return function(defa="special"){
        return `You are ${str}${defa}${str}!`
    }
}

// wrapAdjective("%")("a dedicated programmer");