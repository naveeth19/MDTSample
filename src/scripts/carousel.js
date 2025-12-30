/**
 * 3D Rotating Gallery
 * Creates a 3D carousel effect with rotating images
 */

(function() {
    'use strict';

    const imageFolder = 'src/assets/gallery';
    const imageNames = [
        'gallery-1.png',
        'gallery-2.png',
        'gallery-3.png',
        'gallery-4.png',
        'gallery-5.png',
        'gallery-6.png'
    ];

    const gallery = document.getElementById('gallery3D');

    if (!gallery) {
        console.warn('Gallery element not found');
        return;
    }

    console.log('3D Gallery initialized');

    // Create gallery items
    imageNames.forEach((imageName, index) => {
        const span = document.createElement('span');
        span.style.setProperty('--i', index + 1);
        
        const img = document.createElement('img');
        img.src = `${imageFolder}/${imageName}`;
        img.alt = `Gallery Image ${index + 1}`;
        
        img.onerror = function() {
            console.error('Failed to load image:', img.src);
            // Create placeholder on error
            const placeholder = document.createElement('div');
            placeholder.style.cssText = 'width: 100%; height: 100%; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 8px;';
            placeholder.textContent = `Image ${index + 1}`;
            span.replaceChild(placeholder, img);
        };
        
        span.appendChild(img);
        gallery.appendChild(span);
    });

    console.log('3D Gallery created with', imageNames.length, 'images');
})();
