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
};
