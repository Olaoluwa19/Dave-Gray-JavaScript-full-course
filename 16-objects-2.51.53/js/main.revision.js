const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrrooom!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
