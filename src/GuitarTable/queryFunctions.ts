export async function getGuitars() {
  //sleep for 1 second then return data
  await new Promise((resolve) => setTimeout(resolve, 200));
  const data = [
    {
      brand: "Fender",
      model: "Stratocaster",
      price: "$800",
      year: "1972",
      color: "White",
      type: "Electric",
      country: "Mexico",
    },
    {
      brand: "Gibson",
      model: "Les Paul",
      price: "$1,500",
      year: "1958",
      color: "Red",
      type: "Electric",
      country: "USA",
    },
    {
      brand: "Ibanez",
      model: "Z1",
      price: "$3,200",
      year: "2012",
      color: "Black",
      type: "Electric",
      country: "Japan",
    },
    {
      type: "Acoustic",
      brand: "Gibson",
      model: "Songbird",
      price: "$10,000",
      year: "1943",
      color: "Sunburst",
      country: "USA",
    },
  ];
  return data;
}
