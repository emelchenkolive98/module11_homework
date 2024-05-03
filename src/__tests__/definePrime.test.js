import { definePrime } from "../definePrime";

describe('tests for definePrime function', function () {
  const simple = 17;
  const complex = 18;

  //Успешное выполнение
  it('should operate correctly with simple and complex number', function () {
    expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
    expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
  });

  //Неуспешное выполнение
  it('should operate correctly with invalid number', function() {
    expect(definePrime(1001)).toBe('Данные неверны');
  });

  // Корнер-кейс
  it('should operate correctly with number 2', function() {
    expect(definePrime(2)).toBe('Число 2 - простое число');
  });
});

