class price {
  constructor(price) {
    this.price = price;
  }

  mid() {
    return (this.price.buy + this.price.sell) / 2 / 100;
  }

  quote() {
    return this.price.pair.slice(3, 6);
  }
}
class prices {
  constructor(prices) {
    this.prices = prices.map((p) => new price(p));
  }
}
class dataSource {
  async getPrices() {
    const response = await fetch("https://static.ngnrs.io/test/prices");
    return new prices(response.data.data.prices).prices;
  }
}

const ds = new dataSource();

ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
