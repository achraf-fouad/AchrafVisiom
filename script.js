document.addEventListener('DOMContentLoaded', function() {
    
    const products = [
        {
            id: 1,
            name: "Classic Black Frames",
            description: "Timeless design with anti-reflective coating",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 2,
            name: "Modern Round Frames",
            description: "Lightweight titanium frames with blue light filter",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 3,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 4,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 5,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 6,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 7,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 8,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 9,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 10,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 11,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 12,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 13,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 14,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 15,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 16,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 17,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 18,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 19,
            name: "Aviator Style",
            description: "Classic aviator design with polarized lenses",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        },
        {
            id: 20,
            name: "Cat-Eye Frames",
            description: "Fashionable cat-eye frames with UV protection",
            price: 20,
            imageDefault: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            imageHover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAO_0yEjddRNQf243G2m67PFyC4WRUPUfIHA&s"
        }
    ];

    // DOM elements
    const productGrid = document.getElementById('product-grid');
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    const orderModal = document.getElementById('order-modal');
    const closeModal = document.querySelector('.close-modal');
    const prescriptionForm = document.getElementById('prescription-form');
    const frameInput = document.getElementById('frame');
    const whatsappBtn = document.querySelector('.whatsapp-btn');

    // Display products
    function displayProducts() {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.imageDefault}" alt="${product.name}" class="product-image default">
                    <img src="${product.imageHover}" alt="${product.name}" class="product-image hover">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">${product.price} DH</div>
                    <button class="add-to-cart" data-id="${product.id}">Order Now</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Add event listeners to order buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                openOrderModal(product);
            });
        });
    }

    // Open order modal with selected product
    function openOrderModal(product) {
        frameInput.value = product.name;
        orderModal.style.display = 'flex';
    }

    // Close modal
    closeModal.addEventListener('click', function() {
        orderModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === orderModal) {
            orderModal.style.display = 'none';
        }
    });

    // Form submission
    prescriptionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const prescription = document.getElementById('prescription').value;
        const frame = frameInput.value;
        
        // Create WhatsApp message
        const message = `New Glasses Order:\n\nName: ${name}\nPhone: ${phone}\nFrame: ${frame}\nPrescription Details:\n${prescription}\n\nTotal: 20 DH`;
        const encodedMessage = encodeURIComponent(message);
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/+212669973483?text=${encodedMessage}`, '_blank');
        
        // Reset form and close modal
        prescriptionForm.reset();
        orderModal.style.display = 'none';
        
        // Update cart count
        const currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
    });

    // WhatsApp contact button
    whatsappBtn.addEventListener('click', function() {
        window.open('https://wa.me/+212669973483', '_blank');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize the page
    displayProducts();
});

// Translation dictionaries
const translations = {
    'en': {
        'title': 'AchrafVision',
        'tagline': 'See the world clearly',
        'home': 'Home',
        'glasses': 'Glasses',
        'about': 'About',
        'contact': 'Contact',
        'heroTitle': 'Premium Prescription Glasses',
        'heroText': 'Customized for your vision needs',
        'shopNow': 'Shop Now',
        'ourCollection': 'Our Collection',
        'aboutTitle': 'About AchrafVision',
        'aboutText': 'We specialize in high-quality prescription glasses with the latest lens technology...',
        'needHelp': 'Need Help?',
        'contactText': 'Contact our opticians for personalized advice',
        'whatsappBtn': 'Chat on WhatsApp',
        'orderTitle': 'Order Prescription Glasses',
        'fullName': 'Full Name',
        'phone': 'Phone Number',
        'prescription': 'Prescription Details',
        'selectedFrame': 'Selected Frame',
        'completeOrder': 'Complete Order (20 DH)',
        'quickLinks': 'Quick Links',
        'copyright': '© 2023 AchrafVision. All Rights Reserved.'
    },
    'fr': {
        'title': 'AchrafVision',
        'tagline': 'Voir le monde clairement',
        'home': 'Accueil',
        'glasses': 'Lunettes',
        'about': 'À propos',
        'contact': 'Contact',
        'heroTitle': 'Lunettes de prescription premium',
        'heroText': 'Personnalisées pour vos besoins visuels',
        'shopNow': 'Acheter maintenant',
        'ourCollection': 'Notre collection',
        'aboutTitle': 'À propos d\'AchrafVision',
        'aboutText': 'Nous nous spécialisons dans les lunettes de prescription de haute qualité avec la dernière technologie de lentilles...',
        'needHelp': 'Besoin d\'aide?',
        'contactText': 'Contactez nos opticiens pour des conseils personnalisés',
        'whatsappBtn': 'Discuter sur WhatsApp',
        'orderTitle': 'Commander des lunettes sur ordonnance',
        'fullName': 'Nom complet',
        'phone': 'Numéro de téléphone',
        'prescription': 'Détails de l\'ordonnance',
        'selectedFrame': 'Cadre sélectionné',
        'completeOrder': 'Compléter la commande (20 DH)',
        'quickLinks': 'Liens rapides',
        'copyright': '© 2023 AchrafVision. Tous droits réservés.'
    },
    'ar': {
        'title': 'اشرف فيجن',
        'tagline': 'انظر إلى العالم بوضوح',
        'home': 'الرئيسية',
        'glasses': 'النظارات',
        'about': 'من نحن',
        'contact': 'اتصل بنا',
        'heroTitle': 'نظارات طبية فاخرة',
        'heroText': 'مصممة خصيصًا لاحتياجاتك البصرية',
        'shopNow': 'تسوق الآن',
        'ourCollection': 'مجموعتنا',
        'aboutTitle': 'عن اشرف فيجن',
        'aboutText': 'نحن متخصصون في النظارات الطبية عالية الجودة بأحدث تقنيات العدسات...',
        'needHelp': 'تحتاج مساعدة؟',
        'contactText': 'اتصل بأخصائيي النظارات لدينا للحصول على مشورة شخصية',
        'whatsappBtn': 'محادثة عبر واتساب',
        'orderTitle': 'طلب نظارات طبية',
        'fullName': 'الاسم الكامل',
        'phone': 'رقم الهاتف',
        'prescription': 'تفاصيل الوصفة الطبية',
        'selectedFrame': 'الإطار المحدد',
        'completeOrder': 'إكمال الطلب (20 درهم)',
        'quickLinks': 'روابط سريعة',
        'copyright': '© 2023 اشرف فيجن. جميع الحقوق محفوظة.'
    }
};

// Translation function
function translatePage(lang) {
    // Update all translatable elements
    document.querySelector('.logo h1').textContent = translations[lang]['title'];
    document.querySelector('.logo p').textContent = translations[lang]['tagline'];
    
    // Update navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks[0].textContent = translations[lang]['home'];
    navLinks[1].textContent = translations[lang]['glasses'];
    navLinks[2].textContent = translations[lang]['about'];
    navLinks[3].textContent = translations[lang]['contact'];
    
    // Update hero section
    document.querySelector('.hero-content h2').textContent = translations[lang]['heroTitle'];
    document.querySelector('.hero-content p').textContent = translations[lang]['heroText'];
    document.querySelector('.hero-content .btn').textContent = translations[lang]['shopNow'];
    
    // Update products section
    document.querySelector('.products h2').textContent = translations[lang]['ourCollection'];
    
    // Update about section
    document.querySelector('.about h2').textContent = translations[lang]['aboutTitle'];
    document.querySelector('.about-content p').textContent = translations[lang]['aboutText'];
    
    // Update contact section
    document.querySelector('.contact h2').textContent = translations[lang]['needHelp'];
    document.querySelector('.contact p').textContent = translations[lang]['contactText'];
    document.querySelector('.whatsapp-btn').innerHTML = `<i class="fab fa-whatsapp"></i> ${translations[lang]['whatsappBtn']}`;
    
    // Update order modal
    document.querySelector('.modal-content h2').textContent = translations[lang]['orderTitle'];
    document.querySelector('label[for="name"]').textContent = translations[lang]['fullName'];
    document.querySelector('label[for="phone"]').textContent = translations[lang]['phone'];
    document.querySelector('label[for="prescription"]').textContent = translations[lang]['prescription'];
    document.querySelector('label[for="frame"]').textContent = translations[lang]['selectedFrame'];
    document.querySelector('.modal-content .btn').textContent = translations[lang]['completeOrder'];
    
    // Update footer
    document.querySelectorAll('.footer-section h3')[0].textContent = translations[lang]['quickLinks'];
    document.querySelector('.copyright p').textContent = translations[lang]['copyright'];
    
    // Set direction for Arabic
    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'right';
    } else {
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
    }
}

// Add event listeners for translation buttons
document.getElementById('translate-ar').addEventListener('click', () => translatePage('ar'));
document.getElementById('translate-fr').addEventListener('click', () => translatePage('fr'));

// Initialize with English
translatePage('en');

// Simple product translations
const productTranslations = {
    'en': {
      1: ["Classic Black Frames", "Timeless design with anti-reflective coating"],
      2: ["Modern Round Frames", "Lightweight titanium frames"],
      3: ["Aviator Style", "Classic aviator design"],
      4: ["Aviator Style", "Classic aviator design"],
      5: ["Aviator Style", "Classic aviator design"],
      6: ["Aviator Style", "Classic aviator design"],
      7: ["Aviator Style", "Classic aviator design"],
      8: ["Aviator Style", "Classic aviator design"],
      9: ["Aviator Style", "Classic aviator design"],
      10: ["Aviator Style", "Classic aviator design"],
      11: ["Aviator Style", "Classic aviator design"],
      12: ["Aviator Style", "Classic aviator design"],
      13: ["Aviator Style", "Classic aviator design"],
      14: ["Aviator Style", "Classic aviator design"],
      15: ["Aviator Style", "Classic aviator design"],
      16: ["Aviator Style", "Classic aviator design"],
      17: ["Aviator Style", "Classic aviator design"],
      18: ["Aviator Style", "Classic aviator design"],
      19: ["Aviator Style", "Classic aviator design"],
      20: ["Cat-Eye Frames", "Fashionable cat-eye frames"]
    },
    'fr': {
      1: ["Montures noires classiques", "Design intemporel anti-reflet"],
      2: ["Montures rondes modernes", "Montures en titane léger"],
      3: ["Style aviateur", "Design aviateur classique"],
      4: ["Style aviateur", "Design aviateur classique"],
      5: ["Style aviateur", "Design aviateur classique"],
      6: ["Style aviateur", "Design aviateur classique"],
      7: ["Style aviateur", "Design aviateur classique"],
      8: ["Style aviateur", "Design aviateur classique"],
      9: ["Style aviateur", "Design aviateur classique"],
      10: ["Style aviateur", "Design aviateur classique"],
      11: ["Style aviateur", "Design aviateur classique"],
      12: ["Style aviateur", "Design aviateur classique"],
      13: ["Style aviateur", "Design aviateur classique"],
      14: ["Style aviateur", "Design aviateur classique"],
      15: ["Style aviateur", "Design aviateur classique"],
      16: ["Style aviateur", "Design aviateur classique"],
      17: ["Style aviateur", "Design aviateur classique"],
      18: ["Style aviateur", "Design aviateur classique"],
      19: ["Style aviateur", "Design aviateur classique"],
      20: ["Montures œil de chat", "Style élégant œil de chat"]
    },
    'ar': {
      1: ["إطارات سوداء كلاسيكية", "تصميم كلاسيكي مضاد للانعكاس"],
      2: ["إطارات مستديرة عصرية", "إطارات تيتانيوم خفيفة الوزن"],
      3: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      4: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      5: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      6: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      7: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      8: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      9: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      10: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      11: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      12: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      13: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      14: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      15: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      16: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      17: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      18: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      19: ["ستايل الطيار", "تصميم طيار كلاسيكي"],
      20: ["إطارات عين القطة", "إطارات عين القطة الأنيقة"]
    }
  };
  
  // Simple language switcher
  function changeLanguage(lang) {
    // Update product names and descriptions
    document.querySelectorAll('.product-card').forEach(card => {
      const id = parseInt(card.querySelector('button').getAttribute('data-id'));
      const [name, desc] = productTranslations[lang][id];
      
      card.querySelector('h3').textContent = name;
      card.querySelector('p').textContent = desc;
      card.querySelector('.add-to-cart').textContent = lang === 'en' ? 'Order Now' : 
                                                     lang === 'fr' ? 'Commander' : 'اطلب الآن';
      
      // Update image alt texts
      card.querySelectorAll('.product-image').forEach(img => {
        img.alt = name;
      });
    });
  
    // Set RTL for Arabic
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
  }