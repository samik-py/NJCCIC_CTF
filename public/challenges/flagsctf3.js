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
*//*
document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    { question: "\nThis website is infected with malware. Find it and send the function name.", flag: "perfect" },
    { question: "\nWhat is the webhook url?", flag: "https://discord.com/api/webhooks/4567/ldkfjhc" },
    { question: "\nWhat is the API link?", flag: "https://api.grabify.com" },
    // Add more questions here
  ];

  let currentQuestionIndex = 0;
  const flagInput = document.getElementById('flagInput');
  const checkButton = document.getElementById('checkButton');
  const typingContainer = document.getElementById('typingContainer');
  const promptContainer = document.getElementById('promptContainer');

  function displayCurrentQuestion() {
    typingContainer.textContent = questions[currentQuestionIndex].question;
  }

  checkButton.addEventListener('click', () => {
    const userFlag = flagInput.value;
    if (userFlag === questions[currentQuestionIndex].flag) {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayCurrentQuestion();
        flagInput.value = '';
      } else {
        alert('Advancing to CTF4');
        window.location.href = 'CTF4.html';
      }
    } else {
      alert('Incorrect Flag. Try again.');
    }
  });

  displayCurrentQuestion();
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




































































































































































































































































*/

document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    { question: "\nThis website is infected with malware. Find it and send the function name.", flag: "seamonster" },
    { question: "\nWhat is the webhook url?", flag: "https://discord.com/api/webhooks/123456/123abc" },
    { question: "\nWhat is the API link?", flag: "https://api.ipify.org/?format=json%27" },
    // Add more questions here
  ];

  let currentQuestionIndex = 0;
  const flagInput = document.getElementById('flagInput');
  const checkButton = document.getElementById('checkButton');
  const typingContainer = document.getElementById('typingContainer');
  const promptContainer = document.getElementById('promptContainer');

  function displayCurrentQuestion() {
    typingContainer.textContent = questions[currentQuestionIndex].question;
  }

  checkButton.addEventListener('click', () => {
    const userFlag = flagInput.value;
    if (userFlag === questions[currentQuestionIndex].flag) {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayCurrentQuestion();
        flagInput.value = '';
      } else {
        alert('Advancing to CTF4');
        window.location.href = 'CTF4.html';
      }
    } else {
      alert('Incorrect Flag. Try again.');
    }
  });

  displayCurrentQuestion();
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
