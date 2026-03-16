/**
 * ASHISH UPADHYAY - PREMIUM PORTFOLIO
 * Advanced JavaScript with Lando Norris-inspired interactions
 */

// =====================================
// CONFIGURATION & CONSTANTS
// =====================================

const CONFIG = {
  iftttSayHiUrl: 'https://maker.ifttt.com/trigger/Heyashishbutton/json/with/key/ch90Ck4rGenabtIklPb-Tr6Qsl4KDngno7Lr3J1rPD_',
  iftttResumeUrl: 'https://maker.ifttt.com/trigger/ResumeDownloaded/json/with/key/ch90Ck4rGenabtIklPb-Tr6Qsl4KDngno7Lr3J1rPD_',
  refLat: 37.389705,
  refLng: -122.081707,
  ipInfoUrl: 'https://ipinfo.io/json',
  animationDuration: 0.75,
  staggerDelay: 0.1,
  easeSmooth: 'cubic-bezier(0.65, 0.05, 0, 1)',
};

// Project Data
const PROJECTS = [
  // === FLAGSHIP PROJECTS (with videos) ===
  {
    id: 'gesture-arm',
    title: 'Gesture Mimicking Robotic Arm',
    description: 'A five-finger bionic hand that mirrors your movements from anywhere on Earth. MediaPipe tracks 21 hand landmarks at 60 FPS, AWS IoT Core relays commands globally via MQTT, and an ESP32 orchestrates five servos with sub-200ms latency. Because telepresence should feel like telekinesis.',
    categories: ['hardware', 'firmware', 'cloud', 'cv'],
    video: 'https://youtube.com/embed/dBysV4OpSVE',
    github: 'https://github.com/itsashishupadhyay/VisionControlledBionicHand',
    tech: ['MediaPipe', 'ESP32', 'AWS IoT', 'FreeRTOS', 'PCA9685']
  },
  {
    id: 'muscular-mapping',
    title: 'Muscular Contraction Mapping',
    description: 'Hunting for the electromagnetic fingerprints of finger movements. EMG sensors capture muscular micro-signatures while computer vision validates ground truth - building the dataset neuroscientists need to reverse-engineer the hand-brain interface.',
    categories: ['hardware', 'firmware', 'cv'],
    video: 'https://youtube.com/embed/xfgrLSBLTG0',
    tech: ['EMG Sensors', 'OpenCV', 'Signal Processing', 'NumPy']
  },
  {
    id: 'air-drums',
    title: 'Air Drums',
    description: 'Digital drumsticks that turn thin air into percussion. Accelerometer data seeds Karplus-Strong string synthesis, transforming random motion into surprisingly organic drum hits. Physics-based audio synthesis triggered by gravity and human imprecision.',
    categories: ['hardware', 'firmware'],
    video: 'https://www.youtube.com/embed/F8Mc63sltNw',
    tech: ['Accelerometer', 'Karplus-Strong', 'Audio DSP', 'Arduino']
  },
  {
    id: 'alexa-dispenser',
    title: 'Alexa Medication Dispenser',
    description: 'Voice-controlled pill dispensing that could save lives. Alexa Skill Kit handles natural language, Lambda processes intent, S3 logs compliance, and an ESP32 actuates the mechanical dispenser. AWS IoT ties it together with hospital-grade reliability.',
    categories: ['hardware', 'firmware', 'cloud'],
    video: 'https://youtube.com/embed/NyXsBIeEHoM',
    tech: ['Alexa Skills', 'AWS Lambda', 'AWS S3', 'IoT Core', 'ESP32']
  },
  {
    id: 'nyc-subway',
    title: 'NYC Subway Tracker',
    description: 'Answering NYC\'s most-asked question: "When is the next train?" A custom GTFS parser digests MTA\'s real-time feed, ESP32 drives a retro display, and AWS IoT keeps it synced. Solving a 3-million-daily-query problem, one living room at a time.',
    categories: ['hardware', 'cloud'],
    video: 'https://youtube.com/embed/iNQItBumND8',
    github: 'https://github.com/itsashishupadhyay/Next-Train-Display',
    tech: ['GTFS Parser', 'ESP32', 'AWS IoT', 'MTA Feed']
  },
  // === RESEARCH & DEEP TECH ===
  {
    id: 'neuromod',
    title: 'Wireless Neuromodulation Implant',
    description: 'Designed the wireless power transfer system for the first fully implantable bidirectional vagus nerve stimulator in mice. Engineered a four-coil resonant inductive coupling topology, optimized coil geometries through COMSOL multiphysics simulations, and achieved efficient power delivery across biological tissue. Sub-millimeter flex PCBs meet biocompatible encapsulation - enabling groundbreaking neuroscience research.',
    categories: ['hardware'],
    image: '/img/project_cards/WirelessNeuromodulationImplant.jpg',
    tech: ['4-Coil WPT', 'Flex PCB', 'Bioelectronics', 'COMSOL']
  },
  {
    id: 'ev-charging',
    title: 'Wireless EV Charging System',
    description: 'IEEE-published quasi-dynamic wireless charging achieving 95.1% efficiency across a 25mm air gap. Class E inverter topology, intelligent charge activation below 80% SoC, and real-time telemetry via Blynk. The future of EV charging is cordless.',
    categories: ['hardware', 'cloud'],
    github: 'https://github.com/itsashishupadhyay/Wireless_Charging-',
    image: '/img/project_cards/Wireless EV Charging System.png',
    tech: ['Class E Inverter', 'BQ27441', 'ThingSpeak', 'ESP8266']
  },
  {
    id: 'smart-grid',
    title: 'Stochastic Grid Market Clearing',
    description: 'Optimizing electricity markets when the sun and wind refuse to be predictable. Two-stage stochastic programming commits generators day-ahead, then adjusts in real-time as renewables reveal their hand. GAMS + CPLEX solving the economics of a greener grid.',
    categories: ['cloud'],
    github: 'https://github.com/itsashishupadhyay/Smart_Grid',
    image: '/img/project_cards/Stochastic Grid Market Clearing.webp',
    tech: ['GAMS', 'CPLEX', 'DC-OPF', 'Stochastic MIP']
  },
  // === COMPUTER VISION ===
  {
    id: 'intruder-alert',
    title: 'Guardian Eye Security System',
    description: 'AI-powered surveillance that actually works. MobileNet-SSD v3 runs inference on Raspberry Pi, detecting 80+ object classes at configurable confidence thresholds. When a person appears, SendGrid fires an email with photographic evidence. Edge AI meets home security.',
    categories: ['cv', 'cloud'],
    github: 'https://github.com/itsashishupadhyay/Intruder-Alert-System',
    image: '/img/project_cards/img1.png',
    tech: ['TensorFlow', 'MobileNet-SSD', 'SendGrid', 'Raspberry Pi']
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors CV',
    description: 'Defeating humans at their own game using nothing but math and a webcam. Convex hull analysis counts fingers in real-time, a 10-frame stabilization buffer filters noise, and an unbeatable (well, random) CPU opponent awaits. Gesture recognition that ships.',
    categories: ['cv'],
    github: 'https://github.com/itsashishupadhyay/OpenCv_RockPaperScissor',
    image: '/img/project_cards/img3.png',
    tech: ['OpenCV', 'Convex Hull', 'scikit-learn', 'Tkinter']
  },
  {
    id: 'yolo-detection',
    title: 'Real-Time Object Detection (C++)',
    description: 'Production-grade YOLO inference in pure C++ - no Python runtime required. Supports YOLOv5, v8, and the bleeding-edge YOLO26 with NMS-free architecture for 43% faster CPU inference. Built for embedded systems, spacecraft, and anywhere Python is too heavy.',
    categories: ['cv'],
    github: 'https://github.com/itsashishupadhyay/object_detection_opencv_cpp',
    image: '/img/project_cards/img4.png',
    tech: ['C++17', 'OpenCV DNN', 'YOLO26', 'ONNX', 'CMake']
  },
  // === COMPUTER ARCHITECTURE & SYSTEMS ===
  {
    id: 'mips-pipeline',
    title: 'MIPS Pipeline Processor',
    description: 'A cycle-accurate 5-stage MIPS processor simulator with all the hazards your CPU architecture professor warned you about. Data forwarding, pipeline stalling, and a 2-level adaptive branch predictor with pattern history tables. IPC metrics included for bragging rights.',
    categories: ['firmware'],
    github: 'https://github.com/itsashishupadhyay/MIPS_Pipeline',
    image: '/img/project_cards/MIPS Pipeline Processor.jpg',
    tech: ['C++', 'RTL Modeling', 'Branch Prediction', 'Hazard Detection']
  },
  {
    id: 'aes-crypto',
    title: 'AES File Encryption Tool',
    description: 'Military-grade file encryption via OpenSSL\'s EVP API. Supports 128/192/256-bit keys, CBC mode, and cryptographically random IV generation. Buffered 4KB chunk processing handles files of any size. Your secrets, mathematically secured.',
    categories: ['firmware'],
    github: 'https://github.com/itsashishupadhyay/encrypt_decrypt_AES',
    image: '/img/project_cards/AES File Encryption Tool.jpg',
    tech: ['C++17', 'OpenSSL', 'AES-CBC', 'CMake']
  },
  {
    id: 'anagram-hunter',
    title: 'Anagram Chain Hunter',
    description: 'Finding the longest chains of anagrams where each word contains all letters of its predecessor plus one more. Recursive backtracking explores branching paths while efficiently pruning dead ends. Surprisingly addictive algorithmic wordplay.',
    categories: ['firmware'],
    github: 'https://github.com/itsashishupadhyay/Anagrams_Derived',
    image: '/img/project_cards/Recursive.jpg',
    tech: ['C++', 'Recursion', 'Backtracking', 'STL']
  },
  // === EMBEDDED AUDIO ===
  {
    id: 'esp32-audio',
    title: 'ESP32 Wireless Audio Streaming',
    description: 'CD-quality audio over Bluetooth Classic, no drivers required. I2S captures 44.1kHz/16-bit PCM, FreeRTOS manages real-time DMA buffering, and a Python receiver writes WAV files cross-platform. When you need a wireless mic but refuse to buy one.',
    categories: ['hardware', 'firmware'],
    github: 'https://github.com/itsashishupadhyay/ESP32-Wireless_Audio',
    image: '/img/project_cards/ESP32 Wireless Audio Streaming.png',
    tech: ['ESP32', 'I2S', 'FreeRTOS', 'Bluetooth SPP', 'Python']
  }
];

// Timeline Data - Futuristic Career Journey
const TIMELINE = [
  {
    id: 1,
    company: 'Meta',
    companyShort: 'META',
    location: 'Sunnyvale, CA',
    title: 'Electrical Engineer - Power Team',
    date: 'Nov 2025 - Present',
    duration: '5 mos',
    category: 'Power Systems',
    categoryIcon: 'bolt',
    description: 'Promoted to the Power Team to make sure AR smartglasses don\'t turn into tiny face heaters. Day-to-day involves milliwatt hunting across SOCs, sensors, and memory - basically speed-dating with silicon to understand their power personalities.\n\nAlso moonlighting as a PCB reviewer, firmware tweaker, compliance wrangler, and factory ally. The goal: ship hardware that\'s efficient, manufacturable, and won\'t melt anyone\'s face.',
    tags: ['Power optimization', 'Characterization', 'PCB review', 'Thermal design', 'EE compliance', 'Firmware'],
    logoType: 'meta'
  },
  {
    id: 2,
    company: 'Meta',
    companyShort: 'META',
    location: 'Sunnyvale, CA',
    title: 'Product Validation Engineer',
    date: 'Aug 2023 - Dec 2025',
    duration: '2 yrs 5 mos',
    category: 'Validation',
    categoryIcon: 'check-double',
    description: 'The person who stress-tested wearables before the world got to wear them. Designed test plans, built automation frameworks, and ran products through every condition short of a volcano - all to catch what humans and datasheets miss.\n\nCoordinated with EE, firmware, and manufacturing teams across time zones, and kept the lab gear from turning into an expensive dust collection. If a wearable shipped and worked, this role had something to do it.',
    tags: ['System validation', 'Test automation', 'Performance characterization', 'Lab infra', 'XFn collaboration'],
    logoType: 'meta'
  },
  {
    id: 3,
    company: 'L&T Technology Services',
    companyShort: 'LTTS',
    location: 'United States',
    title: 'Sr. Electrical Engineer',
    date: 'Aug 2022 - Oct 2023',
    duration: '1 yr 3 mos',
    category: 'HW Validation',
    categoryIcon: 'microchip',
    description: 'Built hardware validation procedures for SOCs, MCUs, DDR, Flash, and peripherals for consumer AR/VR - essentially teaching silicon to prove it\'s worthy before it ships in a product.\n\nWrote firmware, automated benchtop equipment (oscilloscopes, logic analyzers, multimeters), and generated test reports for 300,000+ devices. Signed off Ok2Fab for the entire product line - no pressure.',
    tags: ['SOC validation', 'Firmware', 'Test automation', 'DDR/Flash', 'Ok2Fab'],
    logoType: 'ltts'
  },
  {
    id: 4,
    company: 'Perigon Health 360',
    companyShort: 'PH360',
    location: 'Plymouth, MI',
    title: 'Electrical Design Engineer',
    date: 'Oct 2020 - Nov 2022',
    duration: '2 yrs 2 mos',
    category: 'Full-stack EE',
    categoryIcon: 'layer-group',
    description: 'Full-stack electrical engineer before it was cool - schematics, PCB layouts, BOM analysis, RTOS firmware, AWS IoT, Alexa integration, and computer vision research, all on the same badge. Designed to UL and FCC standards because shipping something that fails compliance is just expensive sadness.\n\nBuilt production test jigs for multi-PCB setups and handled signal filtering in both hardware and firmware - whatever it took to make the product actually work, not just pass a simulation.',
    tags: ['PCB design', 'RTOS', 'AWS IoT', 'FCC/UL', 'Signal processing', 'JTAG/SWD'],
    logoType: 'perigon'
  },
  {
    id: 5,
    company: 'New York University',
    companyShort: 'NYU',
    location: 'New York',
    title: 'Research Assistant - Power Lab & Medical Robotics Lab',
    date: 'Sep 2018 - Sep 2020',
    duration: '2 yrs 1 mo',
    category: 'Research',
    categoryIcon: 'flask',
    description: 'Designed wireless sensor controllers for two labs simultaneously - power systems and medical robotics. Built a quasi-dynamic wireless EV charging system hitting ~85% efficiency, and developed a NSF Rapid-funded wearable for COVID-19 detection. Not a slow two years.\n\nWrote firmware in C, Python, and MATLAB; designed multilayer and flex PCBs; ran DSP and EMG signal filtering algorithms; and fed sensor data into ML pipelines for decision-making. Also debugged everything with whatever tool was closest.',
    tags: ['Wireless charging', 'IoT', 'DSP / EMG', 'Flex PCB', 'ML pipelines', 'C / Python / MATLAB'],
    logoType: 'nyu'
  },
  {
    id: 6,
    company: 'Northwell Health',
    companyShort: 'NORTHWELL',
    location: 'Manhasset, NY',
    title: 'Research Assistant - Bioelectronics & Biosensing',
    date: 'Jun 2019 - Aug 2020',
    duration: '1 yr 3 mos',
    category: 'Implantables',
    categoryIcon: 'heartbeat',
    description: 'Designed implantable neuromodulation devices - the kind that go inside a person and still need to work perfectly. Built wireless power transfer and data telemetry systems, ran multiphysics coil simulations, and optimized PCB real-estate to power implants inside a living host.\n\nRan benchtop and in vivo experiments, wrote scripts to extract live animal data, and presented findings to research leadership. The stakes were high, the tolerances were tight, and the oscilloscope was always on.',
    tags: ['Implantable devices', 'Wireless power transfer', 'Neuromodulation', 'Multiphysics simulation', 'In vivo experiments'],
    logoType: 'northwell'
  }
];

