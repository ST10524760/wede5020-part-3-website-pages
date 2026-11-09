window.openGalleryModal = function(imgElement) {
    let lightbox = document.getElementById('lightbox-modal');
    
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox-modal';
        lightbox.className = 'lightbox-modal';
        lightbox.setAttribute('aria-hidden', 'true');
        lightbox.setAttribute('role', 'dialog');
        
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" onclick="closeGalleryModal()" aria-label="Close Image Modal">&times;</button>
                <img class="lightbox-img" id="lightbox-img" src="" alt="Enlarged View">
                <div class="lightbox-caption" id="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    const modalImg = document.getElementById('lightbox-img');
    const modalCaption = document.getElementById('lightbox-caption');
    
    modalImg.src = imgElement.src;
    
    const parentCard = imgElement.closest('.gallery-card');
    if (parentCard && parentCard.querySelector('.gallery-caption')) {
        modalCaption.textContent = parentCard.querySelector('.gallery-caption').textContent;
    } else {
        modalCaption.textContent = imgElement.alt || 'Soweto Global Solutions Showcase';
    }
    
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
};

window.closeGalleryModal = function() {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
    }
};

window.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox && e.target === lightbox) {
        window.closeGalleryModal();
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.closeGalleryModal();
    }
});
document.addEventListener('DOMContentLoaded', () => {

    // --- ENQUIRY FORM SUBMISSION HANDLER ---
    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const successMsg = document.getElementById('success-message');
            if (successMsg) {
                successMsg.style.display = 'block'; 
            }
            
            enquiryForm.reset(); 
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- HOMEPAGE QUOTE ESTIMATOR CALCULATOR ---
    const quoteForm = document.getElementById('quote-estimator-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const businessSize = document.getElementById('business-size').value;
            const primaryNeed = document.getElementById('primary-need').value;
            
            let baseRate = 1200;
            if (businessSize === 'medium') baseRate = 2500;
            if (businessSize === 'enterprise') baseRate = 4500;

            let multiplier = 1;
            if (primaryNeed === 'support') multiplier = 1.2;
            if (primaryNeed === 'training') multiplier = 1.0;
            if (primaryNeed === 'docs') multiplier = 1.1;

            const subtotal = baseRate * multiplier;
            const vat = subtotal * 0.15; 
            const total = subtotal + vat;

            let estimateBox = document.getElementById('quote-estimate-result');
            if (!estimateBox) {
                estimateBox = document.createElement('div');
                estimateBox.id = 'quote-estimate-result';
                estimateBox.className = 'quote-estimate-box';
                quoteForm.appendChild(estimateBox);
            }

            estimateBox.innerHTML = `
                <div class="estimate-result">
                    <h3>Estimated Package Investment</h3>
                    <p>Calculated Rate (Excl. VAT): <strong>R ${subtotal.toFixed(2)}</strong></p>
                    <p>South African VAT (15%): <strong>R ${vat.toFixed(2)}</strong></p>
                    <p>Total Estimated Cost: <strong>R ${total.toFixed(2)}</strong></p>
                    <a href="enquiry.html" class="btn-blue">Proceed with this Quote</a>
                </div>
            `;
        });
    }

document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('gallery-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-card');
    const noResultsMsg = document.getElementById('no-results');

    if (galleryCards.length > 0) {
        let activeCategory = 'all';
        let searchQuery = '';

        function filterGallery() {
            let visibleCount = 0;

            galleryCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const captionEl = card.querySelector('.gallery-caption');
                const imgEl = card.querySelector('img');
                
                const captionText = captionEl ? captionEl.textContent.toLowerCase() : '';
                const altText = imgEl && imgEl.alt ? imgEl.alt.toLowerCase() : '';

                // Check matches
                const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
                const matchesSearch = (searchQuery === '' || captionText.includes(searchQuery) || altText.includes(searchQuery));

                if (matchesCategory && matchesSearch) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Toggle no results feedback message
            if (noResultsMsg) {
                noResultsMsg.style.display = (visibleCount === 0) ? 'block' : 'none';
            }
        }

        // Filter Buttons Click Listener
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Update active category and re-run filter
                activeCategory = btn.getAttribute('data-filter');
                filterGallery();
            });
        });

        // Real-Time Search Input Listener
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.toLowerCase().trim();
                filterGallery();
            });
        }
    }

});
});