function checkReverseString(str) {
    str = str.replace(/\s/g, "").toLowerCase();
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    console.log(str)
    console.log(reversed)
    return reversed===str;
  }
const myString = "Race Car";

console.log(checkReverseString(myString));