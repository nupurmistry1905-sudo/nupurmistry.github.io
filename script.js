document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('btn');
    
    // Simple visual feedback for the button click
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
        alert('Login attempt recorded!');
    }, 150);
});