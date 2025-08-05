// Modules
/* 
NOTES: By using module,
* you dont need to use the "defer" word in your html script tag
* "strict mode" is automatically activated.
*/

/* import playGuitar, { shredding } from "./guitar.js";
import { shredding as shred, plucking as fingerPicking } from "./guitar.js";

console.log(playGuitar());
console.log(shred());
console.log(fingerPicking()); */

// METHOD 2: Importing all.
/* import * as Guitars from "./guitar.js";

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking()); */

//Method 3:
import * as Guitars from "./guitar.js";
import User from "./user.js";
const me = new User("anymail@mail.domain", "Oladapo");

console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

/* 5.53.40 */
