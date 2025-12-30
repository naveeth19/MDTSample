/**
 * Hero Section Rotating Features
 * Rotates through feature list every 2.6 seconds
 */

(function() {
    'use strict';

    const features = [
        'City & Outstation Travel',
        'Airport Transfers',
        'Corporate Travel Solutions',
        'Premium Vehicle Fleet',
        'Professional Chauffeur Service'
    ];

    const rotateIntervalSeconds = 2.6;
    let currentIndex = 0;
    let rotationInterval;

    const featureElement = document.getElementById('rotatingFeature');

    if (!featureElement) {
        console.warn('Rotating feature element not found');
        return;
    }

    /**
     * Update the displayed feature text with fade animation
     */
    function updateFeature() {
        // Fade out
        featureElement.classList.remove('active');
        
        setTimeout(() => {
            // Update text
            featureElement.textContent = features[currentIndex];
            
            // Fade in
            setTimeout(() => {
                featureElement.classList.add('active');
            }, 50);
            
            // Move to next feature
            currentIndex = (currentIndex + 1) % features.length;
        }, 500); // Wait for fade out to complete
    }

    /**
     * Initialize the rotating features
     */
    function initRotatingFeatures() {
        // Set initial feature
        featureElement.textContent = features[0];
        featureElement.classList.add('active');
        
        // Start rotation after initial display
        setTimeout(() => {
            currentIndex = 1;
            rotationInterval = setInterval(updateFeature, rotateIntervalSeconds * 1000);
        }, rotateIntervalSeconds * 1000);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initRotatingFeatures);
    } else {
        initRotatingFeatures();
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (rotationInterval) {
            clearInterval(rotationInterval);
        }
    });
})();

