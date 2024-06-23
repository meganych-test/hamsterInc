window.onload = function() {
    // Initialize the mobile check
    if (isMobile()) {
        // Hide the non-mobile message
        document.getElementById('no-mobile-message').style.display = 'none';

        // Log activity on mouse movement
        window.onmousemove = logActivity;

        // Initialize Telegram WebApp
        const tg = window.Telegram.WebApp;
        tg.expand();

        // Set the initial language if available
        if (tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.language_code) {
            document.documentElement.lang = tg.initDataUnsafe.user.language_code;

            // Display user information
            const userInfo = `Language: ${tg.initDataUnsafe.user.language_code}`;
            const userInfoElement = document.getElementById('user-info');
            if (userInfoElement) {
                userInfoElement.textContent = userInfo;
            }
        }
    } else {
        // Show the non-mobile message
        document.getElementById('no-mobile-message').style.display = 'block';
    }
};

function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function logActivity() {
    console.log('Activity logged');
}
