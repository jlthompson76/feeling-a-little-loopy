// Loop #1
// Write a loop that will console.log "I am starting to feel a little loopy" 3 times.

console.log('Loop #1');
let i = 0;
while(i < 3) {
    console.log(`I am starting to feel a little loopy`);
    i++;
}

// Loop #2
// Write a while loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and console log the result (e.g. "2 is even").

console.log(`Loop #2`);
i = 0;
while(i <= 20) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else if (i % 2 != 0) {
        console.log(`${i} is odd`);
    }
    i++;
}

// Loop #3
// Write a while loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

console.log(`Loop #3`);
i = 0;
while(i <= 10) {
    let result = i * 9;
    console.log(`${i} * 9 = ${result}`);
    i++;
    if (i > 10) {
        break;
    }
}

// Loop #4
// Make a while loop that has a variable with a value of 36. As you loop down to 1, return the sum of when you divide the variable (at its current state in that iteration) by 2.

console.log(`Loop #4`);
i = 36;
while(i <= 36) {
    let sum = i / 2;
    console.log(`The sum of ${i} divided by 2 is ${sum}.`);
    i--;
    if (i === 0) {
        break;
    }
}

 // Loop #5
 // You have a shelf that can only hold so many books. For each iteration of the loop, we will add one book onto the shelf. Once the shelf has 80 books, you can no longer add anymore. Write a script that after every iteration, it will tell you how many remaining books you can add into the shelf. Console long something like, "There is room for only ## of books"

console.log(`Loop #5`);
i = 80;
while(i <= 80) {
    if (i === 1) {
        console.log(`There is room for ${i} more book.`);
    } else if (i === 0) {
        console.log(`Your bookshelf is full! You already have 80 books, there isn't any room for more! Time to buy a new bookshelf!`);
    } else {
        console.log(`There is room for ${i} more books.`);
    }
    i--;
    if (i < 0) {
        break;
    }
}