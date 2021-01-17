var str = "A function is a function with a very functional function!"

const wordsHistogram = (str) => {
    const wordsHistogramObject = {}
    str = str.replace(/[!?.,]/g, '').toLowerCase().split(' '); //g - global search (find all matches rather than stopping after the first match)

    for(i = 0; i < str.length; i++){
    if(!wordsHistogramObject.hasOwnProperty(str[i])) 
        wordsHistogramObject[str[i]] = 1
    else
        wordsHistogramObject[str[i]]++;     
    }

    return wordsHistogramObject
}

console.log(wordsHistogram(str)) // => {"a" : 3, "function" : 3, "is" : 1, "with" : 1, "very" : 1, "functional" : 1}

test('Words Histogram', () => {
    expect(wordsHistogram(str)).toStrictEqual({ a: 3, function: 3, is: 1, with: 1, very: 1, functional: 1 });
  });