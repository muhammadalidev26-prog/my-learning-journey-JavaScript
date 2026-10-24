
// There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "Paul": 300,
  "Adones": 1000
};

/**
Create the function topSalary(salaries) that returns the name of the top-paid person.

    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
*/

function topSalaries( salaries ) {
	let maxSalary = 0;
	let maxName = null;

	for (let [name, salary] of Object.entries(salaries)) {
		if (maxSalary < salary) {
			maxSalary = salary;
			maxName = name;
		}
	}
	return maxName
}

console.log( topSalaries(salaries) )