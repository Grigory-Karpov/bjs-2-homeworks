/* Задача №3. Журнал успеваемости */

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  // Метод для добавления оценки по предмету
  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (this.marks[subject] === undefined) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  // Метод для получения среднего балла по предмету
  getAverageBySubject(subject) {
    if (this.marks[subject] === undefined || this.marks[subject].length === 0) {
      return 0;
    }

    const sum = this.marks[subject].reduce(function (acc, mark) {
      return acc + mark;
    }, 0);

    return sum / this.marks[subject].length;
  }

  // Метод для получения общего среднего балла по всем предметам
  getAverage() {
    const subjects = Object.keys(this.marks);

    if (subjects.length === 0) {
      return 0;
    }

    // Используем стрелочную функцию для сохранения контекста this
    const totalAverage = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    return totalAverage / subjects.length;
  }
}
