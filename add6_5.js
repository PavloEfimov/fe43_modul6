/*
  Создайте класс Clock со свойством time и 
  методом showTime(), которой выводит time в консоли.
  
  
  Добавьте классу Clock статический метод convertTime(ms). 
  Он получает кол-во миллисекунд и возвращает дату с помощью Date.
  return new Date(ms)
  
  То есть будет возможность вызвать Clock.convertTime(111111) 
  и получить обратно дату.
  
  Создайте класс Timer, наследующий от Clock. 
  Класс Timer должен иметь сообственное свойство 
  interval и метод countTime().
*/
class Clock {
    constructor(time){
        this.time = time;
    }
    showTime(){
        console.log(this.time)
    }
    static convertTime(ms){
        return new Date(ms)
    }
}
class Timer extends Clock{
    constructor(time, interval){
        super(time);
        this.interval=interval;
    }
    countTime(){
        return this.time+this.interval;
    }
}
// console.log(Clock.convertTime(998888888888))
const last = new Timer(7,3);
console.log(last.countTime())