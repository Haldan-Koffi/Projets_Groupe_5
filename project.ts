function generatePasswordPrompt(): string {
    // input
    const length = parseInt(prompt("Enter password length:") || "15");
    const useUppercase = confirm("Include uppercase letters?");
    const useNumbers = confirm("Include numbers?");
    const useSymbols = confirm("Include symbols?");

    // Characters sets
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+[]{}<>?/";

    let characterPool = lowercaseChars;

    switch (useUppercase) {
        case true:
            characterPool += uppercaseChars;
            break;
    }

    switch (useNumbers) {
        case true:
            characterPool += numberChars;
            break;
    }

    switch (useSymbols) {
        case true:
            characterPool += symbolChars;
            break;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    return password;
}

const newPassword = generatePasswordPrompt();
alert("Generated Password: " + newPassword);
