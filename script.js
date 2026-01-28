// Get elements 
const getStartedBtn = document.querySelector(".button3");
const emailInput = document.querySelector(".this");
const signInBtn = document.querySelector(".button2");
const langBtn = document.querySelector(".button1");

// Get Started button 
getStartedBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter your email address!");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address Mannn!😥");
    return;
  }

  alert("Welcome! This is a Netflix clone UI. No real signup 😄😁");
  emailInput.value = "";
});

// Sign In button logic
signInBtn.addEventListener("click", () => {
  alert("Sign In page is not implemented yet.");
});

// Language button opt
let isEnglish = true;

langBtn.addEventListener("click", () => {
  if (isEnglish) {
    langBtn.innerText = "हिंदी";
    alert("Language switched to Hindi");
  } else {
    langBtn.innerText = "English";
    alert("Language switched to English");
  }
  isEnglish = !isEnglish;
});

emailInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getStartedBtn.click();
  }
});
