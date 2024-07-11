export {};

interface PropertyListing {
  readonly id: string;
  readonly address: string;
  readonly price: number;
}

function updatePropertyPrice(listing: PropertyListing, newPrice: number): PropertyListing {
  return { ...listing, price: newPrice };
}

const listing: PropertyListing = {
  id: '123',
  address: '123 Main St, Springfield, IL',
  price: 100000,
};

const updatedListing = updatePropertyPrice(listing, 120000);
console.log(updatedListing);
console.log(updatedListing.price); 
