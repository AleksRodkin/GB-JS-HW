// ------------------------------------
// ""Управление персоналом компании""
// ------------------------------------

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(`Это дефолтное описание сотрудника ${this.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo() {
    console.log(
      `Это описание менеджера ${this.name} из отдела ${this.department}`
    );
  }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// ------------------------------------
// ""Управление списком заказов""
// ------------------------------------

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {

  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    const totalPrice = this.products.reduce((total, el) => total + el.price, 0);
    return `Общая стоимость за ${this.products.length} товара(-ов) равна ${totalPrice}`
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const order = new Order(12345);

const product1 = new Product("Phone", 1000);
const product2 = new Product("Headphones", 100);
const product3 = new Product("Earphones", 700);

order.addProduct(product1);
order.addProduct(product2);
order.addProduct(product3);

console.log(order.getTotalPrice()); 

// ------------------------------------
// Управление животными в зоопарке
// ------------------------------------

// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:

// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.
// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).

// Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, что вы используете приватные поля и статическое поле в соответствии с описанием.

class ZooAnimal {
  #name;
  #age;
  #gender;
  static max_age = 30;
  constructor (name, age, gender) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;

    if (age > ZooAnimal.max_age) {
      throw new Error("Превышен допустимый возраст")
    }
  }

  changeName(newName) {
    this.#name = newName;
  }

  changeAge(newAge) {
    if (newAge > ZooAnimal.max_age) {
      throw new Error("Превышен допустимый возраст")
    }
    this.#age = newAge;
  }
}

const zebra = new ZooAnimal("Zebra", 5, 'f');
zebra.changeAge(9);
console.log(zebra);
zebra.changeName("Marty");
console.log(zebra);
zebra.changeAge(31);
console.log(zebra);