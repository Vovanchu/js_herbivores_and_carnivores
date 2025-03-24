'use strict';

class Animal {
  // Статичний масив для всіх живих тварин
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    // Додаємо тварину в масив alive, коли вона створена
    Animal.alive.push(this);
  }

  die() {
    // Видаляємо тварину з масиву, коли її здоров'я 0 або менше
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }

  // Перевірка на смерть або прихованість перед атакою
  isAlive() {
    return this.health > 0;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (
      herbivore instanceof Herbivore &&
      herbivore.isAlive() &&
      !herbivore.hidden
    ) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        herbivore.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
