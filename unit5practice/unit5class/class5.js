
/*
Function
    - Definition
        - Name
        - Args/parameters (work inside scope of function)
        - Internal logic (what happens)
            - Secondary behaivor may occur
        - return value (optional)
            - Pay attention to expected type
            - Return statement will end the execution of the function
    - Execution
*/

// Will return a sentence that adds 'name'
    // Returns a string (some string with name concatenated)
function sayHello( name ){

    if(typeof name === "undefined"){
        alert('Function sayHello has been called with undefined variable');
        return;
    }
    console.log('sayHello, name:', name);
    // Internal logic
    let sentence = 'Hello, ' + name;
    console.log('\t sentence:', sentence); // "\t" adds tab to console.log --- check out console.group and console.table

    // Return statement
    return sentence;
    // OR
    // return `Hello, ${name}`;
  }

  sayHello('Ren');
  sayHello('Stimpy');
  sayHello('Pinky');
  sayHello('Brain');
  sayHello(); // Should send a pop-up alert

  console.table({
    a: 1,
    b: 2,
    c: 3
  });