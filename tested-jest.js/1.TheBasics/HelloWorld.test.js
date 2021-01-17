const consoleSpy = jest.spyOn(console, 'log');

console.log('hello world')

test('prints hello world', () => {
expect(consoleSpy).toHaveBeenCalledWith('hello world');
});

