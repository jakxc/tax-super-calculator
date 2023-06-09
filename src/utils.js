  
// Tax rate annually for each income bracket
const TAX_19_PERCENT = 0.19;
const TAX_32_PERCENT = 0.325;
const TAX_37_PERCENT = 0.37;
const TAX_45_PERCENT = 0.45;

// Superannuation rate annually
const SUPER_PERCENT = 0.105;

/**
 * @example
 * // returns 342
 * calculateTax(20000);
 * @param {number} income - an annual income used to calculate tax
 * */
const calculateTax = (income) => {
    let annualTax = 0;

    if (income <= 18200) {
      annualTax = 0;
    } else if (income <= 37000) {
      annualTax = ((income - 18200) * TAX_19_PERCENT).toFixed(2);
    } else if (income <= 90000) {
      annualTax = (3572 + (income - 37000) * TAX_32_PERCENT).toFixed(2);
    } else if (income <= 180000) {
      annualTax = (20797 + (income - 90000) * TAX_37_PERCENT).toFixed(2);
    } else if (income > 180000) {
      annualTax = (54097 + (income - 180000) * TAX_45_PERCENT).toFixed(2);
    }

    return Number(annualTax);
};

/**
 * @example
 * // returns 2100
 * calculateSuper(20000);
 * @param {number} income - an annual income used to calculate superannuation
 * */
const calculateSuper = (income) => {
  return Number((income * SUPER_PERCENT).toFixed(2));
}

export { calculateTax, calculateSuper };