const students = [{
  "name" : "George",
  "course" : "JavaScript"
}, {
  "name" : "Elena",
  "course" : "Python"
}, {
  "name" : "Masen",
  "course" : "JavaScript"
}, {
  "name" : "Anton",
  "course" : "Java"
}, { 
  "name" : "Kamen",
  "course" : "Java"
}]

  const pluck = (element, objectName) => {
    return Object.keys(objectName).map(x => objectName[x][element])
  }

console.log(pluck("name", students)) // => ["Elena", "Masen", "Anton", "Kamen", "George"]

