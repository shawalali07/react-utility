// note 1
// const obj = {
//   data: {
//     label: [
//       'Project Manager',
//       'UI/UX Designer',
//       'Frontend Development(HTML/CSS)',
//     ],
//     value: [
//       '63eb3d435367ff701deffd12',
//       '63eb3d435367ff701deffd14',
//       '63eb3d435367ff701deffd0e',
//     ],
//   },
// };

// console.log(obj)

// const arr = obj.data.label.map((label, index) => ({
//   value: obj.data.value[index],
//   label: label,
// }));

// console.log(arr);

// note 2
// const arr = ['shawal', 26, 'junaid', 27];
// console.log(arr);
// const arrObj = [arr].map(([name, age]) => ({ name, age }));
// console.log(arrObj);

// note 3
// const arr = ['shawal', 26, 'junaid', 27, 'hasnat', 30];
// console.log(arr);
// const result = arr
//   .map((val, index, array) => {
//     if (index % 2 === 0) {
//       return { name: val, age: array[index + 1] };
//     }
//   })
//   .filter(Boolean);
// console.log(result);

//note 4
// const numbers = Array.from({ length: 8 }, (_, i) => i + 1);

// note 5
// const results = people.filter((person) => person.name.indexOf('shawal')); // returns array excluding matched result
