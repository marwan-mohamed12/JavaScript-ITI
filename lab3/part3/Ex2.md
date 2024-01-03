# Ex2:

1. **push(element1, element2, ...):**
    - Adds one or more elements to the end of an array and returns the new length of the array.
    
    ```jsx
    const myArray = [1, 2, 3];
    const newLength = myArray.push(4, 5);
    console.log(myArray); // Output: [1, 2, 3, 4, 5]
    console.log(newLength); // Output: 5
    ```
    
2. **pop():**
    - Removes the last element from an array and returns that element.
    
    ```jsx
    const myArray = [1, 2, 3, 4, 5];
    const removedElement = myArray.pop();
    console.log(myArray); // Output: [1, 2, 3, 4]
    console.log(removedElement); // Output: 5
    ```
    
3. **shift():**
    - Removes the first element from an array and returns that element, shifting the remaining elements to a lower index.
    
    ```jsx
    const myArray = [1, 2, 3, 4, 5];
    const removedElement = myArray.shift();
    console.log(myArray); // Output: [2, 3, 4, 5]
    console.log(removedElement); // Output: 1
    ```
    
4. **unshift(element1, element2, ...):**
    - Adds one or more elements to the beginning of an array and returns the new length of the array.
    
    ```jsx
    const myArray = [2, 3, 4, 5];
    const newLength = myArray.unshift(0, 1);
    console.log(myArray); // Output: [0, 1, 2, 3, 4, 5]
    console.log(newLength); // Output: 6
    ```
    
5. **splice(startIndex, deleteCount, item1, item2, ...):**
    - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    
    ```jsx
    const myArray = [1, 2, 3, 4, 5];
    myArray.splice(2, 1, 'a', 'b');
    console.log(myArray); // Output: [1, 2, 'a', 'b', 4, 5]
    ```
    
6. **slice(startIndex, endIndex):**
    - Returns a shallow copy of a portion of an array into a new array without modifying the original array.
    
    ```jsx
    const myArray = [1, 2, 3, 4, 5];
    const newArray = myArray.slice(2, 4);
    console.log(newArray); // Output: [3, 4]
    ```
    
7. **concat(array2, array3, ...):**
    - Returns a new array by combining multiple arrays or values.
    
    ```jsx
    const array1 = [1, 2];
    const array2 = [3, 4];
    const newArray = array1.concat(array2, 5, 6);
    console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
    ```
    
8. **indexOf(element, startIndex):**
    - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
    
    ```jsx
    const myArray = [1, 2, 3, 4, 3, 5];
    const index = myArray.indexOf(3);
    console.log(index); // Output: 2
    ```
    
9. **lastIndexOf(element, startIndex):**
    - Returns the last index at which a given element can be found in the array, or -1 if it is not present.
    
    ```jsx
    const myArray = [1, 2, 3, 4, 3, 5];
    const lastIndex = myArray.lastIndexOf(3);
    console.log(lastIndex); // Output: 4
    ```
    
10. **forEach(callback(currentValue, index, array)):**
    - Executes a provided function once for each array element.
    
    ```jsx
    const myArray = [1, 2, 3, 4, 5];
    myArray.forEach((element, index) => {
      console.log(`Index ${index}: ${element}`);
    });
    // Output:
    // Index 0: 1
    // Index 1: 2
    // Index 2: 3
    // Index 3: 4
    // Index 4: 5
    ```
