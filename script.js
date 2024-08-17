
document.addEventListener('DOMContentLoaded', function() {
    // Lógica para o filtro de preços
    const priceFilter = document.getElementById('preco-filtro');
    const items = document.querySelectorAll('.moldura');

    priceFilter.addEventListener('change', function() {
        const selectedValue = this.value.split('-');
        const minPrice = parseFloat(selectedValue[0]);
        const maxPrice = parseFloat(selectedValue[1]);

        items.forEach(item => {
            const itemPrice = parseFloat(item.getAttribute('data-price'));
            if ((!isNaN(minPrice) && itemPrice < minPrice) || (!isNaN(maxPrice) && itemPrice > maxPrice)) {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    });


}
