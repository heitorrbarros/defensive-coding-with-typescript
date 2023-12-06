import assert from 'node:assert';
/**
 * @param price
 * @param discountPercentage the discount to apply, must be between 0 and 100
 * @returns price with discount applied
 */
function applyDiscount(price: number, discountPercentage: number): number {
  if (isNaN(price) || price === null) {
    throw new Error('Invalid price');
  }

  if (isNaN(discountPercentage) || discountPercentage === null) {
    throw new Error('Invalid dicountPercentage');
  }

  return price * (1 - discountPercentage / 100);
}

function applyDiscountWithBoundaries(price: number, discountPercentage: number): number {
  if (price <= 0) {
    throw new Error('Invalid price, must be greater than 0');
  }

  if (discountPercentage <= 0 || discountPercentage > 100) {
    throw new Error('Invalid discountPercentage, must be between 0 and 100');
  }

  const priceWithDiscount = applyDiscount(price, discountPercentage);
  return priceWithDiscount;
}

applyDiscountWithBoundaries(100, 0.5);

function applyDiscountWithBoundariesAsserts(price: number, discountPercentage: number): number {
  assert(price > 0, 'Invalid price, must be greater than 0');
  assert(discountPercentage > 0 && discountPercentage <= 100, 'Invalid discountPercentage, must be between 0 and 100');

  const priceWithDiscount = applyDiscount(price, discountPercentage);
  return priceWithDiscount;
}

applyDiscountWithBoundariesAsserts(100, -1);

type Offer = {
  price: number;
  discountPercentage: number;
}

function createOffer(price: number, discountPercentage: number = 0): Offer {
  return {
    discountPercentage,
    price
  };
}

createOffer(100);
createOffer(100, 2);
