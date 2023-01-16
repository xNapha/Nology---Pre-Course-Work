import {getName} from "./index.js";


it("Should return the string 'Nathan, 25 years old'", () =>{
  const output = getName("Nathan", 25);
  expect(output).toBe("Nathan, 25 years old");
});
it("Should return the string 'Bob, 69 years old'", () =>{
  const output = getName("Bob", 69);
  expect(output).toBe("Bob, 69 years old");
});

