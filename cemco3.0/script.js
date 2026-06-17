// Product Category Menu Toggle
function toggleProductMenu() {
  const menu = document.getElementById('productCategoryMenu');
  menu.classList.toggle('active');
  
  // Close menu when clicking outside
  setTimeout(() => {
    document.addEventListener('click', closeProductMenuOnClickOutside);
  }, 0);
}

function closeProductMenuOnClickOutside(e) {
  const menu = document.getElementById('productCategoryMenu');
  const button = document.querySelector('.cta-secondary');
  
  if (!menu.contains(e.target) && !button.contains(e.target)) {
    menu.classList.remove('active');
    document.removeEventListener('click', closeProductMenuOnClickOutside);
  }
}

function scrollToCategory(category) {
  const menu = document.getElementById('productCategoryMenu');
  menu.classList.remove('active');
  document.removeEventListener('click', closeProductMenuOnClickOutside);
  
  // Scroll to the appropriate category section
  setTimeout(() => {
    const categoryTitles = document.querySelectorAll('.category-title');
    let targetElement;
    
    if (category === 'water') {
      targetElement = categoryTitles[0]; // Water Pumping Systems
    } else if (category === 'air') {
      targetElement = categoryTitles[1]; // Air & Compression Solutions
    }
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 300);
}

// Close menu when pressing Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const menu = document.getElementById('productCategoryMenu');
    menu.classList.remove('active');
  }
});

