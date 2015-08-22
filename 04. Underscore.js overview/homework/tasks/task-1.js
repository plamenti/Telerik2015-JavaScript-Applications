
/* 
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName` and `lastName` properties
*   **Finds** all students whose `firstName` is before their `lastName` alphabetically
*   Then **sorts** them in descending order by fullname
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   Then **prints** them to the console
*   **Use underscore.js for all operations**
*/

function solve() {
  return function (students) {
    var foundStudentsByCriteria = _.filter(students, function (student) {
      return student.firstName < student.lastName;
    });

    var studentsWithFullName = _.map(foundStudentsByCriteria, function (student) {
      return student.firstName + ' ' + student.lastName;
    });

    var sortedStudents = _.sortBy(studentsWithFullName);
    sortedStudents.reverse();

    _.each(sortedStudents, function (student) {
      console.log(student);
    });
  };
}

module.exports = solve;