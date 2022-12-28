// Challenge


// 1. Write a function to find the perimeter of a rectangle
function perimeterRectangle(length, width){
  return (2 * length) + (2 * width)
}
console.log(perimeterRectangle(2,2))

// 2. Write a function to find the area of a circle. When given a radius, print the area to the console.
function areaCircle(radius){
  return Math.PI*Math.pow(radius, 2)
}
console.log(areaCircle(2))
// 3. Now od the same to find the circumference of a circle...
function circumferenceCircle(radius){
  return 2*Math.PI*radius
}
console.log(circumferenceCircle(3))
