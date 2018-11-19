// #### Episode 1 ####
//
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// The murderer is Miss Scarlet, as she was defined as murderer in the
// 'scenario' const, which was called in the 'declareMurderer' function's return,
// which itself was declared as the 'verdict' const! ## ???? ##
// 1. correct


// #### Episode 2 ####

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// nothing/error as 'verdict' is calling on 'declareMurderer' whose
// arguments were defined in a different scope ## ???? ##
// 2. correct (though not 100% sure why!!!)

// #### Episode 3 ####

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//I guess.. First Verdict: The murderer is Mrs Peacock. (as murderer
// = Mrs. Peacock was defined as a 'let', therefore rewriting 'murderer'!!??)
//I guess.. Second Verdict: The murderer is Professor Plum ... as Mrs Peacock
//can't be accessed outside the 'declareMurderer' scope!!
// 3. Correct (bafflingly!!)

// #### Episode 4 ####

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// It's 'Suspect three is Colonel Mustard' as it was defined (inside declareAllSuspects)
// with a 'let', therefore overwriting 'Mrs Peacock' when she was defined at top
// 4. Incorrect!!! - Due to a mixup of let/const!! .. Rob cemented the fact
// that let can't be accessed outside where it's defined!!

// #### Episode 5 ####

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//I guess.. 'The weapon is the Revolver' .. as it was defined after
//its original value of 'Candle Stick'!!
// 5. Correct

// #### Episode 6 ####

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//
// I guess 'The murderer is Mr Green' .. as changeMurderer was called
// just before the verdict!!
// 6. Incorrect - Is it Mrs White? - As when 'changeMurderer' was called,
// it looped back through it and found 'plotTwist' getting called inside it
// and returned that instead??

// #### Episode 7 ####

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// I guess 'The murderer is Miss Scarlet' - although plotTwist was defined
//last, 'Colonel Mustard' can't be accessed outside it's scope as it's a 'let'!
// 7. Incorrect - was I right with my reasoning? (apart from missing that
// 'murderer = 'Mr Green' ' was a 'const' variable!)

// #### Episode 8 ####
//
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// I guess 'The weapon is Candle Stick'
// 8. Correct - tough to explain how I worked that out, i'll have to talk it through
//  with an instructor!

// #### Episode 9 ####

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// I guess 'The murderer is Professor Plum' as 'Mrs Peacock' can't be accessed outside
// it's scope - Suspiciously correct!
