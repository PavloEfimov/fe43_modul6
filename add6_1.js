/*
  Создать функцию-конструктор Account 
  с полями login, email и friendsCount. 
  
  Для функции-конструктора Account, создать 
  метод getAccountInfo(), который выводит 
  в консоль значения всех полей. Записать 
  метод в prototype.
  
  Обратите внимание, метод будет всего один, 
  в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными 
  значениями свойств, вывести их в консоль.
*/

function Account(login, email,friendsCount){
    this.login=login;
    this.email=email;
    this.friendsCount=friendsCount;
}
Account.prototype.getAccountInfo = function(){
    console.log(`login ${this.login}, email ${this.email}, friendsCount ${this.friendsCount}`);
}


const first = new Account('first', 'first@ukr.net', 2);
const second = new Account('second', 'second@ukr.net', 3);
first.getAccountInfo();
second.getAccountInfo();