// Gallery Images
const GALLERY_IMAGES = [
  { src: '/doc/Gal1 (3).jpg', caption: 'PCB Design - Multi-layer board layout' },
  { src: '/doc/Gal1 (2).png', caption: 'Production-ready PCB with V-score panelization' },
  { src: '/doc/Gal1 (1).png', caption: 'Medical device PCB - Medesto dispenser' },
  { src: '/doc/Gal1 (1).jpg', caption: 'Hardware prototyping and testing' },
  { src: '/doc/Gal1 (1).jpeg', caption: 'Circuit board assembly' },
  { src: '/doc/Ga1.png', caption: 'Custom PCB design' },
  { src: '/doc/ga1_1 (1).png', caption: 'Medesto medical adherence device' },
  { src: '/doc/ga1_1 (3).png', caption: 'Production PCB layout' },
  { src: '/doc/wa (3).jpeg', caption: 'BioTracker wearable sensor' },
  { src: '/doc/wa (5).jpeg', caption: 'Prototype testing and validation' },
  { src: '/doc/IMG2.png', caption: 'Lab setup and equipment' },
  { src: '/doc/img3.png', caption: 'Hardware bring-up process' }
];

// Fun Distance Comparisons
const getDistanceComparison = (distanceKm) => {
  const comparisons = [
    {
      calc: () => (distanceKm * 1000 / 299792458).toFixed(6),
      text: (val) => `${val} seconds for light to travel between us`
    },
    {
      calc: () => (distanceKm / 85).toFixed(1),
      text: (val) => `${val} hours if you drove a Tesla Model 3 on Autopilot`
    },
    {
      calc: () => (distanceKm / 900).toFixed(2),
      text: (val) => `${val} hours on a Boeing 787 Dreamliner at cruise speed`
    },
    {
      calc: () => (distanceKm / 27600).toFixed(4),
      text: (val) => `${val} hours if you hitched a ride on the ISS`
    },
    {
      calc: () => (distanceKm * 1000000000 / 20).toFixed(0),
      text: (val) => `${Number(val).toLocaleString()} Meta Ray-Ban smart glasses SoC transistors laid end to end`
    },
    {
      calc: () => (distanceKm * 1000000 / 400).toFixed(0),
      text: (val) => `${Number(val).toLocaleString()} standard PCB traces (0.4mm wide) side by side`
    }
  ];
  const comparison = comparisons[Math.floor(Math.random() * comparisons.length)];
  const value = comparison.calc();
  return comparison.text(value);
};

// =====================================
// GLOBAL VARIABLES
// =====================================

let lenis = null;
let currentMap = null;
let gsapContext = null;

// =====================================
// INITIALIZATION
// =====================================

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initLenis();
  initNavigation();
  initMobileMenu();
  initThemeToggle();
  initHeroCanvas();
  initHeroAnimations();
  initScrollAnimations();
  // initConvergenceAnimation(); // Moved to window load for proper timing
  initImpactCounters();
  initProjects();
  initTimeline();
  initGallery();
  initLocationTracking();
  initSayHi();
  initContactForm();
  initResume();
  initRoleRotation();
  initLiquidDistortionEffect();
});

// Initialize convergence animation after everything is fully loaded
window.addEventListener('load', () => {
  console.log('🎬 Window fully loaded, initializing convergence animation...');

  // Wait a bit for Lenis to settle and ScrollTrigger to be ready
  setTimeout(() => {
    initConvergenceAnimation();

    // Refresh ScrollTrigger after a short delay to recalculate positions
    setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') {
        console.log('🔄 Refreshing ScrollTrigger...');
        ScrollTrigger.refresh();
      }
    }, 100);
  }, 500);
});

// =====================================
// PRELOADER
// =====================================

function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    // Allow animations to complete
    setTimeout(() => {
      preloader.classList.add('hidden');
      // Enable body scroll
      document.body.style.overflow = '';
      // Remove preloader from DOM after transition
      setTimeout(() => {
        preloader.remove();
        // Trigger hero animations after preloader
        triggerHeroEntrance();
      }, 600);
    }, 2200);
  });

  // Prevent scroll during preloader
  document.body.style.overflow = 'hidden';
}

function triggerHeroEntrance() {
  // Additional entrance animations can be triggered here
  if (typeof gsap !== 'undefined') {
    gsap.to('.hero-content', {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
}

// =====================================
// LENIS SMOOTH SCROLL
// =====================================

function initLenis() {
  if (typeof Lenis === 'undefined') return;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Connect Lenis to GSAP ScrollTrigger
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } else {
    // Fallback animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Handle anchor links with smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        lenis.scrollTo(target, {
          offset: -80,
          duration: 1.5
        });
        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });
}

// =====================================
// NAVIGATION
// =====================================

function initNavigation() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  let lastScroll = 0;
  let ticking = false;

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for background
    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();

    lastScroll = currentScroll;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// =====================================
// MOBILE MENU
// =====================================

function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    // Toggle body scroll
    if (mobileMenu.classList.contains('active')) {
      if (lenis) lenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      if (lenis) lenis.start();
      document.body.style.overflow = '';
    }
  });

  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function closeMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle) menuToggle.classList.remove('active');
  if (mobileMenu) mobileMenu.classList.remove('active');
  if (lenis) lenis.start();
  document.body.style.overflow = '';
}

// =====================================
// THEME TOGGLE
// =====================================

function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Check for saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (!systemPrefersDark) {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Reinitialize map with new theme if needed
    if (currentMap) {
      // Map will use the same style regardless of theme
    }
  });
}

// =====================================
// HERO CANVAS ANIMATION
// =====================================

function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let mouseX = 0;
  let mouseY = 0;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.baseOpacity = this.opacity;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around edges
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;

      // React to mouse
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        this.opacity = this.baseOpacity + (1 - distance / 150) * 0.3;
      } else {
        this.opacity = this.baseOpacity;
      }
    }

    draw() {
      ctx.fillStyle = `rgba(61, 209, 231, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function createParticles() {
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const opacity = 0.15 * (1 - distance / 120);
          ctx.strokeStyle = `rgba(61, 209, 231, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  animate();

  // Cleanup
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationId);
  });
}

// =====================================
// HERO ANIMATIONS
// =====================================

function initHeroAnimations() {
  if (typeof gsap === 'undefined') return;

  // The CSS handles most hero animations
  // This adds any additional GSAP enhancements
}

// =====================================
// WORK SECTION SCROLL REVEAL ANIMATION
// =====================================

function initWorkRevealAnimation() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.error('GSAP or ScrollTrigger not loaded');
    return;
  }

  const revealContainer = document.getElementById('work-reveal');
  const revealForeground = document.getElementById('work-reveal-fg');
  const revealBackground = document.querySelector('.featured-work-reveal-bg');

  if (!revealContainer || !revealForeground || !revealBackground) {
    console.error('Reveal elements not found');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  console.log('Initializing work reveal animation');

  // Make sure elements are visible initially
  revealBackground.style.opacity = '1';
  revealForeground.style.opacity = '1';

  // Create the scroll-triggered reveal animation
  const revealTl = gsap.timeline({
    scrollTrigger: {
      trigger: revealContainer,
      start: 'top top',
      end: '+=150%',  // Longer scroll for smoother effect
      pin: true,
      scrub: 1,  // Smooth scrubbing
      anticipatePin: 1,
      markers: false,  // Set to true for debugging
      onEnter: () => {
        console.log('Reveal animation entered');
        revealForeground.classList.add('revealing');
      },
      onLeaveBack: () => {
        revealForeground.classList.remove('revealing');
      },
      onUpdate: (self) => {
        console.log('Scroll progress:', self.progress);
      }
    }
  });

  // Animate the clip-path - shrink from full coverage to center point
  revealTl.to(revealForeground, {
    clipPath: 'circle(0% at 50% 50%)',
    ease: 'power2.inOut',
    duration: 1
  });

  // Add a subtle scale animation to the background text for depth
  gsap.to('.featured-work-reveal-bg .reveal-title', {
    scale: 1.1,
    ease: 'none',
    scrollTrigger: {
      trigger: revealContainer,
      start: 'top top',
      end: '+=150%',
      scrub: true
    }
  });

  // Fade in the subtitle as the reveal progresses
  gsap.fromTo('.featured-work-reveal-bg .reveal-subtitle',
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: revealContainer,
        start: 'top top',
        end: '+=75%',
        scrub: true
      }
    }
  );

  console.log('Work reveal animation initialized successfully');
}

// =====================================
// 3D SCROLL TRANSFORM ANIMATION
// =====================================

function init3DScrollTransform() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.error('❌ GSAP or ScrollTrigger not loaded');
    return;
  }

  const container = document.getElementById('scroll-3d-trigger');
  const staticOverlayStart = document.getElementById('static-overlay-start');
  const staticOverlayEnd = document.getElementById('static-overlay-end');
  const rotatingContainer = document.getElementById('rotating-container');
  const rotatingBox = document.getElementById('rotating-box');

  console.log('🔍 Looking for 3D scroll elements...');
  console.log('Container:', container);
  console.log('Static Start:', staticOverlayStart);
  console.log('Static End:', staticOverlayEnd);
  console.log('Rotating Container:', rotatingContainer);
  console.log('Rotating Box:', rotatingBox);

  if (!container || !staticOverlayStart || !staticOverlayEnd || !rotatingContainer || !rotatingBox) {
    console.error('❌ 3D scroll elements not found');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  console.log('✅ Initializing 3D scroll transform animation');

  // Create ScrollTrigger with direct animations
  ScrollTrigger.create({
    trigger: container,
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
    markers: false, // Set to true for debugging
    onUpdate: (self) => {
      const progress = self.progress;
      console.log('📊 Scroll progress:', progress.toFixed(2));

      // Phase 1: Fade out start static text (0% - 20%)
      if (progress < 0.2) {
        const fadeProgress = progress / 0.2;
        staticOverlayStart.style.opacity = 1 - fadeProgress;
        rotatingContainer.style.opacity = fadeProgress;
        staticOverlayEnd.style.opacity = 0;
      }
      // Phase 2: Show rotating cylinder (20% - 80%)
      else if (progress >= 0.2 && progress < 0.8) {
        staticOverlayStart.style.opacity = 0;
        rotatingContainer.style.opacity = 1;
        staticOverlayEnd.style.opacity = 0;

        // Rotate the cylinder based on scroll progress
        const rotateProgress = (progress - 0.2) / 0.6; // Normalize to 0-1 for this phase
        const rotationDegrees = rotateProgress * 1440; // 4 full rotations

        rotatingBox.style.transform = `perspective(1500px) rotateX(${rotationDegrees}deg)`;
      }
      // Phase 3: Fade to end static text (80% - 100%)
      else {
        const fadeProgress = (progress - 0.8) / 0.2;
        staticOverlayStart.style.opacity = 0;
        rotatingContainer.style.opacity = 1 - fadeProgress;
        staticOverlayEnd.style.opacity = fadeProgress;
      }
    }
  });

  console.log('✅ 3D scroll transform animation initialized successfully');
}

// =====================================
// SCROLL ANIMATIONS
// =====================================

function initScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Animate impact items
  gsap.utils.toArray('.impact-item').forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 80%',
      onEnter: () => {
        item.classList.add('visible');
      }
    });
  });

  // Animate timeline items
  gsap.utils.toArray('.timeline-item').forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 80%',
      onEnter: () => {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 100);
      }
    });
  });

  // Animate publication cards
  gsap.utils.toArray('.publication-card').forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top 85%',
      onEnter: () => {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 100);
      }
    });
  });

  // Animate work cards
  gsap.utils.toArray('.work-card').forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      }
    });
  });

  // Animate section headers
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header.querySelectorAll('.section-label, .title-line, .section-subtitle'), {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
      }
    });
  });

  // Parallax effect on hero accent element
  const heroAccent = document.querySelector('.hero-accent-element');
  if (heroAccent) {
    gsap.to(heroAccent, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }
}

// =====================================
// CONVERGENCE ANIMATION - BUILDING THE FUTURE
// =====================================

