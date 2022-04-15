class dataSource {
  async getPrices() {
    const response = await fetch("https://static.ngnrs.io/test/prices");
    return response.data.prices;
  }
}

const ds = new dataSource();

ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${
          (price.buy + price.sell) / 2 / 100
        } ${price.pair.slice(3, 6)}.`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
