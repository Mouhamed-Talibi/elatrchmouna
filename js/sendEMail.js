document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Prepare EmailJS params
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        // Send email
        emailjs.send("service_hs3ccsl", "template_xlagqjl", templateParams)
        .then(function(response) {
            // Show success message
            successMessage.style.display = "block";
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
        }, function(error) {
            alert("Une erreur est survenue. Veuillez réessayer plus tard.");
            console.error("EmailJS Error:", error);
        });
    });
});
