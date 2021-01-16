var str = "Count the characters in this very profound sentence";

const charsHistogram = (str) => {
    const charsHistogramObject = {}
    str = str.replace(/[!?.,]/g, '').split(' ').join('').toLowerCase();

    for(i = 0; i < str.length; i++){
    if(!charsHistogramObject.hasOwnProperty(str[i])) 
    charsHistogramObject[str[i]] = 1
    else
    charsHistogramObject[str[i]]++;     
    }
    
    return charsHistogramObject
}

console.log(charsHistogram(str));

