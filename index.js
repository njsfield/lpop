#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const data = require("./data.json"); 

const shuffler = (a) => {
 let counter = a.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = a[counter];
        a[counter] = a[index];
        a[index] = temp;
    }

    return a;
}


if (data.index === data.students.length) {
    data.index = 0;
    data.students = shuffler(data.students);
} 

console.log(`\x1b[36m%s\x1b[0m`, data.students[data.index]);

data.index += 1;

fs.writeFileSync(path.join(__dirname,"data.json"), JSON.stringify(data)); 
