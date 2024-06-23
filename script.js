        window.onload = function() {
            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
                document.getElementById('desktop-message').style.display = 'block';
                document.querySelector('.bg').style.display = 'none';
            } else {
                const tg = window.Telegram.WebApp;
                
                // Expand the Web App to full height
                tg.expand();
                // Set the background color to black
                tg.setBackgroundColor('#000000');
                // Set the header color (you might want to adjust this)
                tg.setHeaderColor('#000000');
                // Additional initialization code can go here
            }
                // Prevent right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Prevent selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Prevent copy
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// Additional script to prevent view source using key combinations
document.addEventListener('keydown', function(e) {
    // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.keyCode == 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || 
        (e.ctrlKey && e.keyCode == 85)) {
        e.preventDefault();
    }
});

        };
