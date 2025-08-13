document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const navMenu = document.getElementById('navMenu');
    const btnConheca = document.getElementById('btnConheca');
    
    // Abrir/fechar menu mobile
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um item
    const navItems = document.querySelectorAll('.nav-btn');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    
    btnConheca.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('adocao').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
