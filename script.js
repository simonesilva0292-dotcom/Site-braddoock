document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            productCards.forEach(card => {
                const category = card.getAttribute('data-category');

                // Esconde o card por padrão
                card.style.display = 'none';

                // Mostra o card se a categoria corresponder ao filtro ou se o filtro for 'all'
                if (filter === 'all' || filter === category) {
                    card.style.display = 'block';
                }
            });
        });
    });
});