import { generateRows, sumTotalValue } from '../Table/Helpers/tableCreation';

const listTransactions = [
  {
    Amount: "-110.71",
    Company: "SHAW CABLESYSTEMS CALGARY AB",
    Date: "2013-12-22",
    Ledger: "Phone & Internet Expense"
  },
  {
    Amount: "10.71",
    Company: "Telus",
    Date: "2013-1-3",
    Ledger: "Internet Expense"
  },
]

const emptyList = []

describe('generateRows', () => {
  test('given list of transactions', () => {
    const val = generateRows(listTransactions)
    expect(val.length).toBe(2)
  });
  
  test('doesnt create rows given empty list', () => {
    const val = generateRows(emptyList)
    expect(val.length).toBe(0)
  });
})

describe('sumTotalValue', () => {
  test('sums amounts in list of transactions', () => {
    const val = sumTotalValue(listTransactions)
    expect(val).toEqual(-100)
  })

  test('sums amounts given empty list', () => {
    const val = sumTotalValue(emptyList)
    expect(val).toEqual(0)
  })
})
