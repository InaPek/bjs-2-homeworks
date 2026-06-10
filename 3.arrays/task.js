//Задача на сравнение массивов
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  return arr1.every((element, index) => element === arr2[index]);
}
console.log(compareArrays([1, 2, 3], [1, 2, 3]));
console.log(compareArrays([1, 2], [1, 2, 3]));
console.log(compareArrays([1, 2, 3], [3, 2, 1]));
console.log(compareArrays([0, 1, 2], [0, 1]));
console.log(compareArrays([0, 1], [0, 1, 2]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));

/*Решение эксперта
function compareArrays(arr1, arr2) {
  return arr1.every((el, idx) => arr1.length === arr2.length && el === arr2[idx]);  
}*/


//Задача №2, фильтр по гендеру, расчет среднего возраста
function getUsersNamesInAgeRange(users, gender) {
  let filteredUsers = users.filter(users => users.gender === gender)
  if (filteredUsers.length === 0) {
    return 0
  }
  let result = (filteredUsers.map(users => users.age).reduce((sum, age) => (sum + age), 0)) / filteredUsers.length
  return result
}

const people = [
  { firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
  { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
  { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
  { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
  { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
  { firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский" },
  { firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской" },
  { firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской" },
  { firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской" },
  { firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский" },
  { firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
  { firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской" },
  { firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
  { firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской" },
]
console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0

/*Решение эксперта
function getUsersNamesInAgeRange(users, gender) {
  return users.
    filter(user => user.gender === gender).
    map(user => user.age).
    reduce((average, userAge, index, array) => average + userAge / array.length, 0);
}*/
