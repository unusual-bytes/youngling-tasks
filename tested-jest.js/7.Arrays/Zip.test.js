const zip = (arr1, arr2) => {
    let zipped = []
    for(i = 0; i < arr1.length; i++)
    zipped.push(zipHelp(arr1[i], arr2[i]))
    return zipped
    }
    
    const zipHelp = (num1, num2) => {
    let zipReturn = [num1, num2]
    return zipReturn
    }
    
    console.log(zip([1, 2, 3], [4, 5, 6])) // [ [1, 4], [2, 5], [3, 6] ]

    test('zips the elements together in an array', () => {
        expect(zip([1, 2, 3], [4, 5, 6])).toStrictEqual([ [1, 4], [2, 5], [3, 6] ]);
      });