function initConvergenceAnimation() {
  console.log('🎬 Starting convergence animation initialization...');

  // Kill any existing convergence ScrollTriggers to prevent duplicates
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id === 'convergence') {
        console.log('🗑️ Removing existing convergence trigger');
        trigger.kill();
      }
    });
  }

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.error('❌ GSAP or ScrollTrigger not loaded');
    console.log('GSAP:', typeof gsap);
    console.log('ScrollTrigger:', typeof ScrollTrigger);
    return;
  }

  console.log('✅ GSAP and ScrollTrigger are loaded');
  gsap.registerPlugin(ScrollTrigger);

  const section = document.getElementById('work');
  const wrapper = document.getElementById('convergence-wrapper');
  const subtitle = document.getElementById('convergence-subtitle');

  console.log('🔍 Looking for elements...');
  console.log('Section #work:', section);
  console.log('Wrapper:', wrapper);
  console.log('Subtitle:', subtitle);

  if (!section || !wrapper) {
    console.error('❌ Convergence elements not found');
    return;
  }

  console.log('✅ All required elements found');

  // Force layout recalculation
  section.offsetHeight;
  wrapper.offsetHeight;

  // Get all convergence layers
  const layers = wrapper.querySelectorAll('.convergence-layer:not(.convergence-center)');
  const centerLayer = wrapper.querySelector('.convergence-center');
  const glow = section.querySelector('.convergence-glow');
  const circuits = section.querySelector('.convergence-circuits');
  const circuitLines = section.querySelectorAll('.circuit-line');
  const circuitNodes = section.querySelectorAll('.circuit-node-dec');

  console.log('📊 Layer elements found:', {
    outerLayers: layers.length,
    layersList: Array.from(layers).map(l => l.getAttribute('data-direction')),
    centerLayer: !!centerLayer,
    glow: !!glow,
    circuits: !!circuits
  });

  if (layers.length === 0) {
    console.error('❌ NO OUTER LAYERS FOUND! Animation will not work.');
    console.log('Wrapper HTML:', wrapper.innerHTML.substring(0, 500));
    return;
  }

  if (!centerLayer) {
    console.error('❌ NO CENTER LAYER FOUND!');
    return;
  }

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Show final state immediately for accessibility
    layers.forEach(layer => {
      layer.style.opacity = '0';
    });
    if (centerLayer) centerLayer.style.opacity = '1';
    if (subtitle) {
      subtitle.style.opacity = '1';
      subtitle.style.transform = 'translateX(-50%)';
    }
    return;
  }

  // Define starting positions for each layer direction
  // Using percentage-based positioning for responsive design
  const layerConfigs = {
    'top-left': { x: -120, y: -80, scale: 0.35, rotation: -12, blur: 3 },
    'top-right': { x: 120, y: -80, scale: 0.35, rotation: 12, blur: 3 },
    'bottom-left': { x: -120, y: 80, scale: 0.35, rotation: 12, blur: 3 },
    'bottom-right': { x: 120, y: 80, scale: 0.35, rotation: -12, blur: 3 },
    'top': { x: 0, y: -140, scale: 0.45, rotation: 0, blur: 2 },
    'bottom': { x: 0, y: 140, scale: 0.45, rotation: 0, blur: 2 },
    'left': { x: -180, y: 0, scale: 0.4, rotation: -6, blur: 2.5 },
    'right': { x: 180, y: 0, scale: 0.4, rotation: 6, blur: 2.5 }
  };

  // Set initial states for all layers with proper blur
  console.log('🎨 Setting initial states for', layers.length, 'layers');
  layers.forEach((layer, index) => {
    const direction = layer.getAttribute('data-direction');
    const config = layerConfigs[direction];

    console.log(`  Layer ${index + 1} (${direction}):`, config);

    if (config) {
      gsap.set(layer, {
        xPercent: config.x,
        yPercent: config.y,
        scale: config.scale,
        rotation: config.rotation,
        opacity: 0.7, // Start visible - changed from 0.25 to 0.7
        filter: `blur(${config.blur}px)`,
        force3D: true,
        willChange: 'transform, opacity, filter'
      });

      console.log(`  ✅ Set layer ${index + 1} to:`, {
        x: config.x + '%',
        y: config.y + '%',
        scale: config.scale,
        opacity: 0.7
      });
    } else {
      console.error(`  ❌ No config found for direction: ${direction}`);
    }
  });

  // Set initial state for center layer - visible but dimmed
  if (centerLayer) {
    gsap.set(centerLayer, {
      opacity: 0.6, // Start more visible - changed from 0.4 to 0.6
      scale: 1.0, // Start at full size
      force3D: true
    });
  }

  // Set initial state for subtitle
  if (subtitle) {
    gsap.set(subtitle, {
      opacity: 0,
      y: 40,
      scale: 0.95
    });
  }

  // Set initial states for glow and circuits
  if (glow) gsap.set(glow, { opacity: 0 });
  if (circuits) gsap.set(circuits, { opacity: 0 });

  console.log('✅ Initial states set');

  // Verify initial positions were applied
  const firstLayer = layers[0];
  if (firstLayer) {
    const computedStyle = window.getComputedStyle(firstLayer);
    const transform = computedStyle.transform;
    console.log('🔍 First layer transform after gsap.set:', transform);
    console.log('🔍 First layer opacity:', firstLayer.style.opacity);
  }

  // Store floating animations so we can control them
  const floatingAnimations = [];

  // Create floating animations for each layer (creates the infinite illusion)
  layers.forEach((layer, index) => {
    const direction = layer.getAttribute('data-direction');
    const isVertical = direction === 'top' || direction === 'bottom';
    const isHorizontal = direction === 'left' || direction === 'right';
    const isDiagonal = direction.includes('-');

    // Create unique floating motion for each layer
    const floatTl = gsap.timeline({ repeat: -1, yoyo: true });

    floatTl.to(layer, {
      y: isDiagonal ? '+=12' : (isVertical ? '+=18' : '+=8'),
      x: isDiagonal ? '+=8' : (isHorizontal ? '+=15' : '+=5'),
      rotation: `+=${(index % 2 === 0 ? 1.5 : -1.5)}`,
      scale: '+=0.02',
      duration: 2.5 + (index * 0.2),
      ease: 'sine.inOut'
    });

    floatingAnimations.push(floatTl);
  });

  // Create the main convergence timeline with ScrollTrigger
  console.log('🎬 Creating ScrollTrigger timeline...');
  const convergenceTl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=300%', // Fast animation + long stabilization hold
      scrub: 0.5, // Faster scrubbing
      pin: true, // PIN THE SECTION - prevents scrolling past until animation completes
      pinSpacing: true, // Add spacing to prevent layout jump
      anticipatePin: 1,
      invalidateOnRefresh: true, // Recalculate on refresh
      markers: false, // Disable markers in production
      id: 'convergence',
      // Ensure proper z-index during pin to not cover hero section
      onEnter: () => {
        console.log('📍 Convergence animation entered');
        // Ensure hero stays accessible when scrolling down
        const hero = document.getElementById('home');
        if (hero) {
          hero.style.zIndex = '10';
        }
      },
      onLeave: () => {
        console.log('📍 Convergence animation left');
        // Signal that convergence just completed - block lab entrance until user scrolls again
        window.convergenceJustCompleted = true;

        // Dispatch event to enable scroll tracking for lab entrance
        window.dispatchEvent(new Event('convergenceCompleted'));

        setTimeout(() => {
          window.convergenceJustCompleted = false;
          console.log('Lab entrance cooldown expired');
        }, 3000);
      },
      onEnterBack: () => {
        console.log('📍 Convergence animation entered back');
        // When scrolling back into convergence, maintain proper stacking
        const hero = document.getElementById('home');
        if (hero) {
          hero.style.zIndex = '10';
        }
      },
      onLeaveBack: () => {
        console.log('📍 Convergence animation left back');
        // Ensure hero is fully visible when scrolling back to top
        const hero = document.getElementById('home');
        if (hero) {
          hero.style.zIndex = '10';
        }
        // Reset the convergence section z-index
        section.style.zIndex = '5';
      },
      onUpdate: (self) => {
        const progress = self.progress;
        // Only log at 10% intervals to reduce console spam
        const progressPercent = Math.floor(progress * 100);
        if (progressPercent % 10 === 0) {
          console.log('📊 Progress:', progress.toFixed(3));
        }

        // Progressive glow effect
        if (glow) {
          const glowOpacity = Math.max(0, (progress - 0.4) / 0.4);
          glow.style.opacity = Math.min(glowOpacity, 1);
        }

        // Add converged class to center layer
        if (centerLayer) {
          if (progress > 0.8) {
            centerLayer.classList.add('converged');
          } else {
            centerLayer.classList.remove('converged');
          }
        }

        // Fade out floating animations as convergence progresses
        floatingAnimations.forEach(anim => {
          if (progress > 0.3) {
            anim.timeScale(Math.max(0.1, 1 - progress));
          } else {
            anim.timeScale(1);
          }
        });

        // Add converging class to layers for CSS effects
        layers.forEach(layer => {
          if (progress > 0.2 && progress < 0.7) {
            layer.classList.add('converging');
          } else {
            layer.classList.remove('converging');
          }
        });
      }
    }
  });

  console.log('🎨 Adding Phase 1: Reduce blur for', layers.length, 'layers');

  // Phase 1: Reduce blur slightly as user starts scrolling (0% - 10%)
  layers.forEach((layer, index) => {
    const direction = layer.getAttribute('data-direction');
    const config = layerConfigs[direction];

    // Calculate stagger based on position - corner layers move first
    const isDiagonal = direction.includes('-');
    const staggerOffset = isDiagonal ? 0 : 0.02;

    // Reduce blur to sharpen text
    convergenceTl.to(layer, {
      filter: 'blur(1.5px)',
      duration: 0.1,
      ease: 'power1.out'
    }, staggerOffset);
  });

  console.log('🎨 Adding Phase 2: Convergence motion for', layers.length, 'layers');

  // Phase 2: Convergence motion (20% - 70%)
  layers.forEach((layer, index) => {
    const direction = layer.getAttribute('data-direction');

    // Calculate approach offset based on layer type
    const isDiagonal = direction.includes('-');
    const convergenceOffset = isDiagonal ? 0.15 : 0.2;

    // Converge toward center with smooth easing
    convergenceTl.to(layer, {
      xPercent: 0,
      yPercent: 0,
      scale: 1,
      rotation: 0,
      opacity: 0.9,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: 'power3.inOut'
    }, convergenceOffset + (index * 0.015));
  });

  // Phase 3: Final merge - layers fade into center (65% - 85%)
  convergenceTl.to(layers, {
    opacity: 0,
    scale: 1.08,
    filter: 'blur(3px)',
    duration: 0.2,
    ease: 'power2.in',
    stagger: {
      each: 0.015,
      from: 'edges'
    }
  }, 0.55);

  // Center layer emerges with impact
  convergenceTl.to(centerLayer, {
    opacity: 1,
    scale: 1,
    duration: 0.25,
    ease: 'power2.out'
  }, 0.6);

  // Add a subtle "pop" effect to the center text
  convergenceTl.fromTo(centerLayer, {
    scale: 0.98
  }, {
    scale: 1,
    duration: 0.15,
    ease: 'back.out(1.5)'
  }, 0.75);

  // Phase 4: Subtitle reveals (80% - 95%)
  convergenceTl.to(subtitle, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.15,
    ease: 'power2.out'
  }, 0.8);

  // Phase 5: Circuit decorations draw in (85% - 100%)
  if (circuits) {
    convergenceTl.to(circuits, {
      opacity: 1,
      duration: 0.08,
      ease: 'power1.out'
    }, 0.85);

    // Animate circuit lines with staggered draw effect
    circuitLines.forEach((line, index) => {
      convergenceTl.to(line, {
        strokeDashoffset: 0,
        duration: 0.12,
        ease: 'power2.out'
      }, 0.87 + (index * 0.025));
    });

    // Animate circuit nodes with pop effect
    circuitNodes.forEach((node, index) => {
      gsap.set(node, { scale: 0 });
      convergenceTl.to(node, {
        opacity: 1,
        scale: 1,
        duration: 0.08,
        ease: 'back.out(3)'
      }, 0.9 + (index * 0.015));
    });
  }

  // Add subtle parallax to the entire container for depth
  gsap.to('.convergence-container', {
    yPercent: -3,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Add a subtle rotation to glow for dynamic feel
  if (glow) {
    gsap.to(glow, {
      rotation: 15,
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2
      }
    });
  }

  console.log('✅ Premium convergence animation initialized successfully!');
  console.log('📊 ScrollTrigger info:', {
    trigger: section.id,
    start: 'top top',
    end: '+=300%',
    pin: true,
    scrub: 0.5,
    animationDuration: convergenceTl.duration(),
    note: 'All text visible from start → fast convergence → long stabilization hold'
  });
  console.log('📊 Timeline info:', {
    duration: convergenceTl.duration(),
    totalTweens: convergenceTl.getChildren().length,
    progress: convergenceTl.progress()
  });

  return true;
}

// =====================================
// IMPACT COUNTERS
// =====================================

function initImpactCounters() {
  const counters = document.querySelectorAll('.impact-number');

  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000;
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);

      if (target >= 1000000) {
        element.textContent = (current / 1000000).toFixed(1);
      } else {
        element.textContent = current.toLocaleString();
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Final value with suffix
        if (target >= 1000000) {
          element.textContent = '2' + suffix;
        } else {
          element.textContent = target.toLocaleString() + suffix;
        }
      }
    };

    requestAnimationFrame(animate);
  };

  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          animateCounter(entry.target);
          entry.target.classList.add('counted');
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  } else {
    counters.forEach(counter => animateCounter(counter));
  }
}

// =====================================
// PROJECTS
// =====================================

function initProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  // Create project cards
  PROJECTS.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-categories', project.categories.join(' '));
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      ${project.image ? `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
        </div>
      ` : project.video ? `
        <div class="project-video">
          <iframe src="${project.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
      ` : ''}
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        ${project.github ? `
          <a href="${project.github}" target="_blank" class="project-link">
            <i class="fab fa-github"></i> View on GitHub
          </a>
        ` : ''}
      </div>
    `;

    projectsGrid.appendChild(card);
  });

  // Filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.project-card').forEach((card, index) => {
        const categories = card.getAttribute('data-categories');
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hidden');
          // Animate in
          if (typeof gsap !== 'undefined') {
            gsap.from(card, {
              opacity: 0,
              scale: 0.95,
              duration: 0.4,
              delay: index * 0.05,
              ease: 'power2.out'
            });
          }
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// =====================================
// FUTURISTIC TIMELINE
// =====================================

function initTimeline() {
  const timelineCardsContainer = document.getElementById('timeline-cards');
  const particlesContainer = document.getElementById('timeline-particles');

  if (!timelineCardsContainer) return;

  // Generate timeline cards
  TIMELINE.forEach((item, index) => {
    const isLeft = index % 2 === 0;
    const card = createTimelineCard(item, index, isLeft);
    timelineCardsContainer.appendChild(card);
  });

  // Create energy particles along the timeline
  if (particlesContainer) {
    createTimelineParticles(particlesContainer);
  }

  // Initialize timeline animations
  initTimelineAnimations();
}

function createTimelineCard(item, index, isLeft) {
  const card = document.createElement('div');
  card.className = `timeline-card ${isLeft ? 'timeline-card-left' : 'timeline-card-right'}`;
  card.setAttribute('data-index', index);

  // Generate company logo SVG based on company type
  const logoSVG = generateCompanyLogo(item.logoType, item.companyShort);

  // Generate tags HTML
  const tagsHTML = item.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join('');

  card.innerHTML = `
    <!-- Connector Line to Timeline -->
    <div class="timeline-connector">
      <svg class="connector-svg" viewBox="0 0 100 20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="connector-grad-${index}" x1="${isLeft ? '100%' : '0%'}" y1="0%" x2="${isLeft ? '0%' : '100%'}" y2="0%">
            <stop offset="0%" stop-color="var(--color-accent)" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="var(--color-accent)" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <line class="connector-line" x1="0" y1="10" x2="100" y2="10" stroke="url(#connector-grad-${index})" stroke-width="2"/>
        <circle class="connector-dot" cx="${isLeft ? '100' : '0'}" cy="10" r="4" fill="var(--color-accent)"/>
      </svg>
    </div>

    <!-- Timeline Node on the spine -->
    <div class="timeline-node">
      <div class="node-outer">
        <div class="node-inner">
          <div class="node-core"></div>
        </div>
      </div>
      <div class="node-pulse"></div>
      <div class="node-ring"></div>
    </div>

    <!-- Flip Card Container -->
    <div class="timeline-flip-card">
      <div class="flip-card-inner">
        <!-- Front Face: Logo + Date -->
        <div class="flip-card-front">
          <div class="card-circuit-pattern"></div>
          <div class="card-glow-effect"></div>

          <div class="card-category">
            <i class="fas fa-${item.categoryIcon}"></i>
            <span>${item.category}</span>
          </div>

          <div class="card-logo-container">
            ${logoSVG}
          </div>

          <div class="card-front-info">
            <div class="card-date">${item.date}</div>
            <div class="card-duration">${item.duration}</div>
            <div class="card-location">
              <i class="fas fa-map-marker-alt"></i>
              <span>${item.location}</span>
            </div>
          </div>

          <div class="card-flip-hint">
            <span>Hover to reveal</span>
            <i class="fas fa-sync-alt"></i>
          </div>
        </div>

        <!-- Back Face: Details -->
        <div class="flip-card-back">
          <div class="card-circuit-pattern"></div>

          <div class="card-back-header">
            <h3 class="card-title">${item.title}</h3>
            <div class="card-company-small">${item.company}</div>
          </div>

          <div class="card-description">
            ${item.description.split('\n\n').map(p => `<p>${p}</p>`).join('')}
          </div>

          <div class="card-tags">
            ${tagsHTML}
          </div>

          <div class="card-back-accent"></div>
        </div>
      </div>
    </div>
  `;

  return card;
}

function generateCompanyLogo(logoType, companyShort) {
  // Logo file paths and alt text mapping
  const logoConfig = {
    meta: {
      src: '/img/logos/MetaLogo.png',
      alt: 'Meta Logo',
      className: 'logo-meta'
    },
    ltts: {
      src: '/img/logos/LnTlogo.png',
      alt: 'L&T Technology Services Logo',
      className: 'logo-ltts'
    },
    perigon: {
      src: '/img/logos/PerigonHealth360Logo.png',
      alt: 'Perigon Health 360 Logo',
      className: 'logo-perigon'
    },
    nyu: {
      src: '/img/logos/NYULogo.png',
      alt: 'New York University Logo',
      className: 'logo-nyu'
    },
    northwell: {
      src: '/img/logos/NorthwellHealth_Logo.png',
      alt: 'Northwell Health / Feinstein Institutes Logo',
      className: 'logo-northwell'
    }
  };

  const config = logoConfig[logoType];

  if (config) {
    return `
      <div class="company-logo-wrapper ${config.className}">
        <img
          src="${config.src}"
          alt="${config.alt}"
          class="company-logo-img"
          loading="lazy"
        />
      </div>
    `;
  }

  // Fallback to text-based logo
  return `
    <div class="company-logo-text">${companyShort}</div>
  `;
}

function createTimelineParticles(container) {
  // Create floating energy particles that move along the timeline
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'timeline-particle';
    particle.style.setProperty('--delay', `${Math.random() * 8}s`);
    particle.style.setProperty('--duration', `${4 + Math.random() * 4}s`);
    particle.style.setProperty('--size', `${2 + Math.random() * 4}px`);
    container.appendChild(particle);
  }
}

function initTimelineAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // Fallback: make all cards visible
    document.querySelectorAll('.timeline-card').forEach(card => {
      card.classList.add('visible');
    });
    return;
  }

  // Master timeline for the section
  const timelineTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.futuristic-timeline',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Animate each card on scroll
  gsap.utils.toArray('.timeline-card').forEach((card, index) => {
    const isLeft = card.classList.contains('timeline-card-left');

    // Initial state
    gsap.set(card, {
      opacity: 0,
      x: isLeft ? -100 : 100,
      scale: 0.9
    });

    // Animate on scroll
    ScrollTrigger.create({
      trigger: card,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(card, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.1
        });

        // Animate the node
        const node = card.querySelector('.timeline-node');
        if (node) {
          gsap.fromTo(node,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, delay: 0.3, ease: 'back.out(1.7)' }
          );
        }

        // Animate the connector
        const connector = card.querySelector('.connector-line');
        if (connector) {
          gsap.fromTo(connector,
            { strokeDasharray: '100', strokeDashoffset: '100' },
            { strokeDashoffset: '0', duration: 0.6, delay: 0.4, ease: 'power2.out' }
          );
        }
      },
      once: true
    });
  });

  // Animate the timeline spine glow
  const timelineSpine = document.querySelector('.timeline-spine');
  if (timelineSpine) {
    gsap.fromTo('.timeline-line-main',
      { strokeDasharray: '1000', strokeDashoffset: '1000' },
      {
        strokeDashoffset: '0',
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.futuristic-timeline',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // Add touch support for mobile flip cards
  initTimelineTouchSupport();
}

function initTimelineTouchSupport() {
  // Detect touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) return;

  document.querySelectorAll('.timeline-flip-card').forEach(flipCard => {
    let isFlipped = false;

    flipCard.addEventListener('click', (e) => {
      e.preventDefault();
      const inner = flipCard.querySelector('.flip-card-inner');

      if (inner) {
        isFlipped = !isFlipped;
        if (isFlipped) {
          inner.style.transform = 'rotateY(180deg)';
        } else {
          inner.style.transform = 'rotateY(0deg)';
        }
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!flipCard.contains(e.target) && isFlipped) {
        const inner = flipCard.querySelector('.flip-card-inner');
        if (inner) {
          isFlipped = false;
          inner.style.transform = 'rotateY(0deg)';
        }
      }
    });
  });
}

// =====================================
// GALLERY
// =====================================

function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  GALLERY_IMAGES.forEach((image, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="${image.src}" alt="${image.caption}" loading="lazy">
      <div class="gallery-caption">${image.caption}</div>
    `;

    // Add staggered animation
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 90%',
        onEnter: () => {
          gsap.from(item, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: (index % 3) * 0.1,
            ease: 'power2.out'
          });
        }
      });
    }

    galleryGrid.appendChild(item);
  });
}

// =====================================
// LOCATION TRACKING
// =====================================

function initLocationTracking() {
  fetchVisitorInfo();
}

async function fetchVisitorInfo() {
  try {
    const response = await fetch(CONFIG.ipInfoUrl);
    const data = await response.json();

    const { ip, city, region, country, loc } = data;

    if (loc) {
      const [lat, lng] = loc.split(',').map(parseFloat);
      const distance = haversineDistance(CONFIG.refLat, CONFIG.refLng, lat, lng);
      const funComparison = getDistanceComparison(distance);

      displayVisitorInfo(ip, city, region, country, lat, lng, distance, funComparison);
      initMap(lat, lng, false);
    } else {
      displayVisitorInfoFallback(ip, city, region, country);
    }
  } catch (error) {
    console.error('Error fetching visitor info:', error);
    displayVisitorInfoError();
  }
}

function displayVisitorInfo(ip, city, region, country, lat, lng, distance, funComparison) {
  const visitorInfo = document.getElementById('visitor-info');
  if (!visitorInfo) return;

  visitorInfo.innerHTML = `
    <p style="margin-bottom: 0.75rem;"><strong>Looks like you're visiting from ${city}, ${country}!</strong></p>
    <p style="margin-bottom: 0.75rem;">We're about <strong style="color: var(--color-accent);">${distance.toFixed(0)} km</strong> apart.</p>
    <p style="margin-bottom: 1rem; color: var(--color-accent); font-style: italic; font-size: 0.9em;">${funComparison}</p>
    <button class="btn-outline" onclick="requestPreciseLocation()" style="width: 100%; font-size: 0.85rem; padding: 0.75rem;">
      <span class="btn-text">Share precise location</span>
    </button>
    <div id="location-status" style="margin-top: 0.5rem; font-size: 0.85rem;"></div>
  `;
}

function displayVisitorInfoFallback(ip, city, region, country) {
  const visitorInfo = document.getElementById('visitor-info');
  if (!visitorInfo) return;

  visitorInfo.innerHTML = `
    <p><strong>Connecting from: ${city}, ${region}, ${country}</strong></p>
    <button class="btn-outline" onclick="requestPreciseLocation()" style="width: 100%; margin-top: 1rem;">
      <span class="btn-text">Share location for distance</span>
    </button>
    <div id="location-status" style="margin-top: 0.5rem;"></div>
  `;
}

function displayVisitorInfoError() {
  const visitorInfo = document.getElementById('visitor-info');
  if (!visitorInfo) return;

  visitorInfo.innerHTML = `
    <p>Unable to detect location automatically.</p>
    <button class="btn-outline" onclick="requestPreciseLocation()" style="width: 100%; margin-top: 1rem;">
      <span class="btn-text">Share location manually</span>
    </button>
    <div id="location-status" style="margin-top: 0.5rem;"></div>
  `;
}

function requestPreciseLocation() {
  const statusEl = document.getElementById('location-status');

  if (!navigator.geolocation) {
    statusEl.innerHTML = '<span style="color: var(--color-orange);">Geolocation not supported.</span>';
    return;
  }

  statusEl.innerHTML = '<span style="color: var(--color-accent);">Requesting location...</span>';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude, accuracy } = position.coords;
      const distance = haversineDistance(CONFIG.refLat, CONFIG.refLng, latitude, longitude);
      const funComparison = getDistanceComparison(distance);

      const visitorInfo = document.getElementById('visitor-info');
      visitorInfo.innerHTML = `
        <p style="margin-bottom: 0.5rem;"><strong>Precise location acquired!</strong></p>
        <p style="margin-bottom: 0.5rem;">Distance: <strong style="color: var(--color-accent);">${distance.toFixed(2)} km</strong></p>
        <p style="margin-bottom: 0.5rem; font-size: 0.85rem;">Accuracy: +/-${Math.round(accuracy)}m</p>
        <p style="color: var(--color-accent); font-style: italic; font-size: 0.9em;">${funComparison}</p>
      `;

      initMap(latitude, longitude, true);
    },
    (error) => {
      let errorMsg = 'Unable to get location.';
      if (error.code === error.PERMISSION_DENIED) errorMsg = 'Location access denied.';
      if (error.code === error.POSITION_UNAVAILABLE) errorMsg = 'Location unavailable.';
      if (error.code === error.TIMEOUT) errorMsg = 'Request timed out.';
      statusEl.innerHTML = `<span style="color: var(--color-orange);">${errorMsg}</span>`;
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
  );
}

function initMap(lat, lng, isPrecise = false) {
  const mapEl = document.getElementById('visitor-map');
  if (!mapEl || typeof L === 'undefined') return;

  if (currentMap) {
    currentMap.remove();
  }

  currentMap = L.map('visitor-map', {
    zoomControl: false,
    attributionControl: false
  }).setView([lat, lng], 10);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(currentMap);

  // Custom marker style
  const markerStyle = {
    radius: 8,
    fillColor: '#3DD1E7',
    color: '#ffffff',
    weight: 2,
    opacity: 1,
    fillOpacity: 0.8
  };

  const youMarker = L.circleMarker([lat, lng], markerStyle).addTo(currentMap);
  youMarker.bindPopup(isPrecise ? 'Your location' : 'Approximate location');

  const refMarker = L.circleMarker([CONFIG.refLat, CONFIG.refLng], {
    ...markerStyle,
    fillColor: '#FF6B35'
  }).addTo(currentMap);
  refMarker.bindPopup("Ashish's location");

  // Draw line between locations
  L.polyline([[lat, lng], [CONFIG.refLat, CONFIG.refLng]], {
    color: '#3DD1E7',
    weight: 2,
    opacity: 0.6,
    dashArray: '8, 8'
  }).addTo(currentMap);

  // Fit bounds
  const bounds = L.latLngBounds([[lat, lng], [CONFIG.refLat, CONFIG.refLng]]);
  currentMap.fitBounds(bounds, { padding: [30, 30] });

  setTimeout(() => currentMap.invalidateSize(), 100);
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// =====================================
// SAY HI BUTTON
// =====================================

function initSayHi() {
  const sayHiBtn = document.getElementById('say-hi-btn');
  if (!sayHiBtn) return;

  sayHiBtn.addEventListener('click', async () => {
    const chainReaction = document.getElementById('chain-reaction');
    const steps = chainReaction.querySelectorAll('.reaction-step');

    // Animate chain reaction
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.style.background = 'rgba(0, 255, 136, 0.4)';
        step.style.transform = 'scale(1.1)';
        setTimeout(() => {
          step.style.transform = 'scale(1)';
        }, 200);
      }, index * 200);
    });

    // Trigger IFTTT
    try {
      await fetch(CONFIG.iftttSayHiUrl, { method: 'POST', mode: 'no-cors' });

      // Success feedback
      const textEl = sayHiBtn.querySelector('.btn-say-hi-text');
      const originalText = textEl.textContent;
      textEl.textContent = 'Lights changed!';

      setTimeout(() => {
        textEl.textContent = originalText;
        steps.forEach(step => {
          step.style.background = 'rgba(0, 0, 0, 0.2)';
        });
      }, 3000);

      updateHiCounter();
    } catch (error) {
      console.error('Error triggering Say Hi:', error);
    }
  });

  updateHiCounter();
}

async function updateHiCounter() {
  const counterNumber = document.getElementById('counter-number');
  const counterCountries = document.getElementById('counter-countries');

  if (!counterNumber) return;

  try {
    // Fetch visitor stats from GoatCounter API
    const response = await fetch('https://ashish.goatcounter.com/counter/.json');
    if (response.ok) {
      const data = await response.json();
      // Use unique visitors count
      counterNumber.textContent = data.count_unique || data.count || '0';

      // Estimate countries based on unique visitors (roughly 1 country per 3-5 visitors)
      // This is an approximation since the simple API doesn't expose country data
      if (counterCountries) {
        const uniqueCount = parseInt(data.count_unique?.replace(/[^0-9]/g, '') || data.count?.replace(/[^0-9]/g, '') || '0');
        const estimatedCountries = Math.max(1, Math.min(Math.ceil(uniqueCount / 4), 50));
        counterCountries.textContent = estimatedCountries;
      }
    } else {
      // Fallback if API fails
      counterNumber.textContent = '0';
      if (counterCountries) counterCountries.textContent = '0';
    }
  } catch (error) {
    console.log('GoatCounter stats not yet available:', error);
    // Show placeholder while waiting for first data
    counterNumber.textContent = '0';
    if (counterCountries) counterCountries.textContent = '0';
  }
}

// =====================================
// CONTACT FORM
// =====================================

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const originalText = btnText.textContent;

    btnText.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        btnText.textContent = 'Sent!';
        form.reset();
        setTimeout(() => {
          btnText.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      btnText.textContent = 'Error - Try again';
      setTimeout(() => {
        btnText.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }
  });
}

// =====================================
// RESUME
// =====================================

function initResume() {
  const viewBtn = document.getElementById('view-resume-btn');
  const downloadBtn = document.getElementById('download-resume-btn');
  const resumeViewer = document.getElementById('resume-viewer');

  if (viewBtn && resumeViewer) {
    viewBtn.addEventListener('click', () => {
      const isVisible = resumeViewer.style.display !== 'none';

      if (isVisible) {
        resumeViewer.style.display = 'none';
        viewBtn.querySelector('.btn-text').textContent = 'View Inline';
      } else {
        resumeViewer.style.display = 'block';
        viewBtn.querySelector('.btn-text').textContent = 'Hide Resume';

        // Scroll to viewer
        if (lenis) {
          lenis.scrollTo(resumeViewer, { offset: -100 });
        } else {
          resumeViewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', async () => {
      try {
        await fetch(CONFIG.iftttResumeUrl, { method: 'POST', mode: 'no-cors' });
      } catch (error) {
        console.error('Error notifying resume download:', error);
      }
    });
  }
}

// =====================================
// ROLE ROTATION
// =====================================

function initRoleRotation() {
  const roleElement = document.getElementById('role-text');
  if (!roleElement) return;

  const roles = [
    'Making AR glasses a reality',
    'Turning caffeine and schematics into products',
    'Debugging the world, one register at a time',
    'Bridging bare metal and the cloud',
    'Making electrons behave',
    'Having strong opinions about PCB layouts',
    'Shipping things that plug in, boot up, and don\'t explode',
    'Speaking both voltages and version control',
    'Closing the gap between \'works on paper\' and \'just works\'',
    'Doing full stack — the silicon kind',
    'Making hardware behave like it promised',
    'Powered by coffee, guided by datasheets',
    'Somewhere between a schematic and a shipped product',
    'Running on electrons and deadlines',
    'Engineering things worth wearing, using, and trusting'
  ];

  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % roles.length;

    // Fade out
    roleElement.style.opacity = '0';
    roleElement.style.transform = 'translateY(-10px)';

    setTimeout(() => {
      roleElement.textContent = roles[currentIndex];
      roleElement.style.opacity = '1';
      roleElement.style.transform = 'translateY(0)';
    }, 300);
  }, 3500);

  // Add transition
  roleElement.style.transition = 'all 0.3s ease';
}

