/* Задача №1. Печатное издание */

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  // Метод для улучшения состояния
  fix() {
    this.state *= 1.5;
  }

  // Сеттер для контроля диапазона состояния
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  // Геттер для получения состояния
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

/* Задача №2. Библиотека */

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // Добавление книги, если она не слишком испорчена
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  // Поиск книги по любому свойству
  findBookBy(type, value) {
    const findedBook = this.books.find((item) => item[type] === value);
    return findedBook || null;
  }

  // Выдача книги читателю (удаление из библиотеки)
  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex((item) => item.name === bookName);
    
    if (bookIndex !== -1) {
      const book = this.books[bookIndex];
      this.books.splice(bookIndex, 1);
      return book;
    }
    
    return null;
  }
}

/* Задача №3. Журнал успеваемости (Дополнительная) */

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  // Добавление оценки по предмету
  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  // Средний балл по конкретному предмету
  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject) || this.marks[subject].length === 0) {
      return 0;
    }

    const sum = this.marks[subject].reduce((acc, curr) => acc + curr, 0);
    return sum / this.marks[subject].length;
  }

  // Общий средний балл по всем предметам
  getAverage() {
    const subjects = Object.keys(this.marks);
    
    if (subjects.length === 0) {
      return 0;
    }

    const totalAverage = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    return totalAverage / subjects.length;
  }
}
    return null;
  }
}