// Product Database with Complete Information
const productDatabase = {
  'pump-centrifugal': {
    title: 'Industrial Centrifugal Pumps',
    badge: 'High Capacity',
    image: 'pump_big2.jpg.jpeg',
    description: 'Horizontal and vertical centrifugal pump systems for water circulation, cooling, and industrial processes. Available in cast iron, ductile iron, and stainless steel construction.',
    specs: [
      'Capacity: 5 - 500 m³/hr',
      'Head: 5 - 150 m',
      'Temperature range: -10 to 80°C',
      'Certifications: ISO, CE approved',
      'Materials: Cast iron, Ductile iron, Stainless steel',
      'Suction & Discharge ports: Standard or Custom',
      'Coupling: Flexible, Rigid, or Direct drive'
    ],
    extra: 'These pumps are ideal for water supply systems, irrigation, HVAC cooling loops, and general industrial fluid circulation. Available with both foot-mounted and flange-mounted configurations. Can be customized for specific flow and head requirements.'
  },
  'pump-fire': {
    title: 'Fire Fighting Pump Systems',
    badge: 'Certified UL/NFPA',
    image: 'Fire Fighting Pump.webp',
    description: 'FM and NFPA approved fire pump packages with reliable diesel or electric drive options. Complete systems with controllers and accessories for emergency water supply.',
    specs: [
      'Capacity: 50 - 500 GPM',
      'Pressure: 100 - 250 PSI',
      'Power options: Diesel, Electric, Gasoline',
      'FM Approved and UL Listed',
      'NFPA 20 Compliant',
      'Full documentation package included',
      'Multi-stage pump configurations available'
    ],
    extra: 'These are complete fire fighting sets with integrated diesel or electric engines, fire pump controllers, and all necessary fittings. They meet all international fire protection standards and come with comprehensive documentation. Perfect for industrial plants, commercial buildings, and municipal applications.'
  },
  'pump-submersible': {
    title: 'Submersible Borehole Pumps',
    badge: 'Self-Cleaning',
    image: '227.jpg.jpeg',
    description: 'Deep well submersible pumps manufactured from high-grade stainless steel. Designed for efficient groundwater extraction with minimal maintenance requirements.',
    specs: [
      'Capacity: 10 - 150 m³/hr',
      'Depth rating: 50 - 500 m',
      'Material: Stainless steel 304/316',
      'Energy efficient hydraulic design',
      'Suitable for agricultural & municipal water supply',
      'Low noise operation',
      'Minimal sediment disturbance'
    ],
    extra: 'These submersible pumps are designed for long-term reliability in deep borehole applications. The stainless steel construction ensures corrosion resistance and longevity. They feature optimized impeller designs for maximum efficiency at various depths, making them ideal for agricultural irrigation and municipal groundwater extraction.'
  },
  'cooling-tower': {
    title: 'Cooling Tower Systems',
    badge: 'Energy Efficient',
    image: 'cooling-tower-chiller-water-tower-png-favpng-6zg51ksPC7ASLMgENzpuFt8JB.png',
    description: 'Cross-flow and counter-flow cooling towers with fiberglass reinforced polyester construction. Designed for thermal management in power plants and HVAC systems.',
    specs: [
      'Capacity: 50 - 5000 TR',
      'Material: FRP, weatherproof design',
      'Operating temperature: -10 to 60°C',
      'Low noise, energy-saving fan design',
      'Easy maintenance and durability',
      'Modular construction for scaling',
      'Excellent heat dissipation efficiency'
    ],
    extra: 'Available in both cross-flow and counter-flow designs to suit different installation requirements. The FRP construction provides excellent corrosion resistance and minimal maintenance. These towers are used in power generation, petrochemical plants, and large HVAC systems for efficient thermal management.'
  },
  'compressor-screw': {
    title: 'Screw Compressors',
    badge: 'Variable Speed',
    image: 'WhatsApp Image 2026-06-17 at 4.28.22 PM.jpeg',
    description: 'Oil-injected rotary screw compressors with advanced variable frequency drive technology. Ideal for industrial applications requiring precise pressure control.',
    specs: [
      'Displacement: 15 - 250 m³/min',
      'Pressure: 7 - 13 bar',
      'Power range: 5.5 - 250 kW',
      'Integrated cooler and dryer options',
      'VFD for energy optimization',
      'Noise level: 70-80 dB',
      'Low maintenance with extended service intervals'
    ],
    extra: 'These screw compressors feature advanced variable frequency drives for energy-efficient operation that adjusts to actual demand. Perfect for manufacturing, food processing, and pharmaceutical industries. Integrated cooling and drying options available for critical air quality applications.'
  },
  'blower-roots': {
    title: 'Pressure Roots Blowers',
    badge: 'Low Noise',
    image: 'blower-package-515423.jpg.jpeg',
    description: 'High-efficiency positive displacement blowers for waste treatment, powder conveying, and pneumatic applications. Minimal vibration design.',
    specs: [
      'Air flow: 50 - 2000 m³/min',
      'Pressure: 0.3 - 0.8 bar',
      'Noise level: 75 - 85 dB',
      'Various drive options available',
      'High efficiency with minimal pulsation',
      'Compact and lightweight design',
      'Minimal maintenance requirements'
    ],
    extra: 'Designed for aeration in water treatment plants, powder and material conveying systems, and pneumatic applications. The optimized rotor design minimizes pulsation and vibration, resulting in smooth, quiet operation. Available with belt drive, direct drive, or gearbox coupling options.'
  },
  'diffuser-bubble': {
    title: 'Fine Bubble Diffusers',
    badge: 'High Efficiency',
    image: 'CombiNorm.jpg.jpeg',
    description: 'Precision-engineered membrane and tube diffusers for wastewater aeration. Designed for consistent performance in municipal and industrial treatment plants.',
    specs: [
      'Bubble size: 1-3 mm diameter',
      'Oxygen transfer efficiency: 20-30%',
      'Material: EPDM, high-grade silicone',
      'Modular installation system',
      'Self-cleaning capabilities',
      'Uniform bubble distribution',
      'Minimal clogging risk'
    ],
    extra: 'These diffusers are essential components in wastewater treatment, aquaculture, and industrial aeration systems. The fine bubble design ensures maximum oxygen transfer efficiency. Available as disc type or tube type configurations to suit various basin designs and treatment requirements.'
  },
  'etp-wtp': {
    title: 'ETP & WTP Systems',
    badge: 'Complete Package',
    image: '20110810105107.jpg.jpeg',
    description: 'Turnkey effluent and wastewater treatment packages. Integrated systems combining pumps, blowers, and auxiliary equipment for environmental compliance.',
    specs: [
      'Capacity: Scalable 100 - 10000 m³/day',
      'Treatment types: Physical, chemical, biological',
      'Control systems: Automated PLC/SCADA',
      'Compliance: ISO, WPC, municipal standards',
      'Customizable to specific effluent characteristics',
      'Complete testing and commissioning included',
      'Comprehensive operation & maintenance manual'
    ],
    extra: 'Complete turnkey solutions for environmental compliance. Includes all necessary treatment stages, monitoring systems, and automation controls. Designed and tested for your specific effluent composition. We provide installation support, staff training, and ongoing technical assistance.'
  }
};