// =====================================
// GLITCH EFFECT & FONT CYCLING
// =====================================

// ===== GLITCH & FONT CYCLING SYSTEM =====
// Movie-style glitch effect with smooth character-by-character font cycling
function initLiquidDistortionEffect() {
  const firstName = document.getElementById('name-first');
  const lastName = document.getElementById('name-last');

  if (!firstName || !lastName) return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 10 Iconic Coding Fonts with Editor Colors - cycle every 250ms
  const fontClasses = [
    'font-tech-1',  // Monaco - macOS Terminal (Matrix Green)
    'font-tech-2',  // JetBrains Mono - JetBrains IDEs (Orange)
    'font-tech-3',  // Fira Code - VS Code (Purple)
    'font-tech-4',  // Consolas - Visual Studio (Blue)
    'font-tech-5',  // Source Code Pro - Adobe (Red)
    'font-tech-6',  // Roboto Mono - Android Studio (Teal)
    'font-tech-7',  // Menlo - Xcode (Sky Blue)
    'font-tech-8',  // Ubuntu Mono - Ubuntu (Flame Orange)
    'font-tech-9',  // Courier New - Classic Terminal (Cyan)
    'font-tech-10'  // IBM Plex Mono - IBM (Big Blue)
  ];

  let currentFontIndex = 0;
  let fontCycleTimeout = null;
  const FONT_CYCLE_SPEED = 500; // 500ms per font
  const CHAR_TRANSITION_DELAY = 50; // 50ms between each character transition

  // ===== LIQUID PHYSICS SIMULATION SYSTEM =====
  // True physics-based liquid distortion with spring dynamics, ripples, and viscosity
  const LIQUID_CONFIG = {
    // === PHYSICS CONSTANTS ===
    mass: 0.8,                    // Mass of each letter (lighter = more responsive)
    springStiffness: 150,         // Spring constant (lower = more wobbly)
    damping: 0.65,                // Damping ratio (lower = more oscillation)
    viscosity: 0.08,              // Viscosity factor (lower = less resistance)

    // === INTERACTION RANGE ===
    maxInfluenceRadius: 280,      // Maximum cursor influence distance
    coreInfluenceRadius: 80,      // Strong influence zone

    // === FORCE MULTIPLIERS ===
    cursorForceMultiplier: 5500,  // Base force from cursor proximity (EXTREME)
    velocityForceMultiplier: 95,  // Force multiplier from cursor speed (EXTREME)
    maxForce: 1800,               // Cap on applied force (EXTREME)

    // === RIPPLE PROPAGATION ===
    rippleEnabled: true,
    rippleStrength: 0.65,         // How much neighbors influence each other
    rippleDecay: 0.7,             // Decay per neighbor hop
    rippleDelay: 0.03,            // Seconds delay between neighbor propagation
    maxRippleDistance: 4,         // Max character hops for ripple

    // === DISTORTION LIMITS ===
    maxTranslateX: 80,            // Max X displacement (EXTREME)
    maxTranslateY: 60,            // Max Y displacement (EXTREME)
    maxSkewX: 85,                 // Max skew X degrees (EXTREME)
    maxSkewY: 70,                 // Max skew Y degrees (EXTREME)
    maxRotation: 55,              // Max rotation degrees (EXTREME)
    maxScaleDeviation: 0.75,      // Max scale deviation from 1.0 (EXTREME)

    // === WOBBLE OSCILLATION ===
    wobbleEnabled: true,
    wobbleFrequencyX: 12.0,       // Oscillation frequency X axis (faster wobble)
    wobbleFrequencyY: 10.5,       // Oscillation frequency Y axis (faster wobble)
    wobbleFrequencySkew: 8.5,     // Skew wobble frequency (faster wobble)
    wobbleDecay: 0.96,            // Wobble amplitude decay per frame (slower decay = longer wobble)
    wobbleAmplitude: 2.5,         // Base wobble amplitude multiplier (MUCH MORE wobble)

    // === CHAOS FACTORS ===
    chaosThreshold: 12,           // Cursor speed threshold for chaos mode
    chaosMultiplier: 2.5,         // Amplification in chaos mode
    chaosDuration: 0.8,           // Seconds chaos lingers after fast movement

    // === SECONDARY PHYSICS ===
    velocityInheritance: 0.4,     // How much cursor velocity transfers
    angularMomentum: 0.35,        // Rotational momentum factor
    stretchTension: 0.6,          // Stretch resistance (volume preservation)

    // === VISUAL POLISH ===
    blurIntensity: 0.08,          // Motion blur factor
    maxBlur: 2.0,                 // Maximum blur pixels
    glowOnDistortion: true,       // Add glow when heavily distorted
    glowThreshold: 15             // Distortion magnitude for glow
  };

  // Cursor tracking state with physics history
  const cursorState = {
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    velocityX: 0,
    velocityY: 0,
    accelerationX: 0,
    accelerationY: 0,
    speed: 0,
    prevSpeed: 0,
    isOverName: false,
    activeElement: null,
    rafId: null,
    lastTime: performance.now(),
    // Chaos tracking
    chaosLevel: 0,
    lastHighSpeedTime: 0,
    // Velocity history for smooth physics
    velocityHistory: [],
    maxVelocityHistory: 5
  };

  // Physics state for each character (spring-mass simulation)
  const charPhysicsStates = new WeakMap();

  // All character spans for ripple calculations
  let allCharSpans = [];

  // State tracking for each element
  const elementStates = new Map();

  // Initialize state for an element
  function initElementState(element) {
    elementStates.set(element, {
      isGlitching: false,
      isFontFrozen: false,
      // Character spans for wave transition
      charSpans: [],
      // Frozen font class (for hover state)
      frozenFontClass: null
    });
  }

  // Initialize states for both name elements
  initElementState(firstName);
  initElementState(lastName);

  // ===== SPLIT TEXT INTO CHARACTER SPANS =====
  function splitIntoCharacters(element) {
    const text = element.textContent.trim();
    const dataText = element.getAttribute('data-text') || text;
    element.innerHTML = '';
    element.setAttribute('data-text', dataText);

    // Remove gradient styling from parent - use solid color
    element.style.background = 'none';
    element.style.webkitBackgroundClip = 'unset';
    element.style.backgroundClip = 'unset';
    element.style.webkitTextFillColor = 'var(--color-text-primary)';
    element.style.color = 'var(--color-text-primary)';

    const charSpans = [];
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.className = 'char-wrapper';
      span.textContent = text[i];
      span.setAttribute('data-char-index', i);
      // Ensure character is always visible
      span.style.opacity = '1';
      span.style.visibility = 'visible';
      span.style.color = 'inherit';
      span.style.webkitTextFillColor = 'inherit';
      element.appendChild(span);
      charSpans.push(span);
    }

    const state = elementStates.get(element);
    if (state) {
      state.charSpans = charSpans;
    }

    return charSpans;
  }

  // Split both name elements into characters for liquid physics
  splitIntoCharacters(firstName);
  splitIntoCharacters(lastName);

  // ===== LIQUID PHYSICS SPRING-MASS SYSTEM =====
  // Initialize physics state for a character - full spring-mass-damper model
  function initCharPhysicsState(span, index, totalChars, elementIndex) {
    const state = {
      // === POSITION PHYSICS ===
      posX: 0,              // Current X displacement
      posY: 0,              // Current Y displacement
      velX: 0,              // X velocity
      velY: 0,              // Y velocity
      accX: 0,              // X acceleration
      accY: 0,              // Y acceleration

      // === ROTATION PHYSICS ===
      rotation: 0,          // Current rotation
      rotVel: 0,            // Rotational velocity
      rotAcc: 0,            // Rotational acceleration

      // === SKEW PHYSICS (liquid warping) ===
      skewX: 0,             // Current skewX
      skewY: 0,             // Current skewY
      skewVelX: 0,          // SkewX velocity
      skewVelY: 0,          // SkewY velocity

      // === SCALE PHYSICS (stretching) ===
      scaleX: 1,
      scaleY: 1,
      scaleVelX: 0,
      scaleVelY: 0,

      // === WOBBLE STATE (post-disturbance oscillation) ===
      wobblePhase: Math.random() * Math.PI * 2,  // Random phase offset
      wobbleAmplitude: 0,
      wobbleDecayTime: 0,

      // === RIPPLE STATE ===
      rippleForceX: 0,
      rippleForceY: 0,
      ripplePhase: 0,
      lastRippleTime: 0,

      // === CHAOS STATE ===
      chaosOffset: Math.random() * Math.PI * 2,
      chaosFactor: 0,

      // === METADATA ===
      index: index,
      totalChars: totalChars,
      elementIndex: elementIndex,  // 0 = firstName, 1 = lastName
      normalizedPosition: index / Math.max(totalChars - 1, 1),

      // === ENERGY TRACKING (for settling detection) ===
      kineticEnergy: 0,
      isSettling: false,
      settleStartTime: 0
    };

    charPhysicsStates.set(span, state);
    return state;
  }

  // Get character center position relative to viewport
  function getCharCenter(span) {
    const rect = span.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height
    };
  }

  // === PHYSICS UTILITY FUNCTIONS ===

  // Clamp value between min and max
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  // Smooth interpolation
  function lerp(current, target, factor) {
    return current + (target - current) * factor;
  }

  // Spring force calculation (Hooke's law with damping)
  function calculateSpringForce(displacement, velocity, stiffness, damping) {
    const springForce = -stiffness * displacement;
    const dampingForce = -damping * velocity;
    return springForce + dampingForce;
  }

  // Calculate distance-based force falloff (inverse square with smoothing)
  function calculateForceFalloff(distance, maxRadius, coreRadius) {
    if (distance > maxRadius) return 0;
    if (distance < coreRadius) {
      // Strong force in core zone
      return 1.0;
    }
    // Smooth falloff outside core
    const normalizedDist = (distance - coreRadius) / (maxRadius - coreRadius);
    return Math.pow(1 - normalizedDist, 2.5);
  }

  // === CURSOR FORCE CALCULATION ===
  // Calculate the liquid disturbance force from cursor on a character
  function calculateCursorForce(charCenter, charState, deltaTime) {
    const dx = cursorState.x - charCenter.x;
    const dy = cursorState.y - charCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > LIQUID_CONFIG.maxInfluenceRadius) {
      return { forceX: 0, forceY: 0, torque: 0, skewForceX: 0, skewForceY: 0, stretchForce: 0 };
    }

    // Distance-based falloff
    const falloff = calculateForceFalloff(
      distance,
      LIQUID_CONFIG.maxInfluenceRadius,
      LIQUID_CONFIG.coreInfluenceRadius
    );

    // Direction from char to cursor (normalized)
    const dirX = distance > 0 ? dx / distance : 0;
    const dirY = distance > 0 ? dy / distance : 0;

    // Cursor speed and chaos calculation
    const cursorSpeed = cursorState.speed;
    const isChaotic = cursorSpeed > LIQUID_CONFIG.chaosThreshold;
    const chaosBoost = isChaotic ? LIQUID_CONFIG.chaosMultiplier : 1.0;

    // === PRIMARY DISPLACEMENT FORCE ===
    // Force pushes character AWAY from cursor (like liquid being displaced)
    const proximityForce = LIQUID_CONFIG.cursorForceMultiplier * falloff * chaosBoost;

    // Velocity-based force (cursor momentum transfers to liquid)
    const velocityForce = LIQUID_CONFIG.velocityForceMultiplier * cursorSpeed * falloff;

    // Combined force with direction
    // Push away from cursor + inherit cursor momentum
    const forceX = clamp(
      (-dirX * proximityForce) + (cursorState.velocityX * LIQUID_CONFIG.velocityInheritance * falloff),
      -LIQUID_CONFIG.maxForce,
      LIQUID_CONFIG.maxForce
    );
    const forceY = clamp(
      (-dirY * proximityForce) + (cursorState.velocityY * LIQUID_CONFIG.velocityInheritance * falloff),
      -LIQUID_CONFIG.maxForce,
      LIQUID_CONFIG.maxForce
    );

    // === TORQUE (rotational force) ===
    // Cross product for rotation direction
    const crossProduct = dx * cursorState.velocityY - dy * cursorState.velocityX;
    const torque = crossProduct * LIQUID_CONFIG.angularMomentum * falloff * 0.1;

    // === SKEW FORCES (liquid warping) ===
    // Skew based on perpendicular cursor movement relative to character
    const tangentX = -dirY;  // Perpendicular to radius
    const tangentY = dirX;

    // Project cursor velocity onto tangent
    const tangentialVel = cursorState.velocityX * tangentX + cursorState.velocityY * tangentY;

    // Skew force from cursor proximity and velocity
    const skewForceX = (dirY * proximityForce * 0.08) + (tangentialVel * falloff * 1.5);
    const skewForceY = (-dirX * proximityForce * 0.06) + (cursorState.velocityY * falloff * 0.8);

    // === STRETCH FORCE ===
    // Characters stretch towards/away from cursor
    const stretchForce = falloff * proximityForce * LIQUID_CONFIG.stretchTension * 0.002;

    return {
      forceX,
      forceY,
      torque,
      skewForceX,
      skewForceY,
      stretchForce,
      distance,
      falloff,
      isChaotic
    };
  }

  // === RIPPLE PROPAGATION ===
  // Calculate ripple force from neighboring characters
  function calculateRippleForces(charState, charIndex, allStates, deltaTime) {
    if (!LIQUID_CONFIG.rippleEnabled) return { rippleX: 0, rippleY: 0 };

    let rippleX = 0;
    let rippleY = 0;

    // Check neighboring characters within ripple distance
    for (let i = 0; i < allStates.length; i++) {
      if (i === charIndex) continue;

      const neighborState = allStates[i];
      const charDistance = Math.abs(i - charIndex);

      if (charDistance > LIQUID_CONFIG.maxRippleDistance) continue;

      // Ripple strength decreases with distance
      const rippleStrength = LIQUID_CONFIG.rippleStrength *
        Math.pow(LIQUID_CONFIG.rippleDecay, charDistance);

      // Delayed ripple based on distance
      const delay = charDistance * LIQUID_CONFIG.rippleDelay;

      // Neighbor's velocity influences this character
      rippleX += neighborState.velX * rippleStrength;
      rippleY += neighborState.velY * rippleStrength;

      // Also influenced by neighbor's position (spring connection)
      rippleX += (neighborState.posX - charState.posX) * rippleStrength * 0.3;
      rippleY += (neighborState.posY - charState.posY) * rippleStrength * 0.3;
    }

    return { rippleX, rippleY };
  }

  // === WOBBLE OSCILLATION ===
  // Generate organic wobble after disturbance
  function calculateWobble(charState, time, deltaTime) {
    if (!LIQUID_CONFIG.wobbleEnabled || charState.wobbleAmplitude < 0.01) {
      return { wobbleX: 0, wobbleY: 0, wobbleSkewX: 0, wobbleSkewY: 0, wobbleRotation: 0 };
    }

    const phase = charState.wobblePhase;
    const amp = charState.wobbleAmplitude * LIQUID_CONFIG.wobbleAmplitude;

    // Multi-frequency wobble for organic feel
    const t = time * 0.001;  // Convert to seconds
    const freqX = LIQUID_CONFIG.wobbleFrequencyX;
    const freqY = LIQUID_CONFIG.wobbleFrequencyY;
    const freqSkew = LIQUID_CONFIG.wobbleFrequencySkew;

    // Primary wobble
    const wobbleX = Math.sin(t * freqX + phase) * amp * 3;
    const wobbleY = Math.cos(t * freqY + phase * 1.3) * amp * 2;

    // Secondary harmonics for complexity
    const wobbleX2 = Math.sin(t * freqX * 1.7 + phase * 0.7) * amp * 1.5;
    const wobbleY2 = Math.cos(t * freqY * 1.4 + phase * 1.1) * amp * 1.2;

    // Skew wobble (different frequency for liquid feel)
    const wobbleSkewX = Math.sin(t * freqSkew + phase * 0.5) * amp * 8;
    const wobbleSkewY = Math.cos(t * freqSkew * 0.8 + phase * 0.8) * amp * 6;

    // Rotation wobble
    const wobbleRotation = Math.sin(t * freqSkew * 1.2 + phase) * amp * 4;

    // Decay wobble amplitude
    charState.wobbleAmplitude *= LIQUID_CONFIG.wobbleDecay;

    return {
      wobbleX: wobbleX + wobbleX2,
      wobbleY: wobbleY + wobbleY2,
      wobbleSkewX,
      wobbleSkewY,
      wobbleRotation
    };
  }

  // === MAIN PHYSICS UPDATE ===
  // Integrate physics for a single character
  function updateCharacterPhysics(span, charState, deltaTime, time, allStates) {
    const dt = deltaTime * 0.001;  // Convert to seconds
    const dtClamped = Math.min(dt, 0.033);  // Cap at ~30fps equivalent

    const charCenter = getCharCenter(span);

    // === CALCULATE ALL FORCES ===

    // 1. Cursor disturbance force
    const cursorForces = calculateCursorForce(charCenter, charState, dtClamped);

    // 2. Ripple forces from neighbors
    const rippleForces = calculateRippleForces(charState, charState.index, allStates, dtClamped);

    // 3. Wobble oscillation
    const wobble = calculateWobble(charState, time, dtClamped);

    // 4. Spring restoration forces (return to rest position)
    const springForceX = calculateSpringForce(
      charState.posX,
      charState.velX,
      LIQUID_CONFIG.springStiffness,
      LIQUID_CONFIG.springStiffness * LIQUID_CONFIG.damping
    );
    const springForceY = calculateSpringForce(
      charState.posY,
      charState.velY,
      LIQUID_CONFIG.springStiffness,
      LIQUID_CONFIG.springStiffness * LIQUID_CONFIG.damping
    );

    // Spring forces for rotation and skew
    const springForceRot = calculateSpringForce(
      charState.rotation,
      charState.rotVel,
      LIQUID_CONFIG.springStiffness * 0.8,
      LIQUID_CONFIG.springStiffness * LIQUID_CONFIG.damping * 0.9
    );
    const springForceSkewX = calculateSpringForce(
      charState.skewX,
      charState.skewVelX,
      LIQUID_CONFIG.springStiffness * 0.6,
      LIQUID_CONFIG.springStiffness * LIQUID_CONFIG.damping * 0.85
    );
    const springForceSkewY = calculateSpringForce(
      charState.skewY,
      charState.skewVelY,
      LIQUID_CONFIG.springStiffness * 0.6,
      LIQUID_CONFIG.springStiffness * LIQUID_CONFIG.damping * 0.85
    );

    // Spring forces for scale
    const springForceScaleX = calculateSpringForce(
      charState.scaleX - 1,
      charState.scaleVelX,
      LIQUID_CONFIG.springStiffness * 1.2,
      LIQUID_CONFIG.springStiffness * LIQUID_CONFIG.damping
    );
    const springForceScaleY = calculateSpringForce(
      charState.scaleY - 1,
      charState.scaleVelY,
      LIQUID_CONFIG.springStiffness * 1.2,
      LIQUID_CONFIG.springStiffness * LIQUID_CONFIG.damping
    );

    // === COMBINE FORCES AND INTEGRATE ===

    // Total accelerations
    charState.accX = (cursorForces.forceX + rippleForces.rippleX + springForceX) / LIQUID_CONFIG.mass;
    charState.accY = (cursorForces.forceY + rippleForces.rippleY + springForceY) / LIQUID_CONFIG.mass;
    charState.rotAcc = (cursorForces.torque + springForceRot) / LIQUID_CONFIG.mass;

    // === VELOCITY INTEGRATION (with viscosity) ===
    const viscosityFactor = 1 - LIQUID_CONFIG.viscosity;

    charState.velX = (charState.velX + charState.accX * dtClamped) * viscosityFactor;
    charState.velY = (charState.velY + charState.accY * dtClamped) * viscosityFactor;
    charState.rotVel = (charState.rotVel + charState.rotAcc * dtClamped) * viscosityFactor;

    // Skew velocity
    charState.skewVelX = (charState.skewVelX + cursorForces.skewForceX * dtClamped + springForceSkewX * dtClamped) * viscosityFactor;
    charState.skewVelY = (charState.skewVelY + cursorForces.skewForceY * dtClamped + springForceSkewY * dtClamped) * viscosityFactor;

    // Scale velocity
    charState.scaleVelX = (charState.scaleVelX + cursorForces.stretchForce * Math.abs(cursorForces.forceX) * 0.001 + springForceScaleX * dtClamped) * viscosityFactor;
    charState.scaleVelY = (charState.scaleVelY + cursorForces.stretchForce * Math.abs(cursorForces.forceY) * 0.001 + springForceScaleY * dtClamped) * viscosityFactor;

    // === POSITION INTEGRATION ===
    charState.posX += charState.velX * dtClamped;
    charState.posY += charState.velY * dtClamped;
    charState.rotation += charState.rotVel * dtClamped;
    charState.skewX += charState.skewVelX * dtClamped;
    charState.skewY += charState.skewVelY * dtClamped;
    charState.scaleX += charState.scaleVelX * dtClamped;
    charState.scaleY += charState.scaleVelY * dtClamped;

    // === ADD WOBBLE ===
    const displayPosX = charState.posX + wobble.wobbleX;
    const displayPosY = charState.posY + wobble.wobbleY;
    const displaySkewX = charState.skewX + wobble.wobbleSkewX;
    const displaySkewY = charState.skewY + wobble.wobbleSkewY;
    const displayRotation = charState.rotation + wobble.wobbleRotation;

    // === TRIGGER WOBBLE ON DISTURBANCE ===
    if (cursorForces.falloff > 0.1 || Math.abs(charState.velX) > 50 || Math.abs(charState.velY) > 50) {
      const disturbanceStrength = Math.max(
        cursorForces.falloff,
        Math.sqrt(charState.velX * charState.velX + charState.velY * charState.velY) * 0.01
      );
      charState.wobbleAmplitude = Math.max(charState.wobbleAmplitude, disturbanceStrength * 0.8);
    }

    // === APPLY LIMITS ===
    const finalPosX = clamp(displayPosX, -LIQUID_CONFIG.maxTranslateX, LIQUID_CONFIG.maxTranslateX);
    const finalPosY = clamp(displayPosY, -LIQUID_CONFIG.maxTranslateY, LIQUID_CONFIG.maxTranslateY);
    const finalRotation = clamp(displayRotation, -LIQUID_CONFIG.maxRotation, LIQUID_CONFIG.maxRotation);
    const finalSkewX = clamp(displaySkewX, -LIQUID_CONFIG.maxSkewX, LIQUID_CONFIG.maxSkewX);
    const finalSkewY = clamp(displaySkewY, -LIQUID_CONFIG.maxSkewY, LIQUID_CONFIG.maxSkewY);
    const finalScaleX = clamp(charState.scaleX, 1 - LIQUID_CONFIG.maxScaleDeviation, 1 + LIQUID_CONFIG.maxScaleDeviation);
    const finalScaleY = clamp(charState.scaleY, 1 - LIQUID_CONFIG.maxScaleDeviation, 1 + LIQUID_CONFIG.maxScaleDeviation);

    // === KINETIC ENERGY (for settling detection) ===
    charState.kineticEnergy = 0.5 * LIQUID_CONFIG.mass * (
      charState.velX * charState.velX +
      charState.velY * charState.velY +
      charState.rotVel * charState.rotVel * 0.1
    );

    return {
      posX: finalPosX,
      posY: finalPosY,
      rotation: finalRotation,
      skewX: finalSkewX,
      skewY: finalSkewY,
      scaleX: finalScaleX,
      scaleY: finalScaleY,
      distortionMagnitude: Math.abs(finalSkewX) + Math.abs(finalSkewY) + Math.abs(finalRotation) * 0.5,
      speed: Math.sqrt(charState.velX * charState.velX + charState.velY * charState.velY)
    };
  }

  // === APPLY LIQUID TRANSFORM ===
  function applyLiquidTransform(span, transforms) {
    // Build transform string - order matters for proper liquid feel
    const transform = [
      `translate(${transforms.posX.toFixed(2)}px, ${transforms.posY.toFixed(2)}px)`,
      `rotate(${transforms.rotation.toFixed(2)}deg)`,
      `skewX(${transforms.skewX.toFixed(2)}deg)`,
      `skewY(${transforms.skewY.toFixed(2)}deg)`,
      `scale(${transforms.scaleX.toFixed(4)}, ${transforms.scaleY.toFixed(4)})`
    ].join(' ');

    span.style.transform = transform;

    // === MOTION BLUR (based on speed) ===
    const blurAmount = Math.min(
      transforms.speed * LIQUID_CONFIG.blurIntensity,
      LIQUID_CONFIG.maxBlur
    );

    // === GLOW ON HIGH DISTORTION ===
    let filter = '';
    if (blurAmount > 0.1) {
      filter = `blur(${blurAmount.toFixed(2)}px)`;
    }

    if (LIQUID_CONFIG.glowOnDistortion && transforms.distortionMagnitude > LIQUID_CONFIG.glowThreshold) {
      const glowIntensity = (transforms.distortionMagnitude - LIQUID_CONFIG.glowThreshold) * 0.5;
      const glowAmount = Math.min(glowIntensity, 15);
      filter += ` drop-shadow(0 0 ${glowAmount.toFixed(1)}px rgba(var(--color-accent-rgb), ${Math.min(glowIntensity * 0.03, 0.4).toFixed(2)}))`;
    }

    span.style.filter = filter || '';
  }

  // === MAIN LIQUID PHYSICS ANIMATION LOOP ===
  function updateLiquidPhysics() {
    if (prefersReducedMotion) return;

    const now = performance.now();
    const deltaTime = now - cursorState.lastTime;
    cursorState.lastTime = now;

    // === UPDATE CURSOR PHYSICS ===
    const rawVelocityX = cursorState.x - cursorState.prevX;
    const rawVelocityY = cursorState.y - cursorState.prevY;

    // Calculate acceleration (change in velocity)
    const prevVelX = cursorState.velocityX;
    const prevVelY = cursorState.velocityY;

    // Smooth velocity with history for more stable physics
    cursorState.velocityHistory.push({ x: rawVelocityX, y: rawVelocityY });
    if (cursorState.velocityHistory.length > cursorState.maxVelocityHistory) {
      cursorState.velocityHistory.shift();
    }

    // Average velocity for smoother physics
    let avgVelX = 0, avgVelY = 0;
    cursorState.velocityHistory.forEach(v => {
      avgVelX += v.x;
      avgVelY += v.y;
    });
    avgVelX /= cursorState.velocityHistory.length;
    avgVelY /= cursorState.velocityHistory.length;

    cursorState.velocityX = lerp(cursorState.velocityX || 0, avgVelX, 0.4);
    cursorState.velocityY = lerp(cursorState.velocityY || 0, avgVelY, 0.4);

    // Acceleration
    cursorState.accelerationX = cursorState.velocityX - prevVelX;
    cursorState.accelerationY = cursorState.velocityY - prevVelY;

    // Speed calculation
    cursorState.prevSpeed = cursorState.speed;
    cursorState.speed = Math.sqrt(
      cursorState.velocityX * cursorState.velocityX +
      cursorState.velocityY * cursorState.velocityY
    );

    // Chaos level tracking
    if (cursorState.speed > LIQUID_CONFIG.chaosThreshold) {
      cursorState.lastHighSpeedTime = now;
      cursorState.chaosLevel = Math.min(cursorState.chaosLevel + 0.1, 1.0);
    } else {
      const timeSinceHighSpeed = (now - cursorState.lastHighSpeedTime) * 0.001;
      if (timeSinceHighSpeed > LIQUID_CONFIG.chaosDuration) {
        cursorState.chaosLevel = Math.max(cursorState.chaosLevel - 0.02, 0);
      }
    }

    cursorState.prevX = cursorState.x;
    cursorState.prevY = cursorState.y;

    // === COLLECT ALL PHYSICS STATES ===
    const allStates = [];
    allCharSpans.forEach(span => {
      const state = charPhysicsStates.get(span);
      if (state) allStates.push(state);
    });

    // === UPDATE PHYSICS FOR EACH CHARACTER ===
    allCharSpans.forEach((span, globalIndex) => {
      let physicsState = charPhysicsStates.get(span);

      if (!physicsState) {
        // Determine which element this span belongs to
        const firstNameState = elementStates.get(firstName);
        const isFirstName = firstNameState && firstNameState.charSpans.includes(span);
        const elementIndex = isFirstName ? 0 : 1;
        const localIndex = isFirstName
          ? firstNameState.charSpans.indexOf(span)
          : elementStates.get(lastName).charSpans.indexOf(span);
        const totalInElement = isFirstName
          ? firstNameState.charSpans.length
          : elementStates.get(lastName).charSpans.length;

        physicsState = initCharPhysicsState(span, localIndex, totalInElement, elementIndex);
      }

      // Update physics and get render transforms
      const transforms = updateCharacterPhysics(span, physicsState, deltaTime, now, allStates);

      // Apply transforms to DOM
      applyLiquidTransform(span, transforms);
    });

    // Continue animation loop
    cursorState.rafId = requestAnimationFrame(updateLiquidPhysics);
  }

  // Start liquid physics simulation
  function startLiquidPhysics() {
    if (cursorState.rafId) return;
    cursorState.lastTime = performance.now();

    // Build global list of all character spans for liquid physics
    allCharSpans = [];
    [firstName, lastName].forEach((element, elementIndex) => {
      const state = elementStates.get(element);
      if (state && state.charSpans) {
        state.charSpans.forEach((span, index) => {
          allCharSpans.push(span);
          // Initialize physics state if not exists
          if (!charPhysicsStates.has(span)) {
            initCharPhysicsState(span, index, state.charSpans.length, elementIndex);
          }
        });
      }
    });

    cursorState.rafId = requestAnimationFrame(updateLiquidPhysics);
  }

  // Stop liquid physics (cleanup)
  function stopLiquidPhysics() {
    if (cursorState.rafId) {
      cancelAnimationFrame(cursorState.rafId);
      cursorState.rafId = null;
    }
  }

  // Handle mouse movement over name elements
  function handleNameMouseMove(e) {
    cursorState.x = e.clientX;
    cursorState.y = e.clientY;
  }

  // Handle mouse enter on name elements
  function handleNameMouseEnter(e) {
    cursorState.isOverName = true;
    cursorState.activeElement = e.currentTarget;
    cursorState.x = e.clientX;
    cursorState.y = e.clientY;
    cursorState.prevX = e.clientX;
    cursorState.prevY = e.clientY;
  }

  // Handle mouse leave on name elements
  function handleNameMouseLeave() {
    cursorState.isOverName = false;
    cursorState.activeElement = null;
  }

  // Setup liquid physics tracking for both name elements
  function setupLiquidTracking(element) {
    element.addEventListener('mousemove', handleNameMouseMove);
    element.addEventListener('mouseenter', handleNameMouseEnter);
    element.addEventListener('mouseleave', handleNameMouseLeave);

    // Also track mouse movement globally for better physics continuity
    document.addEventListener('mousemove', (e) => {
      // Always update cursor position for physics calculations
      cursorState.x = e.clientX;
      cursorState.y = e.clientY;
    });
  }

  // Initialize physics states for all character spans
  function initAllPhysicsStates() {
    [firstName, lastName].forEach((element, elementIndex) => {
      const state = elementStates.get(element);
      if (state && state.charSpans) {
        state.charSpans.forEach((span, index) => {
          initCharPhysicsState(span, index, state.charSpans.length, elementIndex);
        });
      }
    });
  }

  // ===== CHARACTER-BY-CHARACTER FONT CYCLING - 2 second intervals with wave effect =====
  function transitionCharactersToFont(element, newFontClass) {
    const state = elementStates.get(element);
    if (!state || state.isFontFrozen) return;

    const charSpans = state.charSpans;

    // Wave transition: each character transitions with a staggered delay
    charSpans.forEach((span, index) => {
      setTimeout(() => {
        // Remove old font class
        fontClasses.forEach(cls => span.classList.remove(cls));

        // Add transitioning state for pulse animation
        span.classList.add('char-transitioning');

        // Apply new font
        span.classList.add(newFontClass);

        // Remove transitioning class after animation
        setTimeout(() => {
          span.classList.remove('char-transitioning');
        }, 400);
      }, index * CHAR_TRANSITION_DELAY);
    });
  }

  function startFontCycling() {
    if (fontCycleTimeout) return;

    function cycleFont() {
      const state1 = elementStates.get(firstName);
      const state2 = elementStates.get(lastName);

      // Only cycle when NOT hovering (not frozen)
      if (!state1.isFontFrozen && !state2.isFontFrozen) {
        // Move to next font
        currentFontIndex = (currentFontIndex + 1) % fontClasses.length;
        const newFontClass = fontClasses[currentFontIndex];

        // Transition characters with wave effect
        transitionCharactersToFont(firstName, newFontClass);
        transitionCharactersToFont(lastName, newFontClass);

        // Also update parent class for hover freeze inheritance
        fontClasses.forEach(cls => {
          firstName.classList.remove(cls);
          lastName.classList.remove(cls);
        });
        firstName.classList.add(newFontClass);
        lastName.classList.add(newFontClass);
      }

      // Schedule next cycle
      fontCycleTimeout = setTimeout(cycleFont, FONT_CYCLE_SPEED);
    }

    // Start the cycle
    fontCycleTimeout = setTimeout(cycleFont, FONT_CYCLE_SPEED);
  }

  function freezeFont(element) {
    const state = elementStates.get(element);
    state.isFontFrozen = true;
    state.frozenFontClass = fontClasses[currentFontIndex];
    element.classList.add('font-frozen');
  }

  function unfreezeFont(element) {
    const state = elementStates.get(element);
    state.isFontFrozen = false;
    state.frozenFontClass = null;
    element.classList.remove('font-frozen');
  }

  // ===== START/STOP GLITCH EFFECT =====
  function startGlitchEffect(element) {
    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) return;

    const state = elementStates.get(element);
    state.isGlitching = true;

    // FREEZE the current font when hover starts
    freezeFont(element);

    // Add is-glitching class to activate ::before/::after pseudo-elements
    element.classList.add('is-glitching');

    // Ensure data-text attribute is set for content: attr(data-text)
    const text = element.getAttribute('data-text') || element.textContent.trim();
    element.setAttribute('data-text', text);
  }

  function stopGlitchEffect(element) {
    const state = elementStates.get(element);
    state.isGlitching = false;

    // Remove is-glitching class - pseudo-elements will stop animating
    element.classList.remove('is-glitching');

    // UNFREEZE font - resume cycling
    unfreezeFont(element);
  }

  // ===== EVENT HANDLERS =====
  function setupElementEvents(element) {
    element.addEventListener('mouseenter', () => {
      startGlitchEffect(element);
    });

    element.addEventListener('mouseleave', () => {
      stopGlitchEffect(element);
    });

    // Touch support
    element.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startGlitchEffect(element);
    }, { passive: false });

    element.addEventListener('touchend', () => {
      stopGlitchEffect(element);
    });
  }

  // Setup events for both name elements
  setupElementEvents(firstName);
  setupElementEvents(lastName);

  // ===== INITIALIZATION =====
  // Wait for entrance animation to complete before setting up effects
  // The title-reveal animation takes 1s, plus 0.15s delay for second line
  setTimeout(() => {
    // Mark animation as complete for CSS
    firstName.classList.add('animation-complete');
    lastName.classList.add('animation-complete');

    // Ensure text is visible
    firstName.style.opacity = '1';
    firstName.style.visibility = 'visible';
    lastName.style.opacity = '1';
    lastName.style.visibility = 'visible';
  }, 1500);

  // Set initial font on all character spans
  const initialFont = fontClasses[0];

  const state1 = elementStates.get(firstName);
  const state2 = elementStates.get(lastName);

  state1.charSpans.forEach(span => {
    span.classList.add(initialFont);
  });
  state2.charSpans.forEach(span => {
    span.classList.add(initialFont);
  });

  // Also set on parent elements
  firstName.classList.add(initialFont);
  lastName.classList.add(initialFont);

  // Start smooth font cycling (every 2 seconds with character wave)
  startFontCycling();

  // ===== LIQUID PHYSICS INITIALIZATION =====
  // Initialize physics states for all characters
  initAllPhysicsStates();

  // Setup liquid physics tracking for both name elements
  setupLiquidTracking(firstName);
  setupLiquidTracking(lastName);

  // Start the liquid physics animation loop
  startLiquidPhysics();

  // Cleanup on page unload
  window.addEventListener('beforeunload', stopLiquidPhysics);

  console.log('%c🌊 LIQUID PHYSICS ACTIVE 🌊', 'color: #00FF88; font-size: 20px; font-weight: bold;');
  console.log('✅ ASHISH & UPADHYAY: Physics-accurate liquid distortion with spring-mass simulation');
  console.log('✅ Font cycling every 500ms through 10 iconic coding fonts with signature colors');
  console.log('✅ Hover over names for extreme liquid distortion, twist, and wobble effects');
}

