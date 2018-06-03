const SIZES = {
    'SIZE_SMALL': {
      price: 30,
      calories: 50,
      name: 'SIZE_SMALL'
    },
    'SIZE_LARGE': {
        price: 50,
        calories: 100,
        name: 'SIZE_LARGE'
      }
  };

const STUFFINGS = {
    'STUFFING_CHEESE': {
      price: 15,
      calories: 20,
      name: 'STUFFING_CHEESE'
    },
    'STUFFING_SALAD': {
        price: 20,
        calories: 5,
        name: 'STUFFING_SALAD'
      },
      'STUFFING_MEAT': {
        price: 35,
        calories: 15,
        name: 'STUFFING_MEAT'
      }
  };

  const TOPPINGS = {
    'TOPPING_SPICE': {
      price: 10,
      calories: 0,
      name: 'TOPPING_SPICE'
    },
    'TOPPING_SAUCE': {
        price: 15,
        calories: 5,
        name: 'TOPPING_SAUCE'
      }
  };


class Hamburger{
    constructor(size, stuffing ){
        this.size=size;
        this.stuffing=stuffing;
        this.usedToppings=[];
        this.toppings_price=0;
        this.toppings_calories=0;
    }
    
    get SIZE_SMALL(){
        return SIZES.SIZE_SMALL
    }

    get SIZE_LARGE(){
        return SIZES.SIZE_LARGE
    }

    get STUFFING_CHEESE(){
        return STUFFINGS.STUFFING_CHEESE
    }
    get STUFFING_SALAD(){
        return STUFFINGS.STUFFING_SALAD
    }
    get STUFFING_MEAT(){
        return STUFFINGS.STUFFING_MEAT
    }
    get TOPPING_SPICE(){
        return TOPPINGS.TOPPING_SPICE
    }
    get TOPPING_SAUCE(){
        return this.TOPPING_SAUCE
    }

    
static print(){
    console.log(this)
}
addTopping(topping){
    if(!this.usedToppings.some((el)=>el.price==topping.price))
    this.usedToppings.push(topping)
    this.toppings_price = this.usedToppings.reduce((current, next)=>current+next.price,0);
    this.toppings_calories = this.usedToppings.reduce((current, next)=>current+next.calories,0);
    return `price ${this.toppings_price} calories ${this.toppings_calories}`        
}
removeTopping(topping){
    this.usedToppings=this.usedToppings.filter((el)=>el.name!==topping.name)
    this.toppings_price = this.usedToppings.reduce((current, next)=>current+next.price,0);
    this.toppings_calories = this.usedToppings.reduce((current, next)=>current+next.calories,0);
    return `price1 ${this.toppings_price} calories ${this.toppings_calories}`        
}

getToppings(){
    this.usedToppings.forEach(element =>console.log(element.name) );
    return this.usedToppings
}

getSize(){
    return `размер гамбургера - ${this.size.name}`
}

getStuffing(){
    return `начинка гамбургера - ${this.stuffing.name}`
}

calculatePrice(){
    return this.size.price+this.stuffing.price+this.toppings_price
}
calculateCalories(){
    return this.size.calories+this.stuffing.calories+this.toppings_calories
}
}

// тестовая часть

hamburger = new Hamburger(SIZES.SIZE_SMALL, STUFFINGS.STUFFING_CHEESE);
hamburger.addTopping(TOPPINGS.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(TOPPINGS.TOPPING_SAUCE);

// А сколько теперь стоит? 
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: ", hamburger.getSize() === SIZES.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(TOPPINGS.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1