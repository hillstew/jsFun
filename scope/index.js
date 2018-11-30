const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        if (personB.includes('B')) {
          personB = person; //personB becomes 'CardiB'
          personC = personB; //personC becomes 'CardiB'
          // Log B: personC
        }
      }
      personC = personA; //personC becomes 'Paul'
      // Log C: personB
    }
    changePerson();
    // Log D: personC

    const result = [
      {'A': 'Ben'},
      {'B': 'CardiB'},
      {'C': 'CardiB'},
      {'D': 'Paul'},
    ];
    return result;

    // Annotation: On lines 3-5, three variables are declared and then on line 7, changePerson is declared and 
    // and the interpertor moves down to line 24 to invoke the changePerson function. Moving back up to line
    // 7, the conditional evalates to true and reassigns person to Cardi B but since we have not declared 
    // person as a variable in any scope, the interpertor creates a varible named person in the global scope. 
    // On line 10, beauitfyPerson is invoked. Log A would be Ben. Within beautifyPerson, the condtional evalutes to true
    // and both person b and c are reassigned to CardiB. Log B is Cardi B. Next, person C is reassigned to Paul. Log D
    // is Paul.
    // 
  },

  exerciseB() {
    let number = 30;
    function numberFunction() {
      let number = 75;
      if (number === 75) {
        let number = 28;
      }
      // Log A: 75
      function newNumber() {
        number = 64;
        // Log B: 64
      }
      newNumber();
      // Log C: 64
    }
    numberFunction();
    // Log D: 30 
    const result = [
      {A: 75},
      {B: 64},
      {C: 64},
      {D: 30},
    ];
    return result;

    // Annotation:
    // Declare a variable on line 46, declare a function, then on line 60 number function is invoked.
    // The interpertor moves back up to line 47, within the functional, a variable is declared. Conditional
    // runs true, and withing the local scope, a variable is declared. Log A is 75. Next, new number function is
    // declared and on line 57 it is invoked. contional evalutes to true, and number is reassigned and by way of 
    // the scope chain, reassigns the variable decalred on line 48. Log C is 64. Log D is 30 because it was
    // declared on line 46 as a global variable. 
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }
      // Log A: 'Yo'
      function newPhrase() {
        greeting = 'Hey';
        // Log B: 'Hey'
      }
      newPhrase();
      // Log C: 'Hey'
    }
    greetingFunction();
    // Log D: 'Hello'

    const result = [
      {A: 'Yo'},
      {B: 'Hey'},
      {C: 'Hey'},
      {D: 'Hello'},
    ];
    return result;

    // Annotation:
    // A variable greeting is declared on line 80 in the global scope. Next, greetingFunction is decalred. 
    // Then, the int. moves to line 96 where greetingFunction is invoked. Next, wihtin the greeting function,
    // a varible
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: 'hi'

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: 'welcome'
      };

      newGreeting();

      // Log C: 'welcome'
    };

    greetingGenerator();

    // Log D: 'howdy'

    const result = [
      {A: 'hi'},
      {B: 'welcome'},
      {C: 'welcome'},
      {D: 'howdy'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam'; //reassigned to Nathaniel 

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: 'Nathaniel' - 2nd
      }

      // Log B: 'Nathaniel' - 3rd
    }

    // Log C: 'Brittany' - 1st

    sayName();

    // Log D: 'Brittany'

    const result = [
      {C: 'Brittany'},
      {A: 'Nathaniel'},
      {B: 'Nathaniel'},
      {D: 'Brittany'}
    ];
    return result; 

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit();

    // Log D: fruit

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6; // 10

    const fn1 = function() {
      let num = 4;

      // Log A: 4 - 1

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: 9 - 4
      }

      newNum = num;

      // Log C: 9 - 5
    };

    const fn2 = function(num){
      // Log D: 9 - 2

      num = num + 1;

      // Log E: 10 - 3
    };

    fn1();

    const result = [
      {A: 4},
      {D: 9},
      {E: 10},
      {B: 9},
      {C: 10}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich 'ketchup sandwich' 1

    const addChipotle = () => {
      // Log B: toppings reference error - 3
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich'; // global
      }

      // Log C: sandwich 'not a mediocre sandwich' - 4
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping 'gouda' - 2

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure'; // global
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft'; // global
    addCheese();

    addChipotle();
    // Log E: 'not a mediocre sandwich' - 5
    // Log F: amandaBynes 'National Treasure' - 6

    const result = [
      {'A': 'ketchup sandwich'},
      {'D': 'gouda'},
      {'B': undefined},
      {'C': 'not a mediocre sandwich'},
      {'E': 'not a mediocre sandwich'},
      {'F': 'National Treasure'},
    ];    
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: 'Pandora' - 1st
      wildKids.push(kid);
      // Log B: ['Antigone', 'Pandora'] - 2nd
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: 'Mandy' - 3rd
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: 'Antigone' - 4th
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: 'Pandora';
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      {A: 'Pandora'},
      {B: ['Antigone', 'Pandora']},
      {C: 'Mandy'},
      {D: 'Antigone'},
      {E: 'Pandora'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;