// =====================================
// GLOBAL FUNCTIONS
// =====================================

window.requestPreciseLocation = requestPreciseLocation;

// =====================================
// OPEN SOURCE SIZE - LUXURY ENTRANCE ANIMATION
// Cinematic reveal sequence inspired by high-end fashion houses
// =====================================

function initLabEntranceAnimation() {
  const labSection = document.getElementById('lab');
  const entranceOverlay = document.getElementById('lab-entrance');
  const labContent = document.querySelector('.lab-content-container');
  const labHeader = document.querySelector('.lab-section-header');
  const scrollCue = document.querySelector('.entrance-scroll-cue');
  const personalProjectsLabel = document.querySelector('.lab-section-header .section-label');

  if (!labSection || !entranceOverlay) {
    console.log('Lab entrance elements not found');
    return;
  }

  // State tracking
  let hasPlayed = false;
  let isAnimating = false;
  let entranceTrigger = null;
  let userHasScrolledPastConvergence = false;

  // Configuration
  const ANIMATION_DURATION = 4000; // Total entrance duration
  const EXIT_DURATION = 800; // Exit animation duration
  const TRIGGER_THRESHOLD = 0.3; // How much of lab section must be visible

  // Track user scroll AFTER convergence completes to prevent auto-trigger
  let lastScrollY = window.scrollY;
  let scrollTrackingEnabled = false;
  const scrollListener = () => {
    if (!scrollTrackingEnabled) return;

    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    console.log('Scroll event - delta:', scrollDelta, 'enabled:', userHasScrolledPastConvergence);

    // Only count forward scrolling (scrolling down)
    if (scrollDelta > 50) {
      userHasScrolledPastConvergence = true;
      console.log('✅ User scroll detected after convergence - entrance trigger enabled');
      window.removeEventListener('scroll', scrollListener);
    }
    lastScrollY = currentScrollY;
  };

  // Listen for convergence completion to enable scroll tracking
  window.addEventListener('convergenceCompleted', () => {
    console.log('📢 Convergence completed event received - enabling scroll tracking');
    lastScrollY = window.scrollY;
    scrollTrackingEnabled = true;
    window.addEventListener('scroll', scrollListener);
  });

  // Create GSAP ScrollTrigger for entrance
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    // Use the Personal Projects label as the trigger point
    const triggerElement = personalProjectsLabel || labSection;

    entranceTrigger = ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 70%',
      end: 'top 30%',
      onEnter: () => {
        console.log('🎯 Lab entrance ScrollTrigger fired', {
          convergenceJustCompleted: window.convergenceJustCompleted,
          userHasScrolledPastConvergence,
          hasPlayed,
          isAnimating
        });

        // Block if convergence just completed
        if (window.convergenceJustCompleted) {
          console.log('❌ Lab entrance trigger blocked - convergence just completed');
          return;
        }

        // Block if user hasn't scrolled after convergence
        if (!userHasScrolledPastConvergence) {
          console.log('❌ Lab entrance trigger blocked - waiting for user scroll after convergence');
          return;
        }

        if (!hasPlayed && !isAnimating) {
          console.log('✅ Lab entrance animation triggering at Personal Projects label');
          playEntranceAnimation();
        }
      },
      onLeaveBack: () => {
        // Hide entrance overlay when scrolling back above the trigger
        if (entranceOverlay.classList.contains('active') ||
            entranceOverlay.classList.contains('fade-out')) {
          entranceOverlay.classList.remove('active', 'exit', 'fade-out');
          entranceOverlay.style.display = 'none';
        }
      },
      invalidateOnRefresh: true
    });

    console.log('Lab entrance ScrollTrigger created with adjusted trigger point');
  } else {
    // Fallback: Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasPlayed && !isAnimating) {
          playEntranceAnimation();
        }
      });
    }, {
      threshold: TRIGGER_THRESHOLD
    });

    observer.observe(labSection);
  }

  // Play entrance animation
  function playEntranceAnimation() {
    if (hasPlayed || isAnimating) return;

    isAnimating = true;
    hasPlayed = true;

    console.log('Playing luxury entrance animation...');

    // Disable scroll during animation
    if (lenis) {
      lenis.stop();
    }

    // Make sure overlay is visible
    entranceOverlay.style.display = 'flex';

    // Show entrance overlay immediately without auto-scrolling
    setTimeout(() => {
      // Show entrance overlay
      entranceOverlay.classList.add('active');

      // Schedule automatic exit
      setTimeout(() => {
        exitEntranceAnimation();
      }, ANIMATION_DURATION);

    }, 100);
  }

  // Exit entrance animation
  function exitEntranceAnimation() {
    if (!entranceOverlay.classList.contains('active')) return;

    console.log('Exiting entrance animation...');

    // Add exit class for exit animations
    entranceOverlay.classList.add('exit');

    // Re-enable scroll
    if (lenis) {
      lenis.start();
    }

    // After exit animation completes
    setTimeout(() => {
      // Hide overlay completely
      entranceOverlay.classList.remove('active', 'exit');
      entranceOverlay.classList.add('fade-out');

      // Hide the overlay from the layout to prevent empty space
      setTimeout(() => {
        entranceOverlay.style.display = 'none';
      }, 300);

      // Reveal lab content
      if (labContent) {
        labContent.classList.add('revealed');
      }

      // Show static header
      if (labHeader) {
        labHeader.classList.add('visible');
      }

      isAnimating = false;

      // Refresh ScrollTrigger for any new animations
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }

    }, EXIT_DURATION);
  }

  // Click on scroll cue to skip/exit
  if (scrollCue) {
    scrollCue.addEventListener('click', () => {
      if (entranceOverlay.classList.contains('active') && !entranceOverlay.classList.contains('exit')) {
        exitEntranceAnimation();
      }
    });
  }

  // Keyboard escape to skip
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && entranceOverlay.classList.contains('active') && !entranceOverlay.classList.contains('exit')) {
      exitEntranceAnimation();
    }
  });

  // Click anywhere on overlay to skip (after initial animation)
  entranceOverlay.addEventListener('click', (e) => {
    // Only allow skip after 2 seconds
    if (entranceOverlay.classList.contains('active') && !entranceOverlay.classList.contains('exit')) {
      const timeSinceActive = entranceOverlay.dataset.activeSince ?
        Date.now() - parseInt(entranceOverlay.dataset.activeSince) : 3000;

      if (timeSinceActive > 2000) {
        exitEntranceAnimation();
      }
    }
  });

  // Track when overlay becomes active
  const originalAddActive = entranceOverlay.classList.add.bind(entranceOverlay.classList);
  const activeObserver = new MutationObserver(() => {
    if (entranceOverlay.classList.contains('active') && !entranceOverlay.dataset.activeSince) {
      entranceOverlay.dataset.activeSince = Date.now().toString();
    } else if (!entranceOverlay.classList.contains('active')) {
      delete entranceOverlay.dataset.activeSince;
    }
  });
  activeObserver.observe(entranceOverlay, { attributes: true, attributeFilter: ['class'] });

  console.log('Lab entrance animation system initialized');
}

