let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZ-pEPZMf7toYDs5uFteq4qBIu42XakZ8Gg&s",
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6Wgqm5t3Qea1ob4UCsuXuWFCKufRtkdYBQ&s",
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXffyNIfvFdhIDRYIgluDvuVupv2FvemqjQA&s",
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLLUeF0gqY_gxuH2L1Fs7QjBw4J5rnezzZg&s",
  },
  {
    model: "Rolls-Royce La Rose Noire Droptail",
    type: "",
    price: "$30 million",
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEWW3EQiXdB0keiHpi8WMPP_aNuSSMdBKUA&s",
  },
];
function createCard(cardData) {
  const result = cardData.map((car) => {
    const mainDiv = document.createElement("div");
    const miniDiv = document.createElement("div");
    const imgTag = document.createElement("img");
    const pTag = document.createElement("p");
    const pDiscr = document.createElement("p");
    const pDiscr2 = document.createElement("p");
    const body = document.getElementsByTagName("body")[0];
    body.className = "body";
    mainDiv.className = "mainDiv";
    miniDiv.className = "MiniDiv";
    pDiscr.className = "discription";
    pTag.className = "price";

    imgTag.className = "img";
    pDiscr2.className = "discription2";
    imgTag.src = car.image;

    pTag.innerText = car.price;
    pDiscr.innerText =
      car.model +
      " " +
      car.year +
      " " +
      car.brand +
      " " +
      car.fuelEfficiency +
      " " +
      car.color +
      " ";
    pDiscr2.innerText = "mileage:" + car.mileage + " ";

    mainDiv.appendChild(imgTag);
    miniDiv.appendChild(pTag);
    miniDiv.appendChild(pDiscr);
    miniDiv.appendChild(pDiscr2);
    mainDiv.appendChild(miniDiv);
    body.appendChild(mainDiv);
  });
  return result;
}
let card = createCard(cars);
