  
const TAX_19_PERCENT = 0.19;
const TAX_32_PERCENT = 0.325;
const TAX_37_PERCENT = 0.37;
const TAX_45_PERCENT = 0.45;

const SUPER_PERCENT = 0.105;

const calculateTax = (income) => {
    let annualTax = 0;

    if (income <= 18200) {
      annualTax = 0;
    } else if (income <= 37001) {
      annualTax = ((income - 18200) * TAX_19_PERCENT).toFixed(2);
    } else if (income <= 90001) {
      annualTax = (3572 + (income - 37000) * TAX_32_PERCENT).toFixed(2);
    } else if (income <= 180000) {
      annualTax = (20797 + (income - 90000) * TAX_37_PERCENT).toFixed(2);
    } else if (income >= 180001) {
      annualTax = (54097 + (income - 18000) * TAX_45_PERCENT).toFixed(2);
    }

    return annualTax;
};

const calculateSuper = (income) => {
  return income * SUPER_PERCENT;
}

export { calculateTax, calculateSuper };