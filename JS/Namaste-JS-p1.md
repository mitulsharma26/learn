# How JS works ? 
- Everything in JS happens inside a EXECUTION CONTEXT 
- this EC is furthur divided into 2 parts -
  1. Variable Environment( Memory component ) : stores all the varaibles and functions as key value pairs 
  2. Thread of execution( Code component ) : whole code is executed , one line at a time
- JS is a synchronus ( single threaded ) language i.e JS executes one command at a time in a specific order
  and only goes to next line , if the current line is executed .
# How JS code is executed ?
when is code is run , a global execution context is created in two phases: 
1. MEMORY CREATION PHASE :
   - JS allocate memory to all var. and fns. int he variable environment, line by line
   - for all variables , temorarily alloctes undefined value ( a placeholder keyword )
   - in case of functions , stores the whole code as value
2. CODE EXECTION PHASE :
   - Executes whole code , line by line
   - Replace the undefined valuee with the actual value of variables
   - when a function invokation() is encountered , this will creates a whole new execution context of that funnction , has its own memory creation and code execution phase
   - when a return statement is encountered inside the function , its execution gets terminated and the control is returned back to the GEC
- Call stack
   - at its bottom , we always have GEC
   - all EC are push & pop inside this stack
   - when the code exection is completed (globally) , the sttck becomes empty
# Hoisting in JS 
- accessing variables and functions in the code , before initialising their values ( in suceeding lines )
- as JS first allocates the memory , before executing the code
- if we print a var. before its initialized line , we get undefined value
- but in case of a fn. , it returns the proper output of the fn. as js already stores the copy of the code in the memory , before its execution .
- does not work in the case of : 1. functional expressions , 2. arrow functions . as they are treated as variables and assigned undefined values .

# How functions work in JS 
- functions assigns values to variables , according to their own execution context ( not acc. to global variable even if the name is same )
- whenever a EC is created for a function , it is pushed above GEC in the call stack

# Window Object 
is a global object , created by JS engine along GEC . a **This** variable is also created 
- Even if the file is empty this object is created
- this var. is created for both functional (local) and global EC
- a GEC is created , even if the file is empty

# Undefined VS Not defined 
- when JS allocates memory to variables , it tries to put a place holder( i.e which is placed in the memory ) and undefined is the special keyword , which is placed in the memory
- where as **Not defiend** is a error , occurs when the memory is not allocated to the variable ( i.e not initialised in the wholee code ) and the code is trying to execute it
### JS is a loosely type language 
it does not attaches its variables to any specific data type 

# The scope chain 
- scope - refers to the place , where we can access a specific var. or fn. in a code
- lexical (hierarchy) environment - whenever a EC is created a lexical env. is also created
   - LE is the local memory along with the refernce to LE of its parent
   - whenever a local EC is created , reference to its parents lexical env. is also stored in the variable environment
   - GEC's lexical env. refernce points to NULL

### when a var. is accessed inside a local function but that var. is not declared inside the function , then the JS searches for this var. in its lexical parent . this mechanism of finding the var. is known as scope chain 

# let and const variable declarations arre also hoisted ! ( differently from var variables ) 
- when the let/const variables are declared , they are stored as undefined value in a different space (known as script) apart from the global object
- but if we try to acccess these variables , before their initailisation then it gives a refernce error ( i.e trying to access a variable inside temporal dead zone )
- **Temporal dead zone** - is the tiime period since then the let/const was hoisted ( in script ) and till then they got initialised with some value
- let/const variables dont get attached to the window(global) object (shows undefined) 

# var VS let VS const 
- var variable , can be initialsed and updated many times
- let variable , can be initalised only once and updated many times
- const variable , can be initalised only once and cannot be updated furthur ( cannot be declared and initialsed seperately , if done shows syntax error )

# Syntax VS Type VS Reference error 
1. Syntax error - Occurs when the code violates JavaScript syntax rules — meaning JS doesn't understand what you've written and can't even begin to run it.
2. Type error - Occurs when you use a value in an incorrect way, such as calling a non-function or accessing a property that doesn't exist on a certain type.
3. Refernce error - Occurs when you try to use a variable or function that hasn’t been declared (not in scope or not defined at all).

### Some good practices 
- use let/const variables in most of the code & avoid using var variables ( to avoid undefined values )
- put all initailzations at the top ( this will shrink the temporal dead zone window to 0 )

# Block scope 
- **BLock** - a block is defined by {} , also known as compound statement
- we group multiple statements inn a block , so that we can use it where JS expects only 1 statement
- let/const variables present in the {} , are hoisted in the Block-scope
- but var variables present in {} , are hoisted inside the global-scope and can be accessed from both outside aand inside the block{}

