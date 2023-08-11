//GENERATE PASSWORD
document.getElementById("Generate").addEventListener('click', function run() {
    var i = 0
    var result = '';
    let max_length = document.getElementById("max_char").value
    // let max_length = prompt("Enter the length of your password");
    while (i < max_length) {

        //1 to 10
        let numChoice = 11
        let num = Math.floor(Math.random() * (numChoice)) + 1;
        // console.log(num);


        //a to z
        const randomCharCodeaz = Math.floor(Math.random() * 26) + 97; // Random number between 97 ('a') and 122 ('z')
        const randomCharacteraz = String.fromCharCode(randomCharCodeaz);
        // console.log(randomCharacteraz);


        //A to Z
        const randomCharCodeAZ = Math.floor(Math.random() * 26) + 65; // Random number between 65 ('A') and 90 ('Z')
        const randomCharacterAZ = String.fromCharCode(randomCharCodeAZ);
        // console.log(randomCharacterAZ);

        //special characters
        const specialCharacters = '!@#$%^&*()_-+=[]{}|;:,.<>?/~`';
        const randomIndex = Math.floor(Math.random() * specialCharacters.length);
        const randomCharacter = specialCharacters[randomIndex];
        // console.log(randomCharacter);

        var a = num + randomCharacteraz + randomCharacterAZ + randomCharacter
        result += a; // Concatenate the current response with a space
        i += 4;
    }
    document.getElementById("pass_place").value = (result.substring(0, max_length));
    console.log(result.substring(0, max_length));
    // console.log(result);

})

//COPY TO CLIPBOARD
document.getElementById("copy_text").addEventListener('click', function copy() {

    document.getElementById("pass_place").select();

    try {
        document.execCommand("copy");
        console.log("Text copied to clipboard!");
    } catch (err) {
        console.error("Unable to copy text to clipboard:", err);
    }

    // Show the popup message
    try {
        var popupMessage = document.getElementById("popupMessage");
        popupMessage.style.display = "block";

        // Hide the popup after a short delay (e.g., 2 seconds)
        setTimeout(function () {
            popupMessage.style.display = "none";
        }, 2000); // 2000 milliseconds = 2 seconds
    }
    catch (err) {
        console.error("Unable to copy text to clipboard:", err);
    }

    // Deselect the text
    window.getSelection().removeAllRanges();

})

