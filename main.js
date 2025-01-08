document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;

    // Handle Signup Page
    if (page === "signup") {
        const signupForm = document.getElementById("signupForm");

        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const fullName = document.getElementById("fullName").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            const userDetails = { fullName, email, password };
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            alert("Signup successful! Redirecting to login.");
            window.location.href = "index.html";
        });
    }

    // Handle Login Page
    if (page === "login") {
        const loginForm = document.getElementById("loginForm");

        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const savedUser = JSON.parse(localStorage.getItem("userDetails"));

            if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
                alert("Invalid login credentials!");
                return;
            }

            alert("Login successful!");
            window.location.href = "landing.html"; // Redirect to landing page
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;

    // Handle Landing Page
    if (page === "landing") {
        // Redirect to login if not logged in
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (!loggedInUser) {
            alert("Please log in first.");
            window.location.href = "index.html";
            return;
        }

        // Logout button functionality
        const logoutBtn = document.getElementById("logoutBtn");
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser"); // Clear login session
            alert("You have been logged out.");
            window.location.href = "index.html";
        });
    }
});

/**
 * Utility function to navigate to different pages
 * @param {string} pageUrl - The URL of the page to navigate to
 */
function navigateTo(pageUrl) {
    window.location.href = pageUrl;
}
if (page === "login") {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const savedUser = JSON.parse(localStorage.getItem("userDetails"));

        if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
            alert("Invalid login credentials!");
            return;
        }

        // Save logged-in user session
        localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
        alert("Login successful!");
        window.location.href = "landing.html"; // Redirect to landing page
    });
}

