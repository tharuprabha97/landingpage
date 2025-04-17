const submittedEmails = new Set();

// Learn More
document.getElementById('learnMoreForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('learnMoreEmail').value.trim().toLowerCase();
  const messageDiv = document.getElementById('learnMoreMessage');

  if (!email) {
    messageDiv.textContent = 'Please enter your email.';
    messageDiv.style.color = 'red';
    return;
  }

  if (submittedEmails.has(email)) {
    messageDiv.textContent = 'This email is already registered.';
    messageDiv.style.color = 'orange';
    return;
  }

  submittedEmails.add(email);
  messageDiv.textContent = 'Thanks! You’ll hear from us soon.';
  messageDiv.style.color = 'green';
  document.getElementById('learnMoreForm').reset();
});

// Registration
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const messageDiv = document.getElementById('registerMessage');

  if (!name || !surname || !email) {
    messageDiv.textContent = 'Please fill in all fields.';
    messageDiv.style.color = 'red';
    return;
  }

  if (submittedEmails.has(email)) {
    messageDiv.textContent = 'This email is already registered.';
    messageDiv.style.color = 'orange';
    return;
  }

  submittedEmails.add(email);
  messageDiv.textContent = `Welcome aboard, ${name}!`;
  messageDiv.style.color = 'green';
  document.getElementById('registrationForm').reset();
});


window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");
  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});
