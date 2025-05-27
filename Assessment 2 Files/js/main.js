document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("form-msg");
  
    if (email.includes("@") && email.includes(".")) {
      localStorage.setItem("newsletterEmail", email);
      message.textContent = "Thank you for subscribing!";
      message.style.color = "green";
    } else {
      message.textContent = "Please enter a valid email.";
      message.style.color = "red";
    }
  });
  