 // Function to close the login pop-up
    function closeLogin() {
        console.log("close success");
        let loginContainer = document.querySelector(".login-container");
        let djjjj = document.querySelector(".div");
        djjjj.style.display = "block";
        loginContainer.style.display = 'none';
    }

    function openLogin() {
        console.log("login");
        let loginContainer = document.querySelector(".login-container");
        let djjjjj = document.querySelector(".div");
        djjjjj.style.display = "none";
        loginContainer.style.display = 'block';
    }

    // Add event listener to the login button
    document.querySelector(".login-button").addEventListener("click",openLogin);
    
    document.querySelector(".close-btn").addEventListener("click",closeLogin);
