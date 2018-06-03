/*
  Создать класс Account с полями login, 
  email и friendsCount. 
  
  Для класса Account, создать метод getAccountInfo(), 
  который выводит в консоль значения всех полей.
  
  Создать несколько экземпляров с разными 
  значениями свойств, вывести их в консоль.
*/

class Account{
    constructor(login, email, friendsCount){
    this.login=login;
    this.email=email;
    this.friendsCount=friendsCount;
    }
    getAccountInfo(){
        console.log(`login ${this.login}, email ${this.email}, friendsCount ${this.friendsCount}`);
    }
}

const uno = new Account('uno', 'uno@ukr.net',4);
const dos = new Account('dos', 'dos@ukr.net',5);
uno.getAccountInfo();
dos.getAccountInfo();