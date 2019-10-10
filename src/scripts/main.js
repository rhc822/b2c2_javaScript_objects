// // console.log("We're learning about objects!");




// // // Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

// // const Car = {
// //     Make: "Ford",
// //     Model: "Mustang",
// //     Year: 2015,
// //     Color: "Red"
// // };

// // // Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// // const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

// // // Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

// // const Kim = {
// //     age: 4,
// //     Disposition: "curious" 
// // };

// // const Tristan = {
// //     age: 3,
// //     Disposition: "active" 
// // };

// // const Wendy = {
// //     age: 42,
// //     Disposition: "feisty"
// // };

// // const Ryan = {
// //     age: 38,
// //     Disposition: "fun"
// // };

// // familyMembers = [Kim, Tristan, Wendy, Ryan];

// // console.log("familyMembers", familyMembers);

// // const wardrobe = {
// //     height: 80,
// //     manufacturer: "Killibrew & Sons",
// //     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
// //     depth: 38,
// //     width: 50
// // }

// // console.log(`${wardrobe.height} 
// // ${wardrobe.manufacturer} 
// // ${wardrobe.contents[0]} 
// // ${wardrobe.depth} 
// // ${wardrobe.width}`);







// // Empire State Building Lightning Exercise:

// // const empireStateBuilding = {
// //     stories: 103,
// //     height: 1453,
// //     address: "350 Fifth Avenue, Manhattan, New York 10118",
// //     squareFeet: 2768591,
// //     constructionDate: 1931,
// //     cost: 40948900,
// //     owner: "Empire State Realty Trust",
// //     eastWestLength: 424,
// //     northSouthLength: 187,
// //     architect: "Shreve, Lamb & Harmon"
// // };

// // Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

// // console.log(`Blah blah ${empireStateBuilding.height}, ${empireStateBuilding.squareFeet}, ${empireStateBuilding.eastWestLength}, ${empireStateBuilding.northSouthLength}`);

// // Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

// // const varStories = "stories";
// // const varAddress = "address";
// // const varConstructionDate = "constructionDate";
// // const varCost = "cost";
// // const varOwner = "owner";
// // const varArchitect = "architect";

// // console.log(`Here are some data facts about the Empire State building. You will like them. ${empireStateBuilding[varStories]}, ${empireStateBuilding[varAddress]}, ${empireStateBuilding[varConstructionDate]}, ${empireStateBuilding[varCost]}, ${empireStateBuilding[varOwner]}, ${empireStateBuilding[varArchitect]}`);







// // Lightning exercise

// // const nashvilleSoftwareSchool = {
// //     founded: 2012,
// //     director: "John Wark",
// //     instructors: {
// //         fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
// //         partTime: ["Zoe", "Nathan"]
// //     },
// //     address: "500 Interstate Blvd. S"
// // }

// // Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// // This was the easy way:
// // console.log(`These are the partime instructors: ${nashvilleSoftwareSchool.instructors.partTime}
// // These are the full-time instructors ${nashvilleSoftwareSchool.instructors.fullTime}`)

// // This is the hard way:
// // const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime

// // for (let i = 0; i < partTimeInstructors.length; i++) {
// //     console.log(partTimeInstructors[i])
// // }

// // const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime

// // for (let i = 0; i < fullTimeInstructors.length; i++) {
// //     console.log(fullTimeInstructors[i])
// // }

// // Lightning Exercise 2: Output only Andy and Zoe in the console.


// // console.log(`Here are ${nashvilleSoftwareSchool.instructors.fullTime[4]} and ${nashvilleSoftwareSchool.instructors.partTime[0]}`)






// // Practice: Accessing Property Values


// const beatles = {
//     albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
//     history: {
//         formed: 1960,
//         disbanded: 1970
//     },
//     members: [
//         {
//             name: "George Harrison",
//             birth: 1943,
//             death: 2001
//         },
//         {
//             name: "Paul McCartney",
//             birth: 1942,
//             death: null
//         },
//         {
//             name: "John Lennon",
//             birth: 1940,
//             death: 1980
//         },
//         {
//             name: "Ringo Starr",
//             birth: 1940,
//             death: null
//         }
//     ]
// }

// // Output the following value to the console:
// // Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.


// console.log(`${(beatles.members[1].name)} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded} He was born in ${beatles.members[1].birth} He contributed heavily to the ${beatles.albums[3]}.`)

asdl;k