/* 
Create a function that:
*   Takes an array of students
    *   Each student has:
        *   `firstName`, `lastName` and `age` properties
        *   Array of marks 
            *   Each mark has properties `subject` and `value`        
*   **finds** the student with highest average mark (there will be only one)
*   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve() {
  return function (students) {
    var studentWithHighestAverageMark = _.max(students, function (student) {

      var averageMark = CalculateAverageMark(student.marks);

      return averageMark;
    })

    function CalculateAverageMark(marks) {
      var sum = _.reduce(marks, function (memo, num) {
        return memo + num;
      }, 0);

      var averageResult = sum / marks.length;

      return averageResult;
    }

    var highestMark = CalculateAverageMark(studentWithHighestAverageMark.marks);

    console.log(studentWithHighestAverageMark.firstName + ' ' + studentWithHighestAverageMark.lastName + ' has an average score of ' + highestMark);
  };
}

module.exports = solve;
