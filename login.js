/**HTML DOM**/
let emailElement=document.querySelector("[type=email]")
let passwordElement=document.querySelector("[type=password]")
const submitElement=document.querySelector("[type=submit]")

/**Validation Email und Passwort**/
function validateForm(){
   const emailValid= validateEmail()
   const passwordValid= validatePassword()
   if (emailValid & passwordValid){
      submitElement.removeAttribute("disabled");

   }
  else{
      submitElement.setAttribute("disabled","disabled")

   }
}


/**Validation Email mit der RegEx Funktion**/
function validateEmail() {

const email=emailElement.value
let result =testEmailRegEx(email)
   console.log(email,result)
   if(!result){
      emailElement.classList.add("error")

   }
   else if(result){
      emailElement.classList.remove("error")
   }
return result
}

/**Test Email Funktion RegEx**/
function testEmailRegEx(email) {
   let emailpattern=/^[a-z._-]{3,}@[a-z_-]{3,}\.\w{2,3}$/gi;
   return emailpattern.test(email);
}
/**Funktion init
 *addEventListener ist eine zentrale Funktion, die Events und die dazugehörigen Aktionen registriert.
 *addEventListener behandelt Events für window, document oder individuelle Elemente der Webseite.
 *removeEventListener löst den Event Handler wieder vom Ereignis.**/

function init(){
   console.log("init")

    emailElement.addEventListener("input",validateForm)
   passwordElement.addEventListener("input",validateForm)
}


/**Validation Passwort**/
function validatePassword() {
   let password =passwordElement.value;
   let result =testpasswordlength(password,12) ;
   const resultSpecialCharacters= testSpecialCharacters(password)
   const resultNumber= testNumberRegEx(password)
   const resultCapitals= testCapital(password)
   const resultLowerkeys= testLowerKeys(password)
   const finalResult= result & resultLowerkeys & resultCapitals & resultNumber & resultSpecialCharacters
   if(!finalResult){
      passwordElement.classList.add("error")

   }
   else if(finalResult){
      passwordElement.classList.remove("error")
   }
   console.log(password,finalResult)

return finalResult
}


/**Validation Passwort (Länge) RegEx Funktion
 * Regular Expression Validation**/
function testpasswordlength (password,length) {
   return password.length >= length;

}
function testNumberRegEx(password) {
   return /\d+/g.test(password);

}

function testSpecialCharacters(password) {
   return /[\u0021--\u0029]+/g.test(password);


}

function testCapital(password) {
   return /[A-Z]+/g.test(password)
}

function testLowerKeys(password) {
   return /[a-z]+/g.test(password)
}

init()