// Modal Functions
function openProductModal(productId) {
  const product = productDatabase[productId];
  if (!product) return;

  // Populate modal with product data
  document.getElementById('modalProductImage').src = product.image;
  document.getElementById('modalProductTitle').textContent = product.title;
  document.getElementById('modalProductBadge').textContent = product.badge;
  document.getElementById('modalProductDescription').textContent = product.description;

  // Populate specs
  const specsList = document.getElementById('modalProductSpecs');
  specsList.innerHTML = '';
  product.specs.forEach(spec => {
    const li = document.createElement('li');
    li.textContent = spec;
    specsList.appendChild(li);
  });

  // Populate extra info
  document.getElementById('modalProductExtra').innerHTML = `<p>${product.extra}</p>`;

  // Show modal with animation
  const modal = document.getElementById('productModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Smooth scroll to modal
  setTimeout(() => {
    modal.scrollTop = 0;
  }, 50);
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function requestQuote() {
  // Get the currently open product
  const productTitle = document.getElementById('modalProductTitle').textContent;
  const productField = document.getElementById('product');
  
  // Set the product in the form
  productField.value = productTitle;

  // Close modal
  closeProductModal();

  // Scroll to contact section
  const contactSection = document.getElementById('contact');
  setTimeout(() => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    productField.focus();
  }, 300);
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-overlay')) {
        closeProductModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProductModal();
      }
    });
  }
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav')) {
      navMenu.classList.remove('active');
    }
  });
}

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards for entrance animation
document.querySelectorAll('.product-item, .solution-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(15px)';
  el.style.transition = 'all 0.5s ease-out';
  observer.observe(el);
});

// Form submission handler
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const company = document.getElementById('company').value;
    const contactPerson = document.getElementById('contact-person').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;
    const message = document.getElementById('message').value;

    // Create email content
    const emailContent = `
Company: ${company}
Contact Person: ${contactPerson}
Email: ${email}
Phone: ${phone}
Product Interest: ${product}

Requirements:
${message}
    `.trim();

    // Open email client
    const mailtoLink = `mailto:faruk.mtech@yahoo.com?subject=Quote Request from ${encodeURIComponent(company)}&body=${encodeURIComponent(emailContent)}`;
    window.location.href = mailtoLink;

    // Success feedback
    const submitBtn = quoteForm.querySelector('.submit-button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Message Sent ✓';
    submitBtn.style.backgroundColor = '#10b981';

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.backgroundColor = '';
      quoteForm.reset();
    }, 3000);
  });
}

// Simple scroll indicator
const handleScroll = () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.12)';
  } else {
    header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
  }
};

window.addEventListener('scroll', handleScroll, { passive: true });

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable animations for users who prefer reduced motion
  document.documentElement.style.setProperty('--transition', 'none');
}

// Load partner logo URLs from backend file `logourls.txt` and wire links
function loadPartnerLogos() {
  // Try fetching backend file first
  fetch('logourls.txt')
    .then(res => {
      if (!res.ok) throw new Error('logourls.txt not found');
      return res.text();
    })
    .then(text => {
      const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith('#'));
      applyUrlsFromList(lines);
    })
    .catch(err => {
      console.warn('Could not fetch logourls.txt, falling back to inline partnerUrls if present.', err);
      if (Array.isArray(window.partnerUrls) && window.partnerUrls.length) {
        applyUrlsFromList(window.partnerUrls);
      } else {
        for (let i = 1; i <= 6; i++) {
          const anchor = document.getElementById(`logo-link-${i}`);
          if (anchor) anchor.style.pointerEvents = 'none';
        }
      }
    });
}

function applyUrlsFromList(list) {
  for (let i = 1; i <= 6; i++) {
    const anchor = document.getElementById(`logo-link-${i}`);
    if (!anchor) continue;
    const raw = (list[i - 1] || '').toString();
    const m = raw.match(/https?:\/\/[^\s]+/i);
    const url = m ? m[0] : '';
    if (url) {
      anchor.href = url;
      anchor.removeAttribute('target');
      anchor.removeAttribute('rel');
      anchor.style.cursor = 'pointer';
      anchor.title = url;
    } else {
      anchor.removeAttribute('href');
      anchor.style.pointerEvents = 'none';
      anchor.style.cursor = 'default';
    }
  }
}

document.addEventListener('DOMContentLoaded', loadPartnerLogos);
