const grade = function(studentScore, totalPossibleScore) {
  const totalPercent = (studentScore / totalPossibleScore) * 100;
  let letterGrade = "";
  console.log(`${totalPercent}%`);
  if (totalPercent >= 90) {
    letterGrade = "A";
  } else if (totalPercent >= 80) {
    letterGrade = "B";
  }
  console.log(`You got ${totalPercent}% ${letterGrade}`);
};
grade(90, 100);
