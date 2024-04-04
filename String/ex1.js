function checkStringExist(searchString, mainString) {
    const regex = new RegExp(`\\b${searchString}\\b`);
    return regex.test(mainString);
  }
  const mainString = "Amela A Beta";
  const searchString = "la";
  
console.log(checkStringExist(searchString, mainString)); 