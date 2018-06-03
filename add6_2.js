/*
  Добавить в prototype конструктора Array 
  метод getLastElem, который возвращает
  последний элемент массива на котором этот 
  метод вызвали, либо undefined если массив пустой.
  
  Например:
  [1, 2, 3].getLastElem(); // 3
*/
Array.prototype.getLastElem = function(){
    return this.length? this[this.length-1]:undefined
}



console.log([1,2,3].getLastElem())
console.log([].getLastElem())

