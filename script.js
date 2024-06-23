window.onload = function() {
    const desktopMessage = document.getElementById('desktop-message');
    const bgElement = document.querySelector('.bg');
    
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        // Desktop device
        desktopMessage.style.display = 'flex';
        bgElement.style.display = 'none';
    } else {
        // Mobile device
        desktopMessage.style.display = 'none';
        bgElement.style.display = 'block';
        
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
