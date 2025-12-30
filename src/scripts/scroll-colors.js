/**
 * Navbar Color Management
 * Keeps navbar white at all times (background color transitions disabled)
 */

(function() {
    'use strict';

    const root = document.documentElement;

    /**
     * Initialize navbar colors
     */
    function initNavbarColors() {
        // Navbar always stays white
        root.style.setProperty('--navbar-bg', 'rgba(255, 255, 255, 0.95)');
        root.style.setProperty('--navbar-text', '#000000');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbarColors);
    } else {
        initNavbarColors();
    }
})();

