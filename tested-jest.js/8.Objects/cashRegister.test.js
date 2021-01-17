const reducer = (accumulator, currentValue) => accumulator + currentValue;

var cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
  
  const cashRegister = (itemsObject) => {
    return Object.values(itemsObject).map(x => Number(x)).reduce(reducer, 0)
  }

  console.log(cashRegister(cartForParty)) // => 60.55

  test('checks if an array contains the given number', () => {
    expect(cashRegister(cartForParty)).toStrictEqual(60.55);
  });


  /*const cashRegister = (itemsObject) => {
    let value = 0;

     for(i = 0; i < Object.values(itemsObject).length; i++)
       value += Number(Object.values(itemsObject)[i]);
    
     return value;
} */ 