import {Triangle} from "./triangle.js";

describe("Tests to determine whether or not a shape entered is a triangle", ()=>{
  describe("Equilateral Triangle", () => {
    test("all sides should be equal", () => {
      const triangle = new Triangle(2,2,2)
      expect(triangle.isEqualateral).toEqual(true);
    });
    test("should not be equal", () => {
      const triangle = new Triangle(2,3,4)
      expect(triangle.isEqualateral).toEqual(false);
    });
    test("should not be equal", () => {
      const triangle = new Triangle(2,2,4)
      expect(triangle.isEqualateral).toEqual(false);
    });
    test("should not be equal", () => {
      const triangle = new Triangle(4,2,4)
      expect(triangle.isEqualateral).toEqual(false);
    });
    test("should not be equal", () => {
      const triangle = new Triangle(2,4,4)
      expect(triangle.isEqualateral).toEqual(false);
    });
  });
  describe("Isoceles Triangle", () => {
    test("two sides should be equal", () => {
      const triangle = new Triangle(2,2,1)
      expect(triangle.isIsoceles).toEqual(true);
    });
    test("two sides should be equal", () => {
      const triangle = new Triangle(2,1,1)
      expect(triangle.isIsoceles).toEqual(true);
    });
    test("two sides should be equal", () => {
      const triangle = new Triangle(1,2,1)
      expect(triangle.isIsoceles).toEqual(true);
    });
    test("should not be equal", () => {
      const triangle = new Triangle(1,1,1)
      expect(triangle.isIsoceles).toEqual(false);
    });
    test("should not be equal", () => {
      const triangle = new Triangle(1,2,3)
      expect(triangle.isIsoceles).toEqual(false);
    });
  });
  describe("Scalene Triangle", () => {
    test("no sides should be equal", () => {
      const triangle = new Triangle(1,2,3)
      expect(triangle.isScalene ).toEqual(true);
    });
    test("should not be equal", () => {
      const triangle = new Triangle(1,1,3)
      expect(triangle.isScalene ).toEqual(false);
    });
    test("should not be equal", () => {
      const triangle = new Triangle(3,1,3)
      expect(triangle.isScalene ).toEqual(false);
    });
    test("should not be equal", () => {
      const triangle = new Triangle(1,3,3)
      expect(triangle.isScalene ).toEqual(false);
    });
    test("should not be equal", () => {
      const triangle = new Triangle(3,3,3)
      expect(triangle.isScalene ).toEqual(false);
    });
  });
});