/* 
Create a function that:
*   **Takes** a collection of books
    *   Each book has propeties `title` and `author`
        **  `author` is an object that has properties `firstName` and `lastName`
*   **finds** the most popular author (the author with biggest number of books)
*   **prints** the author to the console
	*	if there is more than one author print them all sorted in ascending order by fullname
		*   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve() {
  return function (books) {
    var result = [],
      maxAuthorsCount = 0;

    var booksGroupedByAuthorsFullName = _.chain(books).map(function (book) {
      book.authorFullName = book.author.firstName + ' ' + book.author.lastName;
      return book;
    }).sortBy('authorFullName').groupBy('authorFullName').value();

    _.each(booksGroupedByAuthorsFullName, function (currentGroup, index, items) {
      if (maxAuthorsCount < currentGroup.length) {
        maxAuthorsCount = currentGroup.length;
      }
    });

    _.each(booksGroupedByAuthorsFullName, function (currentGroup) {
      if (currentGroup.length === maxAuthorsCount) {
        _.each(currentGroup, function (book) {
          result.push(book.authorFullName);
          result = _.unique(result);
        })
      }
    });

    _.each(result, function (author) {
      console.log(author);
    });
  }
}

module.exports = solve;