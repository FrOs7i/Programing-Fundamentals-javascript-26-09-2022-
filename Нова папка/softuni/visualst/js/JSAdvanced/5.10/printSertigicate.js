function printSertigicate(grade, studentNames) {
    printheader()
printNames(studentNames)
    formatGrade(grade)
}
function printNames(names) {
console.log(`${names[0]} ${[names[1]]}`)
}
function printheader() {
    console.log(`~~~=  {@}  =~~~`);
    console.log(`~= Certificate =~`);
    console.log(`~~~=  ~===~ =~~~`);
}
function formatGrade(grade) {
    let result = ""
    if (grade < 3.00) {
        result = "Fail"
        grade = 2
    } else if (grade >= 3.00 && grade < 3.50) {
        result = "Poor"
    } else if (grade >= 3.5 && grade < 4.50) {
        result = "Good"
    } else if (grade >= 4.5 && grade < 5.50) {
        result = "Very good"
    } else if (grade >= 5.5) {
        result = "Excellent"
    }
    console.log(`${result} (${grade.toFixed(2)})`);
}

printSertigicate(5.25, ["Peter", "Carter"])