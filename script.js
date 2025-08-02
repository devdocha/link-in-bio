document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copy-btn');
    if (copyButton) {
        copyButton.addEventListener('click', copyPix);
    }
});

function copyPix() {
    const pixCodeElement = document.querySelector('.pix-code');
    if (!pixCodeElement) return;

    const pixCode = pixCodeElement.textContent;
    navigator.clipboard.writeText(pixCode).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✅ Copiado!';
        copyBtn.style.background = '#28a745';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '#F5A9B8';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        alert('PIX copiado: ' + pixCode);
    });
}
