// Change main image when clicking thumbnail
function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumb');
    
    // Get the src from clicked thumbnail
    const newSrc = element.src;
    mainImage.src = newSrc;
    
    // Update active class
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });
    element.classList.add('active');
}

// Countdown Timer
function startCountdown() {
    // Set target date (7 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 999);
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Floating animation for WhatsApp button
function addHoverEffects() {
    const waButtons = document.querySelectorAll('.btn-whatsapp');
    waButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    addHoverEffects();
    
    // Set default WhatsApp number (ganti dengan nomor WA asli Anda)
    const waNumber = '6281236456050'; // ← GANTI NOMOR INI
    const message = 'Assalamualaikum%2C%20saya%20tertarik%20dengan%20Buku%20Tajwid%20Al-Qur%27an.%20Mohon%20info%20lebih%20lanjut%20dan%20cara%20pemesanan.%20Terima%20kasih';
    
    document.querySelectorAll('.btn-whatsapp').forEach(btn => {
        btn.href = `https://wa.me/${waNumber}?text=${message}`;
    });
});