$(document).ready(function () {
  $("#login-form").submit(function (event) {
    event.preventDefault(); // Prevent form submission

    const email = $("#email").val();
    const password = $("#password").val();

    if (email === "admin@gmail.com" && password === "pwd") {
      // Login successful, redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      // Login failed, display error message
      alert("Invalid email or password. Please try again.");
    }
  });
});
