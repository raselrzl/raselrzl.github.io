class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous', "boi");
  const novel2 = new Book('any', "boiii");




novel2.writer='rasel';
console.log(novel2.writer);
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);