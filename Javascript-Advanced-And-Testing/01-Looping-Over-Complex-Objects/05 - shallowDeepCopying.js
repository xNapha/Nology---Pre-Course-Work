// Shallow

const simpleArr = [1, 2, 3];
const simpleObject = {key:"value"};

const shallowArrCopy = simpleArr;
const shallowObjectCopy = simpleObject;

// interacting with original complex data type
simpleArr.push(4);
simpleObject.newKey = "newValue"
// console.log(shallowArrCopy, simpleArr);
// console.log(shallowObjectCopy, simpleObject);

// Deep
// ...  = the spread operator

const deepArrCopy = [...simpleArr];
const deepObjectCopy = {...simpleObject};

simpleArr.push(5);
simpleObject.newNewKey = "newNewValue";
// console.log(deepArrCopy, simpleArr);
// console.log(deepObjectCopy, simpleObject);

// Nested Objects

const complexArr = [[1],[2],[3]];
const complexObject = {data:{key:"value"}};

const complexArrCopy = complexArr.map(arr=>[...arr]);
const complexObjectCopy = {...complexObject, data : {...complexObject.data}};

complexArr[0].push(2);
complexArr.push(4);

// console.log(complexArrCopy, complexArr);
// console.log(complexObjectCopy, complexObject);

// JSON

const JSONObject = JSON.stringify(complexObject);
const parsedJSON = JSON.parse(JSONObject);

complexObject.data.newKey = "newValue";

// console.log(JSONObject)
// console.log(parsedJSON.data)

// Lodash - proper library