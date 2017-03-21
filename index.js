#!/usr/bin/env node
const fs = require("fs");

const data = require("./data.json"); 

const shuffler = (a) => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

if (data.index === data.students.length) {
    data.index = 0;
    data.students = shuffler(data.students);
} 

console.log(`\x1b[36m%s\x1b[0m`, data.students[data.index]);

data.index += 1;

fs.writeFileSync("data.json", data);