# Shadowing 
- when we initalise a var variable , outside the block {} and re-initialise it inside the block{} then it updates the value permanently , even if we re-acceess it outside the block{} it still the value from inside . because they both (outside & inside) pointing to same memory location in global-scope 
- let/const variables just modifies the value inside the block{} ( block-scope ) , whereas the outside variable is stored in the seperate script-space .
- shadowing works the same in function block i.e function(){}
## Illegal shadowing 
when we try to shadow a same-name variable with different variable type inside the block {}
- if a variable (inside) shadowing a variable(outside) then it should not cross its scope ( i.e var variables can be shadowed by let/const variables
- do not applies in function scope function(){} i.e let/const can be shadowed by var 

### Every block {} has its own lexical scope & follows the scope chain pattern i.e if variable is accessed , then its value depends upon its nearest lexical scope . Scopes are same for both normal & arrow functions 
# closures 
- a closure refers to a function , bundeled together with its lexical environment
- functions remembers their lexical scope . Even when they are executed in other scope , they stil have the reference to their lexical environment .
- Uses of closures :
  - module design pattern
  - currying
  - function like once
  - memoize
  - maintaining state in async
  - settimeouts
  - iterators
- Disadvantages of closures - accumulates a lot of memory . if the closed over variables are not garbage collected then it can cause memory leaks

### Settimeout()
- takes the call back function (as its argument) & stores it inside the web API environment and when its timer expires , it calls the function
- JS does not wait for the timer , it furthur exexcutes the code
### Anonymous function 
- A function without a name ( i.e function(){} ) 
- these functions cannot be declared independently , they need to be put as a value inside a variable ( expression )

### function staement - function block with a name 

### function expression - when we assign a function a varaiable i.e fn. acts like a vlaue ( function expression does not support hoisting ) 

### function declaration - also known as function statement , both are same 
### Named function expression - when we giuve a name to a function and aassign it a value , but this function cannot be called seperately ( as it is not created in outer scope , it is created as a local variable ) 

# parameters VS arguments 
1. arguments - are the values ,which we pass inside a function during its ivokatoin
2. parameters - identifiers/labels which gets those values

## First class functions 
ability of the functions to be used as values and can be passed as arguments to another functions and can be returned from functions ( that's why functions are known as 1st class citizens) 

## Call-back functions 
if you call a function ( already declared ) and pass a function in it as an argument
, then the fn. passed as argument is the call-back function 
- giving responsibilty of a function (argument) to another function (declared)
- asnynchronus nature of setimeout function is not possible without these call-backs

## browser allows JS to use its functionalities (comes under web API env.) by a global object known as window : 
- settimeout()
- DOM API's
- fetch()
- Local storage
- Console
- Location & many other

# Event Loop 
- when a call-back function is passed in **settimeout()** , it gets registered as a call-back in the web-api environment and starts the timer
- JS moves to the next line , does not wait for the timer completion
- when the timer expires , the registered call-back cannot pushed directly into the call-stack . it firstly pushed in the call-back queue
- all call-back fn.'s are stored inside this call-back before getting pushed to the call-stack
- here comes **Event loop** which checks whether the call-stack is empty ( i.e GEC is poped out)  or not , if yes then it pushes the call-back from the cb queue to the call-stack for its execution
- Similar process follows during a **addEventlistner()** is executed , registers the call-back when the argumented Event occurs and stores it inside the cb queue and then furthur send by the Event loop to call-stack ( when it is empty) for execution

## fetch() function (goes to server & requests a API call ) 
- registers its function in the web API env.
- when the request is fetched from the server and ready for execution
- it does not get stored in the cb queue , but stored in a seperate **Micro-task queue**
- this MT queue has higher priority than the cb queue i.e its call-backs are pushed first into the call-stack before any other call-back from CB queue ( only after the GEC is poped out from it ) 
### What comes inside the MT queue 
1. All call-back Fn.s which comes through promises , are stored here
2. **Mutation Observer** - it keep son checking , whether there's any mutation in the DOM tree or not
### Starvation of CB queue 
is a condition in which the MT queue is creating its own small tasks and this delays the execution of call-backs inside the CB queue 

# How browser interacts with JS 
- almost every browser has its own JS run-time environmeent which has various components such as :
     - JS engine ( V8 in Google ) 
     - API 
     - CB queue
     - MT queue
     - Event loop
## JS engine process
CODE -> PARSING -> COMPILATION -> EXECUTION 
1. Parsing - the code is broken down into Tokens , which together parsed into a Abtract Syntax Tree (AST) by a syntax parser
2. Compilation - JS engine can perform both interpretation and compilation , known as just in time (JIT) compilation
     - AST transfers its data to the interpretor ans the interpretor coverts the high level code into byte code ( line by line ) for execution
     - in between interpretor takes help from the compiler to convert code into its optimized form ( done in many phases )
      - V8 of google has : ignition(interpretor) and turbofan(optimizing compiler)

# Trust issues with the setimeout() 
- Because the set timeout fn. can take more time than its timer
- in case GEC executionn takes more time than the timer , in mean-time the call-back fun. will wait for its execution inside the CB queue
- Event loop will only push this call-back inside the call-stack , when the GEC is poped out from it
- that's why it is recommended that we should not write a code which blocks our main thread
- this happeens even if the timer = 0 , this case can be used to delay some fuctions intentionally

# Higher order function 
A functionn which takes another function (call-back) as argument or returns a function from itself 
- Examples :
1.map() - used for the transformation of whole arrays
  <br>
2.filetr() - used to filter out values inside an array
    <br>
3.reduce() - used when by working on all values of the array , we have to come up with a single value
   - call-back functions inside reduce() , takes 2 arguments :
       1. accumulator (1st) - accumulates value based on a given condition
       2. current (2nd) - current value in the array
   - 2nd argument of the reduce() is the initial value for the accumulator
 -  All these functions can be chained to increase their functionality 
     