// Initialize lab entrance when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Delay initialization to ensure other animations are set up
  setTimeout(() => {
    initLabEntranceAnimation();
  }, 100);
});

// Also initialize after window load for safety
window.addEventListener('load', () => {
  setTimeout(() => {
    // Re-check if not already initialized
    const entranceOverlay = document.getElementById('lab-entrance');
    if (entranceOverlay && !entranceOverlay.dataset.initialized) {
      entranceOverlay.dataset.initialized = 'true';
      initLabEntranceAnimation();
    }
  }, 1000);
});

// =====================================
// MUSEUM CAROUSEL - Geneva Mechanism
// Premium circular carousel with physics
// =====================================

class MuseumCarousel {
  constructor(container, projects) {
    this.container = container;
    this.projects = projects;
    this.filteredProjects = [...projects];
    this.track = container.querySelector('#carousel-track');
    this.dotsContainer = container.querySelector('#carousel-dots');
    this.progressFill = container.querySelector('#carousel-progress-fill');
    this.arrowLeft = container.querySelector('.carousel-arrow-left');
    this.arrowRight = container.querySelector('.carousel-arrow-right');

    // State
    this.currentIndex = 0;
    this.rotation = 0;
    this.targetRotation = 0;
    this.velocity = 0;
    this.isDragging = false;
    this.startX = 0;
    this.startRotation = 0;
    this.lastX = 0;
    this.lastTime = 0;
    this.momentumId = null;
    this.isAnimating = false;

    // Physics Constants - Geneva Mechanism inspired
    this.friction = 0.92;           // Deceleration factor
    this.snapThreshold = 0.5;       // Velocity threshold for snapping
    this.momentumMultiplier = 0.15; // Swipe to rotation conversion
    this.snapStrength = 0.12;       // Spring snap strength
    this.maxVelocity = 25;          // Maximum rotation velocity

    // Carousel geometry
    this.cardAngle = 0;
    this.radius = 0;

    this.init();
  }

