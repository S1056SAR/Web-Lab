function setupRolloverImage() {
    const image = document.getElementById('rolloverImage');
    const originalImage = 'image1.jpg';
    const hoverImage = 'image2.jpg';    
    image.src = originalImage;
    image.addEventListener('mouseenter', function() {
        this.src = hoverImage;
    });
    
    image.addEventListener('mouseleave', function() {
        this.src = originalImage;
    });
}

window.onload = setupRolloverImage;