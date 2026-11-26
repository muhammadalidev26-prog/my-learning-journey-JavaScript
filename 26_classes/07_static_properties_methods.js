
// we can assign properties to class as whole, these are called static
// they are prepended by static keyword

class User {
  static staticMethod() {
    console.log(this === User);
  }
}

// Static methods are functions defined on class itself rather on instances (objects) of the class
User.staticMethod(); // true

// calling on instance
let user01 = new User();
// user01.staticMethod(); // error

class Article {

  // static properties
  static publisher = "Adones";

  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

console.log( Article.publisher ) // Adones, static property

// usage
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

// Here Article.compare method stands “above” articles, as a means to compare them. It’s not a method of an article, but rather of the whole class.
articles.sort(Article.compare);

/**
Sort behaviour
negative number: A comes before B
positive number: B comes before A
Zero: order is treated as equal

[20, 11, 32].sort( () => a -b )
  20 - 11 = 9 , 11 comes before 20
  11 - 32 = -21, 32 comes after 11
result [11, 20, 32]
 */

console.log( articles ); // CSS

// Static properties and methods are also inherited