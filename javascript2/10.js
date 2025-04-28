// The Reading List
function createReadingList() {
    // Create an array of book objects
    const books = [
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            alreadyRead: true
        },
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            alreadyRead: false
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling",
            alreadyRead: true
        },
        {
            title: "1984",
            author: "George Orwell",
            alreadyRead: false
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            alreadyRead: true
        }
    ];
    
    // Iterate through the array and log each book
    let bookList = "Reading List:\n\n";
    
    for (let i = 0; i < books.length; i++) {
        // Log book title and author
        console.log(`${books[i].title} by ${books[i].author}`);
        
        // Use if/else to change the output based on whether the book has been read
        if (books[i].alreadyRead) {
            console.log(`You already read "${books[i].title}" by ${books[i].author}`);
            bookList += `✓ You already read "${books[i].title}" by ${books[i].author}\n`;
        } else {
            console.log(`You still need to read "${books[i].title}" by ${books[i].author}`);
            bookList += `□ You still need to read "${books[i].title}" by ${books[i].author}\n`;
        }
    }
    
    alert(bookList);
    return books;
}

// Function to create reading list from user input
function createUserReadingList() {
    const books = [];
    let addMoreBooks = true;
    
    while (addMoreBooks) {
        const title = prompt("Enter book title (or click Cancel to finish):");
        
        if (!title) {
            addMoreBooks = false;
            continue;
        }
        
        const author = prompt(`Enter the author of "${title}":`);
        const readStatus = confirm(`Have you already read "${title}"?`);
        
        books.push({
            title: title,
            author: author,
            alreadyRead: readStatus
        });
    }
    
    // Display the reading list
    let bookList = "Your Reading List:\n\n";
    
    for (let i = 0; i < books.length; i++) {
        if (books[i].alreadyRead) {
            bookList += `✓ You already read "${books[i].title}" by ${books[i].author}\n`;
        } else {
            bookList += `□ You still need to read "${books[i].title}" by ${books[i].author}\n`;
        }
    }
    
    console.log(bookList);
    alert(bookList);
}

// Display the example reading list
console.log("Default Reading List:");
createReadingList();

// Create a user reading list
console.log("\nUser Reading List:");
createUserReadingList();