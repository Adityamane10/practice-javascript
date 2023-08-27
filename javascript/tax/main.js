    const { calculateTax, taxRate } = require('./taxutils');

    const price = 100;
    const taxAmount = calculateTax(price);
    console.log(`Tax Amount: ${taxAmount}`);
