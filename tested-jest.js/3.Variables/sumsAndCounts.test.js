//2. Sums and counts

let count = 1;
let sum = 3;
sum = count + sum;
count = sum + count;
console.log(`sum: ${sum} count: ${count}`)

test('the sum', () => {
    expect(sum).toBe(4);
    });

test('the count', () => {
    expect(count).toBe(5);
    });
