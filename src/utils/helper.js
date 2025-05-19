var nameList = [
    "Chandan",
    "Roshan",
    "Suraj",
    "Sanjay",
 "Arjun",
  "Rohan",
  "Virat",
  "Amit",
  "Raj",
  "Aryan",
  "Krishna",
  "Shiva",
  "Ravi",
  "Yash",
  "Kabir",
  "Devraj",
  "Lakshya",
  "Om",
  "Kunal",
  "Tanish",
  "Siddharth",
  "Aditya",
  "Karan",
  "Bhavesh",
  "Moksh",
  "Veer",
  "Ankit",
  "Manav",
  "Atharv",
  "Chandan",
  "Vikram",
  "Jai",
  "Harsh",
   "Liam",
  "Chris",
  "Mark",
  "Ryan",
  "Daniel",
  "Oliver",
  "Jack",
  "Sam",
  "Jason",
  "Hunter",
  "Zane",
  "Blake",
  "Cole",
  "Axel",
  "Mason",
  "Finn",
  "Troy",
  "Dylan",
  "Shawn"
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
 
}

export function makeRandomMessage(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
