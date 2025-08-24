const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

test('convierte de dólares a yenes', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26);
});

test('convierte de euros a dólares', () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test('convierte de yenes a libras', () => {
    expect(fromYenToPound(156.5)).toBeCloseTo(0.87); 
});
