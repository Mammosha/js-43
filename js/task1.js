// todo Индекс массы тела
/*
 * Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека. Для этого необходимо разделить вес в килограммах на квадрат высоты человека в метрах.

* Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

* Индекс массы тела необходимо округлить до одной цифры после запятой;
 */

const bmi = calcBMI('88,3', '1.75');

console.log(bmi); // 28.8