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

