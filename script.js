// Simple handler for enquiry form submit
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic front-end validation
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();

      if (!name || !phone) {
        alert("Please fill at least Name and Phone Number.");
        return;
      }

      alert(
        "Thank you for your enquiry.\nOur team from Fazil Enterprises will contact you shortly."
      );

      form.reset();
    });
  }
});
