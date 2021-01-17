const consoleSpy = jest.spyOn(console, 'log');

//5. Names

firstName = "John "
secondName = "Atanasov"

console.log(firstName + secondName)

test('prints first and second name', () => {
    expect(consoleSpy).toHaveBeenCalledWith('John Atanasov');
    });

