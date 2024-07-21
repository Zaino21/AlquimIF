document.addEventListener('DOMContentLoaded', function() {
    const fotos = document.querySelectorAll('.foto-membro img');
    
    fotos.forEach(function(foto) {
        foto.addEventListener('click', function() {
            const src = this.getAttribute('src');
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${src}" alt="Foto ampliada" class="ampliada">
                </div>
            `;
            document.body.appendChild(modal);
            
            const closeBtn = modal.querySelector('.close');
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(modal);
            });

            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });
});
