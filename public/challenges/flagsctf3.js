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


document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    { question: "This site in infected with malware. Find the name of the function called in the malware.", answer: "seamonster" },
    { question: "What is the webhook URL?", answer: "https://discord.com/api/webhooks/123456/123abc" },
    // Add more questions as needed
  ];})

  document.addEventListener('DOMContentLoaded', () => {
    const questionsAndAnswers = [
      { question: "What is the first flag?", correctFlag: "flag1" },
      { question: "What is the second flag?", correctFlag: "flag2" },
      { question: "What is the third flag?", correctFlag: "flag3" }
    ];
    
    const flagInput = document.getElementById('flagInput');
    const checkButton = document.getElementById('checkButton');
    const promptContainer = document.getElementById('promptContainer');
    let currentQuestionIndex = 0;
  
    const displayQuestion = () => {
      if (currentQuestionIndex < questionsAndAnswers.length) {
        promptContainer.innerText = questionsAndAnswers[currentQuestionIndex].question;
      }
    };
  
    checkButton.addEventListener('click', () => {
      if (currentQuestionIndex < questionsAndAnswers.length) {
        const userFlag = flagInput.value;
        if (userFlag === questionsAndAnswers[currentQuestionIndex].correctFlag) {
          if (currentQuestionIndex === questionsAndAnswers.length - 1) {
            promptContainer.innerText = 'Correct Flag! Proceeding to CTF4.';
            setTimeout(() => {
              window.location.href = 'CTF4.html'; // Redirect to CTF4
            }, 2000); // Redirect after 2 seconds
          } else {
            promptContainer.innerText = 'Correct Flag! Proceeding to the next question.';
            currentQuestionIndex++;
            setTimeout(displayQuestion, 2000); // Display next question after 2 seconds
          }
        } else {
          promptContainer.innerText = 'Incorrect Flag. Try again.';
        }
      }
    });
  
    // Initial question display
    displayQuestion();
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const briefing = document.querySelector('.briefing');
    const container = document.querySelector('.container');
  
    briefing.addEventListener('animationend', () => {
      setTimeout(() => {
        container.classList.add('moved');
      }, 4000);
    });
  });
  