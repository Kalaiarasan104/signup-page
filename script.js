const form = document.querySelector(".signup-form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting

  // Clear previous errors
  form.querySelectorAll(".error").forEach(el => el.remove());
  let hasError = false;

  const [firstName, lastName, email, password] = inputs;

  // Helper to show error
  const showError = (input, message) => {
    const error = document.createElement("div");
    error.classList.add("error");
    error.style.color = "red";
    error.style.fontSize = "0.75rem";
    error.style.marginTop = "4px";
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
    hasError = true;
  };

  // First Name
  if (!firstName.value.trim()) {
    showError(firstName, "First name is required");
  } else if (firstName.value.length > 150) {
    showError(firstName, "First name must be under 150 characters");
  }

  // Last Name
  if (!lastName.value.trim()) {
    showError(lastName, "Last name is required");
  } else if (lastName.value.length > 150) {
    showError(lastName, "Last name must be under 150 characters");
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    showError(email, "Email is required");
  } else if (!emailRegex.test(email.value)) {
    showError(email, "Enter a valid email address");
  }

  // Password
  const passwordValue = password.value;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const numberRegex = /\d/;
  const letterRegex = /[a-zA-Z]/;

  if (!passwordValue) {
    showError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    showError(password, "Password must be at least 8 characters");
  } else if (
    !specialCharRegex.test(passwordValue) ||
    !numberRegex.test(passwordValue) ||
    !letterRegex.test(passwordValue)
  ) {
    showError(
      password,
      "Password must contain letters, numbers, and a special character"
    );
  }

  if (!hasError) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
