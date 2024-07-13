// try reassigning a variable declared with const and obeseve the error...
const num = 8;
num = 9;

// error 

/*
    TypeError: Assignment to constant variable.
        at Object.<anonymous> (c:\Web Devlopment\30 days Js with chai or code\Variables And Data Types\understandingConst.js:3:5)
        at Module._compile (node:internal/modules/cjs/loader:1256:14)
        at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
        at Module.load (node:internal/modules/cjs/loader:1119:32)
        at Module._load (node:internal/modules/cjs/loader:960:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
        at node:internal/main/run_main_module:23:47

*/