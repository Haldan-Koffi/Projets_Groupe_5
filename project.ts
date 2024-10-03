function generatePassword(): string {
    // the password length
    const length = parseInt(prompt("Enter password length:") || "12");

    // if enter character types
    const useUppercase = confirm("Include uppercase letters?");
    const useNumbers = confirm("Include numbers?");
    const useSymbols = confirm("Include symbols?");

    // character type
    let uppercaseCount = 0;
    let numbersCount = 0;
    let symbolsCount = 0;

    // counts
    switch (useUppercase) {
        case true:
            uppercaseCount = parseInt(prompt("How many uppercase letters?") || "0");
            break;
    }
    switch (useNumbers) {
        case true:
            numbersCount = parseInt(prompt("How many numbers?") || "0");
            break;
    }
    switch (useSymbols) {
        case true:
            symbolsCount = parseInt(prompt("How many symbols?") || "0");
            break;
    }

    // if they enter more than length
    if (uppercaseCount + numbersCount + symbolsCount > length) {
        alert("The total number of specified characters exceeds the password length. Please try again.");
        return ""; 
    }

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+[]{}<>?/";

    let password = "";

    // Add the specified counts of each type to the password
    for (let i = 0; i < uppercaseCount; i++) {
        password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    }
    for (let i = 0; i < numbersCount; i++) {
        password += numberChars[Math.floor(Math.random() * numberChars.length)];
    }
    for (let i = 0; i < symbolsCount; i++) {
        password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
    }

    // remaining fill lowercase characters
    for (let i = password.length; i < length; i++) {
        password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }

    return password;
}

const newPassword = generatePassword();
if (newPassword) {
    alert("Generated Password: " + newPassword);
}
