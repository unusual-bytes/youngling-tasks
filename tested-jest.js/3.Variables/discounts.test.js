//3. Discounts

sum = 500
discount = 0.25
discountSum = sum - sum*discount

console.log(`AMD Ryzen 7 5800x \nЦена: ${sum} \nНамаление: ${discountSum} (-${discount}%)`)

test('calculates the sum after applying discount', () => {
    expect(discountSum).toBe(375);
    });
