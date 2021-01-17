const without = (exclude, arr) => {
    let arrX = []
    let e = 0
    for (i = 0; i < arr.length; i++) {
    if(push(exclude, arr[i]))
    arrX.push(arr[i])
    }
    return arrX
  }
  
  const push = (exclude, num) => {
  for(y = 0; y < exclude.length; y++){
  if(exclude[y] == num)
  return false
  }
  return true
  }
  
  console.log(without([5, 6], [1, 2, 3, 4, 5, 6])) // [1, 2, 3, 4]
  console.log(without([4, 7], [1, 2, 3, 4, 5, 6])) // [1, 2, 3, 5, 6]

  test('removes some of the elements from an array', () => {
    expect(without([5, 6], [1, 2, 3, 4, 5, 6])).toStrictEqual([1, 2, 3, 4]);
  });

  test('removes some of the elements from an array', () => {
    expect(without([4, 7], [1, 2, 3, 4, 5, 6])).toStrictEqual([1, 2, 3, 5, 6]);
  });
  