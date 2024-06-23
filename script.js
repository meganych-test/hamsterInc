window.onload = function() {
    // Initialize the mobile check
    if (isMobile()) {
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
        // Display a message for non-mobile users
        document.body.innerHTML = '<h1>This app is only available on mobile devices.</h1>';
    }
};

function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function logActivity() {
    console.log('Activity logged');
}
