// Upload image
document.getElementById('finput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                // Get canvas and context
                const canvas = document.getElementById('canv1');
                const ctx = canvas.getContext('2d');

                // Set canvas dimensions to the image dimensions
                canvas.width = img.width;
                canvas.height = img.height;

                // Optional: Handle high DPI screens (like Retina displays)
                const dpr = window.devicePixelRatio || 1;
                canvas.width = img.width * dpr;
                canvas.height = img.height * dpr;
                ctx.scale(dpr, dpr);

                // Clear canvas before drawing
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw image at full resolution
                ctx.drawImage(img, 0, 0, img.width, img.height);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// stray form submission
const form = document.getElementById('stray-form');
form.addEventListener('submit', function() {
    alert('Thank you for reporting. A nearby NGO will be notified. We will let you know when the dog is rescued.');
});