  init() {
    this.createCards();
    this.createDots();
    this.calculateGeometry();
    this.bindEvents();
    this.updateCarousel(false);
    this.observeVisibility();

    // Mark as entering initially
    this.container.classList.add('is-entering');
  }

  calculateGeometry() {
    const numCards = this.filteredProjects.length;
    this.cardAngle = 360 / numCards;
    // Radius based on card width and number of cards
    const cardWidth = 520; // Updated to match new larger card size
    this.radius = (cardWidth * 1.2) / (2 * Math.sin(Math.PI / numCards));
    this.radius = Math.max(this.radius, 700); // Minimum radius increased for larger cards
    this.radius = Math.min(this.radius, 1600); // Maximum radius increased for larger cards

    console.log('calculateGeometry - numCards:', numCards, 'cardAngle:', this.cardAngle, 'radius:', this.radius);
  }

  createCards() {
    this.track.innerHTML = '';

    this.filteredProjects.forEach((project, index) => {
      const card = document.createElement('div');
      card.className = 'carousel-card';
      card.dataset.index = index;
      card.dataset.id = project.id;
      card.dataset.categories = project.categories.join(' ');

      const mediaHTML = project.video
        ? `<div class="carousel-card-video">
             <iframe src="${project.video}"
                     frameborder="0"
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen
                     loading="lazy">
             </iframe>
           </div>`
        : project.image
        ? `<div class="carousel-card-image">
             <img src="${project.image}" alt="${project.title}" loading="lazy">
           </div>`
        : `<div class="carousel-card-image" style="background: linear-gradient(135deg, var(--color-bg-secondary), var(--color-bg-tertiary));"></div>`;

      const categoryBadges = project.categories
        .map(cat => `<span class="badge">${cat}</span>`)
        .join('');

      const techTags = project.tech
        .slice(0, 4)
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');

      const actionsHTML = `
        <div class="carousel-card-actions">
          ${project.github ? `
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="carousel-card-link">
              <i class="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          ` : ''}
          ${project.video ? `
            <a href="${project.video.replace('/embed/', '/watch?v=')}" target="_blank" rel="noopener noreferrer" class="carousel-card-link">
              <i class="fas fa-play"></i>
              <span>Watch</span>
            </a>
          ` : ''}
        </div>
      `;

      card.innerHTML = `
        <div class="carousel-card-inner">
          <div class="carousel-card-badge">${categoryBadges}</div>
          ${mediaHTML}
          <div class="carousel-card-content">
            <h3 class="carousel-card-title">${project.title}</h3>
            <p class="carousel-card-description">${project.description}</p>
          </div>
          <div class="carousel-card-footer">
            <div class="carousel-card-tech">${techTags}</div>
            ${actionsHTML}
            <div class="carousel-card-meta">
              <span class="carousel-card-number">${String(index + 1).padStart(2, '0')} / ${String(this.filteredProjects.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      `;

      // Click handler for non-active cards
      card.addEventListener('click', (e) => {
        if (!card.classList.contains('is-active') && !this.isDragging) {
          e.preventDefault();
          this.goToIndex(index);
        }
      });

      this.track.appendChild(card);
    });

    this.cards = this.track.querySelectorAll('.carousel-card');
  }

  createDots() {
    this.dotsContainer.innerHTML = '';

    this.filteredProjects.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Go to project ${index + 1}`);
      dot.dataset.index = index;

      dot.addEventListener('click', () => this.goToIndex(index));

      this.dotsContainer.appendChild(dot);
    });

    this.dots = this.dotsContainer.querySelectorAll('.carousel-dot');
  }

  bindEvents() {
    // Arrow navigation
    this.arrowLeft.addEventListener('click', () => this.prev());
    this.arrowRight.addEventListener('click', () => this.next());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.isInViewport()) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.next();
      }
    });

    // Touch/Mouse drag
    this.track.addEventListener('mousedown', (e) => this.onDragStart(e));
    this.track.addEventListener('touchstart', (e) => this.onDragStart(e), { passive: true });

    document.addEventListener('mousemove', (e) => this.onDragMove(e));
    document.addEventListener('touchmove', (e) => this.onDragMove(e), { passive: false });

    document.addEventListener('mouseup', (e) => this.onDragEnd(e));
    document.addEventListener('touchend', (e) => this.onDragEnd(e));

    // Prevent context menu on long press
    this.track.addEventListener('contextmenu', (e) => {
      if (this.isDragging) e.preventDefault();
    });

    // Resize handler
    window.addEventListener('resize', () => {
      this.calculateGeometry();
      this.updateCarousel(false);
    });
  }

  onDragStart(e) {
    if (this.isAnimating) return;

    this.isDragging = true;
    this.startX = this.getClientX(e);
    this.startRotation = this.rotation;
    this.lastX = this.startX;
    this.lastTime = Date.now();
    this.velocity = 0;

    // Stop any ongoing momentum
    if (this.momentumId) {
      cancelAnimationFrame(this.momentumId);
      this.momentumId = null;
    }

    this.track.classList.remove('is-animating', 'geneva-snap', 'has-momentum');
  }

  onDragMove(e) {
    if (!this.isDragging) return;

    const currentX = this.getClientX(e);
    const deltaX = currentX - this.lastX;
    const currentTime = Date.now();
    const deltaTime = currentTime - this.lastTime;

    // Calculate velocity (pixels per millisecond)
    if (deltaTime > 0) {
      this.velocity = deltaX / deltaTime;
    }

    // Update rotation based on drag
    const dragDelta = currentX - this.startX;
    const rotationDelta = (dragDelta / window.innerWidth) * 180;
    this.rotation = this.startRotation + rotationDelta;

    this.updateCarousel(false);

    this.lastX = currentX;
    this.lastTime = currentTime;

    // Prevent scrolling on touch
    if (e.cancelable && e.type === 'touchmove') {
      e.preventDefault();
    }
  }

  onDragEnd(e) {
    if (!this.isDragging) return;

    this.isDragging = false;

    // Apply momentum based on velocity
    const velocityRotation = this.velocity * this.momentumMultiplier * 1000;

    if (Math.abs(velocityRotation) > this.snapThreshold) {
      this.applyMomentum(velocityRotation);
    } else {
      this.snapToNearest();
    }
  }

  applyMomentum(initialVelocity) {
    // Clamp initial velocity
    let velocity = Math.max(-this.maxVelocity, Math.min(this.maxVelocity, initialVelocity));

    this.track.classList.add('has-momentum');

    if (Math.abs(velocity) > 15) {
      this.track.classList.add('velocity-high');
    }

    const animate = () => {
      // Apply friction
      velocity *= this.friction;

      // Update rotation
      this.rotation += velocity;
      this.updateCarousel(false);

      // Check if we should stop and snap
      if (Math.abs(velocity) < this.snapThreshold) {
        this.track.classList.remove('has-momentum', 'velocity-high');
        this.snapToNearest();
        return;
      }

      this.momentumId = requestAnimationFrame(animate);
    };

    this.momentumId = requestAnimationFrame(animate);
  }

  snapToNearest() {
    // Calculate nearest card index based on current rotation
    let normalizedRotation = ((this.rotation % 360) + 360) % 360;
    let nearestIndex = Math.round(normalizedRotation / this.cardAngle);
    nearestIndex = nearestIndex % this.filteredProjects.length;

    // Wrap to valid index
    if (nearestIndex < 0) nearestIndex += this.filteredProjects.length;
    if (nearestIndex >= this.filteredProjects.length) nearestIndex = 0;

    this.goToIndex(nearestIndex, true);
  }

  goToIndex(index, isSnap = false) {
    if (this.isAnimating && !isSnap) return;

    this.currentIndex = index;

    // Calculate target rotation
    this.targetRotation = index * this.cardAngle;

    // Normalize current rotation to find shortest path
    const currentNormalized = ((this.rotation % 360) + 360) % 360;
    let delta = this.targetRotation - currentNormalized;

    // Take the shorter path around the circle
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    this.rotation = currentNormalized + delta;

    // Animate with Geneva mechanism snap effect
    this.isAnimating = true;
    this.track.classList.add(isSnap ? 'geneva-snap' : 'is-animating');

    // Use GSAP for smooth animation
    if (typeof gsap !== 'undefined') {
      gsap.to(this, {
        rotation: this.targetRotation,
        duration: isSnap ? 0.5 : 0.6,
        ease: isSnap ? 'back.out(1.7)' : 'power3.out',
        onUpdate: () => this.updateCarousel(false),
        onComplete: () => {
          this.isAnimating = false;
          this.track.classList.remove('is-animating', 'geneva-snap');
          this.rotation = this.targetRotation;
        }
      });
    } else {
      // Fallback without GSAP
      this.rotation = this.targetRotation;
      this.updateCarousel(true);
      setTimeout(() => {
        this.isAnimating = false;
        this.track.classList.remove('is-animating', 'geneva-snap');
      }, 600);
    }

    this.updateDots();
    this.updateProgress();
  }

  next() {
    const newIndex = (this.currentIndex + 1) % this.filteredProjects.length;
    this.goToIndex(newIndex);
  }

  prev() {
    const newIndex = (this.currentIndex - 1 + this.filteredProjects.length) % this.filteredProjects.length;
    this.goToIndex(newIndex);
  }

  updateCarousel(animate = true) {
    const numCards = this.filteredProjects.length;
    const normalizedRotation = ((this.rotation % 360) + 360) % 360;

    console.log('updateCarousel called - numCards:', numCards, 'cards.length:', this.cards.length);

    this.cards.forEach((card, index) => {
      // Calculate card's position in the circle
      const cardRotation = (index * this.cardAngle - normalizedRotation + 360) % 360;

      // Normalize to -180 to 180 for easier center detection
      let normalizedCardRotation = cardRotation;
      if (normalizedCardRotation > 180) normalizedCardRotation -= 360;

      // Convert to radians
      const angleRad = (cardRotation * Math.PI) / 180;

      // Calculate 3D position with enhanced depth
      const x = Math.sin(angleRad) * this.radius;
      const z = Math.cos(angleRad) * this.radius - this.radius;

      // Calculate normalized depth (0 = back, 1 = front)
      const normalizedZ = (z + this.radius) / (this.radius * 2);

      // DRAMATIC SCALING: 0.5 (back) to 1.5 (front) - 3x size difference
      // Use easeOutQuad for smoother scale transitions
      const easeOutQuad = (t) => t * (2 - t);
      const easedZ = easeOutQuad(normalizedZ);

      // Scale: 0.5 at back, 1.5 at front (3x difference for dramatic effect)
      const minScale = 0.5;
      const maxScale = 1.5;
      const scale = minScale + easedZ * (maxScale - minScale);

      // Enhanced opacity with more dramatic falloff
      // 0.3 at back, 1.0 at front
      const minOpacity = 0.3;
      const maxOpacity = 1.0;
      const opacity = minOpacity + easedZ * (maxOpacity - minOpacity);

      // Calculate Y rotation for facing the viewer
      const rotateY = -cardRotation;

      // Enhanced translateZ based on scale for parallax depth
      // Larger cards appear even closer
      const parallaxZ = z + (scale - minScale) * 100;

      // Dynamic shadow intensity based on scale
      const shadowIntensity = 0.3 + easedZ * 0.4;

      // Apply transforms with enhanced physics feel
      card.style.transform = `
        translateX(${x}px)
        translateZ(${parallaxZ}px)
        rotateY(${rotateY}deg)
        scale(${scale})
      `;
      card.style.opacity = opacity;

      // Debug first card position
      if (index === 0 && numCards <= 5) {
        console.log('Card 0:', {x, z, parallaxZ, scale, opacity, rotateY});
      }

      // Dynamic shadow based on depth and scale
      card.style.setProperty('--card-shadow-intensity', shadowIntensity);
      card.style.setProperty('--card-scale', scale);

      // Enhanced z-index calculation: front cards always on top
      // Use scale-weighted z-index for smoother visual layering
      const zIndex = Math.round(normalizedZ * 100 + scale * 50);
      card.style.zIndex = zIndex;

      // Determine active state with tighter threshold for cleaner transition
      const isActive = Math.abs(normalizedCardRotation) < this.cardAngle / 2.5;

      // Transitioning state for cards moving toward/away from center
      const isTransitioning = Math.abs(normalizedCardRotation) < this.cardAngle && !isActive;

      card.classList.toggle('is-active', isActive);
      card.classList.toggle('is-transitioning', isTransitioning);

      // Add proximity classes for granular CSS control
      if (Math.abs(normalizedCardRotation) < this.cardAngle * 0.5) {
        card.classList.add('is-near-center');
        card.classList.remove('is-far');
      } else if (Math.abs(normalizedCardRotation) > this.cardAngle * 2) {
        card.classList.remove('is-near-center');
        card.classList.add('is-far');
      } else {
        card.classList.remove('is-near-center', 'is-far');
      }
    });
  }

  updateDots() {
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  updateProgress() {
    const progress = ((this.currentIndex + 1) / this.filteredProjects.length) * 100;
    this.progressFill.style.width = `${progress}%`;
  }

  getClientX(e) {
    return e.type.includes('touch') ? e.touches[0]?.clientX || e.changedTouches[0]?.clientX : e.clientX;
  }

  isInViewport() {
    const rect = this.container.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  observeVisibility() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.container.classList.remove('is-entering');
            this.container.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(this.container);
  }

  // Filter integration
  filterByCategory(category) {
    if (category === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(p =>
        p.categories.includes(category)
      );
    }

    // Rebuild carousel with filtered projects
    this.currentIndex = 0;
    this.rotation = 0;
    this.createCards();
    this.createDots();
    this.calculateGeometry();
    this.updateCarousel(false);
    this.updateProgress();

    console.log('Filter applied - filteredProjects:', this.filteredProjects.length, 'cards:', this.cards.length);

    // Brief opacity animation for filtered cards
    this.cards.forEach((card, index) => {
      card.style.opacity = '0';
      setTimeout(() => {
        card.classList.add('filtered-in');
        card.style.animationDelay = `${index * 0.05}s`;
      }, 50);
    });
  }
}

// Initialize Museum Carousel
function initMuseumCarousel() {
  const carouselContainer = document.getElementById('carousel-museum');
  if (!carouselContainer) return null;

  // Create the carousel instance
  const carousel = new MuseumCarousel(carouselContainer, PROJECTS);

  // Store reference globally for filter integration
  window.museumCarousel = carousel;

  return carousel;
}

// Update initProjects to work with carousel
function initProjectsWithCarousel() {
  // Initialize the museum carousel
  const carousel = initMuseumCarousel();

  // Setup filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter the carousel
      if (carousel) {
        carousel.filterByCategory(filter);
      }
    });
  });
}

// Override the original initProjects if carousel exists
const originalInitProjects = initProjects;
initProjects = function() {
  const carouselContainer = document.getElementById('carousel-museum');

  if (carouselContainer) {
    // Use the new carousel
    initProjectsWithCarousel();
  } else {
    // Fallback to original grid
    originalInitProjects();
  }
};
