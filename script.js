function rolar(event) {
    event.preventDefault();
    
    document.getElementById('adocao').scrollIntoView({
        behavior: 'smooth'
    });
}

function animarWhatsApp() {
    const btnWhats = document.querySelector('.whatsapp-float');
    
    btnWhats.style.transform = 'scale(1.1)'; // Aumenta
    setTimeout(() => btnWhats.style.transform = 'scale(1)', 1000); 
}

