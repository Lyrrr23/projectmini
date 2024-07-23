document.addEventListener('DOMContentLoaded', function () {
    // Function to handle 'Buy' button click
    function handleBuyButtonClick() {
        alert('Produk berhasil dibeli!');
        window.location.href = 'contactus.html'; // Redirect to contact us page
    }

    // Function to handle 'Add to Cart' button click
    function handleAddToCartButtonClick() {
        alert('Produk ditambahkan ke keranjang!');
        // You can also add logic to update the cart
    }

    // Attach event listeners to 'Buy' and 'Add to Cart' buttons
    const buyButtons = document.querySelectorAll('button.beli');
    const cartButtons = document.querySelectorAll('button.add-to-cart');

    buyButtons.forEach(button => {
        button.addEventListener('click', handleBuyButtonClick);
    });

    cartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCartButtonClick);
    });
});
