class Hamburger{
    constructor(size, stuffing ){
        this.size=size;
        this.stuffing=stuffing;
        this.usedToppings=[];
        this.toppings_price=0;
        this.toppings_calories=0;
    }
    
static print(){
    console.log(this)
}
addTopping(topping){
    if(!this.usedToppings.some((el)=>el.name==topping.name)){
    this.usedToppings.push(topping)
    this.toppings_price = this.usedToppings.reduce((current, next)=>current+next.price,0);
    this.toppings_calories = this.usedToppings.reduce((current, next)=>current+next.calories,0);
}
    return `price ${this.toppings_price} calories ${this.toppings_calories}`        
}
removeTopping(topping){
    this.usedToppings=this.usedToppings.filter((el)=>el.name!==topping.name)
    this.toppings_price = this.usedToppings.reduce((current, next)=>current+next.price,0);
    this.toppings_calories = this.usedToppings.reduce((current, next)=>current+next.calories,0);
    return `price1 ${this.toppings_price} calories ${this.toppings_calories}`        
}

get getToppings(){
    return this.usedToppings
}

get getSize(){
    return `${this.size.name}`
}

get getStuffing(){
    return `${this.stuffing.name}`
}

get calculatePrice(){
    return Hamburger.SIZES[this.size].price+Hamburger.STUFFINGS[this.stuffing].price+this.toppings_price
}
get calculateCalories(){

    return Hamburger.SIZES[this.size].calories+Hamburger.STUFFINGS[this.stuffing].calories+this.toppings_calories
}
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
      price: 30,
      calories: 50,
      name:'SIZE_SMALL'
    },
    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100,
        name: 'SIZE_LARGE'
      }
  };

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
      price: 15,
      calories: 20,
      name: 'STUFFING_CHEESE'
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5,
        name:'STUFFING_SALAD'
      },
      [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15,
        name: 'STUFFING_MEAT'
      }
  };

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
      price: 10,
      calories: 0,
      name: 'TOPPING_SPICE'
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5,
        name: 'TOPPING_SAUCE'
      }
  };

// тестовая часть

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);


hamburger.addTopping(Hamburger.TOPPINGS.TOPPING_SPICE)


// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPINGS.TOPPING_SAUCE);

// А сколько теперь стоит? 
console.log("Price with sauce: ", hamburger.calculatePrice);

// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPINGS.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings.length); // 1

