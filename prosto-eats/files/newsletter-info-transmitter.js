document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxw3mHXHaMroWnXr5DcggDwxqx2vPHi3tx-79_e4wHt9cQl_VlP5-gi1qpCYgImAzP8yw/exec';
    const form = document.getElementById('newsletter-form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thanks! You have been signed up, check your email!"))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message));
    });
});
