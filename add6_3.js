/*
  Создайте функцию-конструктор Clock со свойством 
  time и методом showTime(), которой выводит
  time в консоли.
  
  Создайте функцию-конструктор Timer, наследующую
  от Clock. Функция-конструктор Timer должна 
  иметь сообственное свойство interval и метод countTime().
*/

const Clock = function(time){
    this.time=time
}
Clock.prototype.showTime = function(){
    console.log(this.time);
}
const Timer = function(time,interval){
    Clock.call(this, time)

    this.interval=interval;
}
Timer.prototype = Object.create(Clock.prototype);
Timer.prototype.constructor=Timer;
Timer.prototype.countTime = function(){
    return this.time+this.interval
}

const test = new Timer(5,10);
console.log(test.countTime());
test.showTime();