// Javascript Classes
/* class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
    this.toppings = [];
  }
  // get pizzaCrust() {
  //   return this.crust;
  // }
  // set pizzaCrust(pizzaCrust) {
  //   this.crust = pizzaCrust;
  // }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  getToppings() {
    return this.toppings;
  }
  setToppings(topping) {
    this.toppings.push(topping);
  }

  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
  }
}

const myPizza = new Pizza("pepperoni", "small");
// myPizza.pizzaCrust = "thin";
myPizza.setCrust("thin");
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
myPizza.bake();
console.log(myPizza.getCrust());
console.log(myPizza.getToppings()); */

// 2nd Example : Child Classes

/* class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "original";
  }

  getCrust() {
    return this.crust; 
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}

class SpecialtyPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "The Works";
  }

  slice() {
    console.log(
      `Our ${this.type} ${this.size} ${this.crust} pizza has 8 slices.`
    );
  }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.setCrust("thin");
mySpecialty.slice(); */

// Factory Function : Digging Deep!
/* function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
  };
}

const myPizza = pizzaFactory("small");
myPizza.bake(); */

// 3rd Example : Naming Convention
// Using underscore in naming indicates that the objects/property/fields are intended to be private.
/* class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize;
    this._crust = "original";
  }

  getCrust() {
    return this._crust;
  }
  setCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }
} */

// Update on Private and Public fields:
class Pizza {
  crust = "original"; //public Field
  #sauce = "traditional"; //private Field
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }

  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
    );
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
