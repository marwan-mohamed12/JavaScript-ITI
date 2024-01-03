# Ex1:

1. **object.keys(obj):** 
    - Returns an array of a given object's own enumerable property names.
    
    ```jsx
    const myObject = { name: 'John', age: 25, city: 'New York' };
    const keysArray = Object.keys(myObject);
    console.log(keysArray); // Output: ['name', 'age', 'city']
    ```
    
2. **Object.values(obj):**
    - Returns an array of a given object's own enumerable property values.
    
    ```jsx
    const myObject = { name: 'John', age: 25, city: 'New York' };
    const valuesArray = Object.values(myObject);
    console.log(valuesArray); // Output: ['John', 25, 'New York']
    ```
    
3. **Object.entries(obj):**
    - Returns an array of a given object's own enumerable property [key, value] pairs.
    
    ```jsx
    const myObject = { name: 'John', age: 25, city: 'New York' };
    const entriesArray = Object.entries(myObject);
    console.log(entriesArray);
    // Output: [['name', 'John'], ['age', 25], ['city', 'New York']]
    ```
    
4. **Object.assign(target, source1, source2, ...):**
    - Copies the values of all enumerable own properties from one or more source objects to a target object.
    
    ```jsx
    const targetObject = { a: 1, b: 2 };
    const sourceObject = { b: 3, c: 4 };
    Object.assign(targetObject, sourceObject);
    console.log(targetObject); // Output: { a: 1, b: 3, c: 4 }
    ```
    
5. **Object.hasOwnProperty(prop):**
    - Returns a boolean indicating whether the object has the specified property as its own property.
    
    ```jsx
    const myObject = { name: 'John', age: 25 };
    console.log(myObject.hasOwnProperty('age')); // Output: true
    console.log(myObject.hasOwnProperty('gender')); // Output: false
    ```
    
6. **Object.freeze(obj):**
    - Freezes an object, preventing new properties from being added to it and existing properties from being removed or changed.
    
    ```jsx
    const frozenObject = Object.freeze({ name: 'John', age: 25 });
    // Attempting to modify the frozen object will result in an error.
    ```
    
7. **Object.seal(obj):**
    - Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
    
    ```jsx
    const sealedObject = Object.seal({ name: 'John', age: 25 });
    // Attempting to add or remove properties or change property attributes will not work.
    ```
    
8. **Object.values(obj):**
    - Returns an array of a given object's own enumerable property values.
    
    ```jsx
    const myObject = { name: 'John', age: 25, city: 'New York' };
    const valuesArray = Object.values(myObject);
    console.log(valuesArray); // Output: ['John', 25, 'New York']
    ```
    
9. **Object.entries(obj):**
    - Returns an array of a given object's own enumerable property [key, value] pairs.
    
    ```jsx
    const myObject = { name: 'John', age: 25, city: 'New York' };
    const entriesArray = Object.entries(myObject);
    console.log(entriesArray);
    // Output: [['name', 'John'], ['age', 25], ['city', 'New York']]
    ```
    
10. **Object.getOwnPropertyNames(obj):**
    - Returns an array of all properties (enumerable or not) found directly upon a given object.
    
    ```jsx
    const myObject = { name: 'John', age: 25 };
    const propertyNamesArray = Object.getOwnPropertyNames(myObject);
    console.log(propertyNamesArray); // Output: ['name', 'age']
    ```
