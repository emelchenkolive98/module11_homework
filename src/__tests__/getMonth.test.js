import { getMonth } from "../getMonth";

describe('tests for getMonth function', function() {

  const monthNumberOne = 1;
  const monthNumberTwo = 2;
  const monthNumberFive = 5;

  const monthOne = 'январь';
  const monthTwo = 'февраль';
  const monthFive = 'май';

  //Успешное выполнение
  it('verification of the one month operation', function() {
    expect(getMonth(monthNumberOne)).toBe(monthOne);
  }),
  it('verification of the two month operation', function() {
    expect(getMonth(monthNumberTwo)).toBe(monthTwo);
  }),
  it('verification of the two month operation', function() {
    expect(getMonth(monthNumberFive)).toBe(monthFive);
  });

  //Неуспешное выполнение
  it('checking the operation for incorrect data', function() {
    expect(getMonth(14)).toBe('Неверное число месяца');
  });

  // Корнер-кейс
  it('checking the operation for incorrect data', function() {
    expect(getMonth(0)).toBe('Неверное число месяца');
  });
});