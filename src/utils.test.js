import { calculateTax, calculateSuper } from './utils'

/*
* Test to check whether calcuateTax method is executed properly with the values provided
*
*/
describe('check the annual tax of different income values', () => {
    test('tax for 18000 must be 0', () => {
        let tax = calculateTax(18000);
        expect(tax).toBeDefined()
        expect(tax).toEqual(0)
    })

    test('tax for 20000 must be 342', () => {
        let tax = calculateTax(20000);
        expect(tax).toBeDefined()
        expect(tax).toEqual(342)
    })

    test('tax for 50000 must be 7797', () => {
        let tax = calculateTax(50000);
        expect(tax).toBeDefined()
        expect(tax).toEqual(7797)
    })

    test('tax for 120000 must be 31897', () => {
        let tax = calculateTax(120000);
        expect(tax).toBeDefined()
        expect(tax).toEqual(31897)
    })

    test('tax for 250000 must be 85597', () => {
        let tax = calculateTax(250000);
        expect(tax).toBeDefined()
        expect(tax).toEqual(85597)
    })
})

/*
* Test to check whether calcuateSuper method is executed properly with the values provided
*
*/
describe('check the annual superannuation of different income values', () => {
    test('superannuation for 18000 must be 1890', () => {
        let superannuation = calculateSuper(18000);
        expect(superannuation).toBeDefined()
        expect(superannuation).toEqual(1890)
    })

    test('superannuation for 20000 must be 2100', () => {
        let superannuation = calculateSuper(20000);
        expect(superannuation).toBeDefined()
        expect(superannuation).toEqual(2100)
    })

    test('superannuation for 50000 must be 5250', () => {
        let superannuation = calculateSuper(50000);
        expect(superannuation).toBeDefined()
        expect(superannuation).toEqual(5250)
    })

    test('superannuation for 120000 must be 12600 ', () => {
        let superannuation = calculateSuper(120000);
        expect(superannuation).toBeDefined()
        expect(superannuation).toEqual(12600)
    })

    test('superannuation of 250000 must be 26250', () => {
        let superannuation = calculateSuper(250000);
        expect(superannuation).toBeDefined()
        expect(superannuation).toEqual(26250)
    })
})