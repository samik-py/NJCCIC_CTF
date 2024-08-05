/*
    _                           ____             _          _          
   / \   ___ ___ ___  ___ ___  |  _ \  ___ _ __ (_) ___  __| |         
  / _ \ / __/ __/ _ \/ __/ __| | | | |/ _ \ '_ \| |/ _ \/ _` |         
 / ___ \ (_| (_|  __/\__ \__ \ | |_| |  __/ | | | |  __/ (_| |         
/_/   \_\___\___\___||___/___/ |____/ \___|_| |_|_|\___|\__,_|         
 _   _       _     ____            _            __    ____ _____ _____ 
| \ | | ___ | |_  |  _ \ __ _ _ __| |_    ___  / _|  / ___|_   _|  ___|
|  \| |/ _ \| __| | |_) / _` | '__| __|  / _ \| |_  | |     | | | |_   
| |\  | (_) | |_  |  __/ (_| | |  | |_  | (_) |  _| | |___  | | |  _|  
|_| \_|\___/ \__| |_|   \__,_|_|   \__|  \___/|_|    \____| |_| |_|    
*/


const correctFlag = "correctFlag123";
document.addEventListener("DOMContentLoaded", () => {
const flagInput = document.getElementById("flagInput");
const checkButton = document.getElementById("checkButton");

  checkButton.addEventListener("click", () => {
    if (flagInput.value === correctFlag) {
      checkButton.classList.add("correct");
      setTimeout(() => {
        window.location.href = "../home.html";
      }, 2500);
    } else {
      checkButton.classList.remove("correct");
    }
  });
});