export const nothing = () => {};
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

{
  /* <div style={{ paddingLeft: '20px' }}>
      {inputs?.map((input, index) => (
        <div
          key={input.id}
          style={{ display: 'flex', gap: '20px', padding: '20px' }}
        >
          <select name='name' onChange={(e) => onChange(e, index)}>
            {people?.map((p) => (
              <option
                value={
                  input.name && input.name === p.name ? input.name : p.name
                }
              >
                {input.name && input.name === p.name ? input.name : p.name}
              </option>
            ))}
          </select>
          <select name='hours' onChange={(e) => onChange(e, index)}>
            {numbers?.map((num, index) => (
              <option
                value={input.hours && input.hours === num ? input.hours : num}
              >
                {input.hours && input.hours === num ? input.hours : num}
              </option>
            ))}
          </select>
          <button onClick={() => removeInput(index)}>Remove Resource</button>
        </div>
      ))}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={addInput}>Add Resource</button>
      </div>
    </div> */
}
