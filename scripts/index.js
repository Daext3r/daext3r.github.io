
window.onload = async () => {
   //REDIRECT TO ORGANIZATION REPO
   window.location = "https://dexsoftcoding.github.io";

   //when the dom is loaded
   const phrases = ["Web development & more!", "Don't stop learning!", "Contact below!"];

   //for each phrase
   for await (let phrase of phrases) {
      await writePhrase(phrase);

      if (phrases.indexOf(phrase) != phrases.length - 1)
         await deletePhrase();
   }

   //toggles the cursor displays once
   document.getElementsByClassName("cursor")[0].classList.toggle("opacity")

   //toggle the displays each 800ms
   setInterval(() => { document.getElementsByClassName("cursor")[0].classList.toggle("opacity") }, 800);
}

async function writePhrase(phrase) {

   for await (let char of phrase) {
      //for each character
      document.getElementById("home-text").innerHTML += char;
      await timeout(100);
   }

   return new Promise(resolve => setTimeout(resolve, 600));
}

async function deletePhrase() {
   while (document.getElementById("home-text").innerText.length >= 1) {
      if (document.getElementById("home-text").innerText.length != 1) {
         //removes the last character
         document.getElementById("home-text").innerText = document.getElementById("home-text").innerText.slice(0, document.getElementById("home-text").innerText.length - 1);
      } else {
         //writes an space, so the logo doesn't do anything strange
         document.getElementById("home-text").innerHTML = " ";
      }
      
      await timeout(100);
   }
   return new Promise(resolve => resolve());

}

function timeout(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}