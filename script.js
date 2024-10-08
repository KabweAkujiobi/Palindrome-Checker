const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

//check if word / phrase is a palindrome and clean the word.
const checkPalindrome = (input) => {

  if(input === ""){
    alert("Please input a value");
    return;
  }

  //clean the word/phrase from punctuation, spaces, and symbols and alphanumeric characters. 
  const cleanWord = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  //reverse the input. 
  const reverseInput = cleanWord.split("").reverse().join("");
  
  return cleanWord === reverseInput ? `${input} is a palindrome` : `${input} is not a palindrome`;
  
}


checkButton.addEventListener("click", () => {
  const resultMessage = checkPalindrome(textInput.value);
  result.textContent = resultMessage; // Display the result in the result element
  result.classList.remove("hide");
  textInput.value = "";
});


textInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const resultMessage = checkPalindrome(textInput.value);
    result.textContent = resultMessage; // Display the result in the result element
    result.classList.remove("hide");
    textInput.value = "";
  }
});