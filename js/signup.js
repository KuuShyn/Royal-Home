$(document).ready(function () {
  $("#signup-form").submit(function (event) {
    event.preventDefault(); // prevent the form from submitting

    // Get the form data
    var firstName = $("#firstname").val().trim();
    var lastName = $("#lastname").val().trim();
    var email = $("#sEmail").val().trim();
    var password = $("#sPassword").val().trim();

    // Check if any fields are empty
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("Please fill in all required fields."); // Display error message
    } else {
      window.location.href = "dashboard.html"; // Redirect to dashboard.html
    }
  });
});
