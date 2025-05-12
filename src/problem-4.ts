// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  {
    name: "car1",
    model: "number1",
    year: 2015,
  },
  {
    name: "car2",
    model: "number2",
    year: 2025,
  },
  {
    name: "car3",
    model: "number3",
    year: 2053,
  },
  {
    name: "car4",
    model: "number4",
    year: 1915,
  },
];

const sortCars = (
  carArray: { name: string; model: string; year: number }[]
) => {
  const result = carArray.sort((a, b) => a.year - b.year);

  return result;
};

const result4 = sortCars(cars);

console.log(result4);
