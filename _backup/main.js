function OpenLink(What) {
  if (What === "Linkedin"){
    window.open( "https://www.linkedin.com/in/itsashishupadhyay/", "_blank");
  }else if (What === "GitHub"){
    window.open("https://github.com/itsashishupadhyay", "_blank");
  }else if (What == "Email"){
    window.open ("mailto:Ashish@HeyAshish.com","emailWindow");
    window.location.href = "mailto:Ashish@HeyAshish.com";
  }else{
    window.open( What, "_blank");

  }
}

smoothScroll = function(elementId) {
  const element = document.getElementById(elementId);

  element.scrollIntoView({behavior: "smooth"});
}


$(function() {
  var btn = $(".GrabResume");

  btn.on("click", async function () {
    $(this).addClass('GrabResume-progress');
    setTimeout(function () {
      btn.addClass('GrabResume-fill')
    }, 500);

    setTimeout(function () {
      btn.removeClass('GrabResume-fill')
    }, 4100);

    setTimeout(function () {
      btn.addClass('GrabResume-complete')
    }, 2200);

  });
})


$(function() {
  var btn = $(".GrabResume");

  btn.on("click", async function () {
    try {
      const response = await fetch('https://maker.ifttt.com/trigger/ResumeDownloaded/json/with/key/ch90Ck4rGenabtIklPb-Tr6Qsl4KDngno7Lr3J1rPD_', {
        method: 'post',
        body: {
          // Your body
        }
      });
      console.log('Completed!', response);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  });
})

const button = document.getElementById('post-btn');

button.addEventListener('click', async _ => {
  try {
    const response = await fetch('https://maker.ifttt.com/trigger/Heyashishbutton/json/with/key/ch90Ck4rGenabtIklPb-Tr6Qsl4KDngno7Lr3J1rPD_', {
      method: 'post',
      body: {
        // Your body
      }
    });
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  // Initialize infinite gallery
  window.infiniteGallery = new InfiniteGallery();
  
  // Start auto-advance after a short delay
  setTimeout(startAutoAdvance, 2000);
  
  // Add hover pause/resume functionality
  document.querySelectorAll('.slide-track').forEach((track, index) => {
    track.addEventListener('mouseenter', () => {
      if (window.infiniteGallery) {
        window.infiniteGallery.pauseGallery(index);
      }
    });
    
    track.addEventListener('mouseleave', () => {
      if (window.infiniteGallery) {
        window.infiniteGallery.resumeGallery(index);
      }
    });
  });
});

// Enhanced Infinite Rolling Gallery
class InfiniteGallery {
  constructor() {
    this.galleries = [
      {
        images: [
          "doc/Gal1 (3).jpg",
          "doc/Gal1 (2).png", 
          "doc/Gal1 (1).png",
          "doc/Gal1 (1).jpg",
          "doc/Gal1 (1).jpeg",
          "doc/Ga1.png",
          "doc/ga1_1 (1).png",
          "doc/ga1_1 (3).png",
          "doc/wa (3).jpeg",
          "doc/wa (5).jpeg"
        ],
        trackId: 'track1',
        thumbId: 'thumb1'
      },
      {
        images: [
          "doc/IMG2.png",
          "doc/img3.png",
          "doc/img1.png",
          "doc/ga1_1 (2).png",
          "doc/img4.png",
          "doc/img5.png",
          "doc/img6.png",
          "doc/img7.png",
          "doc/img8.png"
        ],
        trackId: 'track2',
        thumbId: 'thumb2'
      }
    ];
    
    this.currentIndex = [0, 0];
    this.isAnimating = [false, false];
    this.init();
  }
  
  init() {
    this.galleries.forEach((gallery, index) => {
      this.setupGallery(gallery, index);
      this.createThumbnails(gallery, index);
    });
  }
  
  setupGallery(gallery, galleryIndex) {
    const track = document.getElementById(gallery.trackId);
    if (!track) return;
    
    // Clear existing content
    track.innerHTML = '';
    
    // Create slide items and duplicate for infinite effect
    const allImages = [...gallery.images, ...gallery.images]; // Duplicate for seamless loop
    
    allImages.forEach((imageSrc, index) => {
      const slideItem = document.createElement('div');
      slideItem.className = 'slide-item';
      slideItem.innerHTML = `
        <img src="${imageSrc}" alt="Gallery Image ${index + 1}" loading="lazy">
      `;
      track.appendChild(slideItem);
    });
    
    // Set initial position
    this.resetAnimation(galleryIndex);
  }
  
  createThumbnails(gallery, galleryIndex) {
    const thumbContainer = document.getElementById(gallery.thumbId);
    if (!thumbContainer) return;
    
    thumbContainer.innerHTML = '';
    
    gallery.images.forEach((image, index) => {
      const thumb = document.createElement('div');
      thumb.dataset.index = index;
      thumb.addEventListener('click', () => this.goToSlide(galleryIndex, index));
      thumbContainer.appendChild(thumb);
    });
    
    this.updateThumbnails(galleryIndex);
  }
  
  updateThumbnails(galleryIndex) {
    const gallery = this.galleries[galleryIndex];
    const thumbContainer = document.getElementById(gallery.thumbId);
    const thumbs = thumbContainer.querySelectorAll('div');
    
    thumbs.forEach((thumb, index) => {
      thumb.classList.toggle('highlighted', index === this.currentIndex[galleryIndex]);
    });
  }
  
  goToSlide(galleryIndex, slideIndex) {
    if (this.isAnimating[galleryIndex]) return;
    
    this.currentIndex[galleryIndex] = slideIndex;
    this.updateThumbnails(galleryIndex);
    
    const gallery = this.galleries[galleryIndex];
    const track = document.getElementById(gallery.trackId);
    const slideWidth = window.innerWidth <= 480 ? 210 : window.innerWidth <= 768 ? 265 : 320; // width + margin
    
    this.isAnimating[galleryIndex] = true;
    track.style.transition = 'transform 0.6s ease-in-out';
    track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    
    setTimeout(() => {
      this.isAnimating[galleryIndex] = false;
    }, 600);
  }
  
  nextSlide(galleryIndex) {
    const gallery = this.galleries[galleryIndex];
    const nextIndex = (this.currentIndex[galleryIndex] + 1) % gallery.images.length;
    this.goToSlide(galleryIndex, nextIndex);
  }
  
  prevSlide(galleryIndex) {
    const gallery = this.galleries[galleryIndex];
    const prevIndex = this.currentIndex[galleryIndex] === 0 
      ? gallery.images.length - 1 
      : this.currentIndex[galleryIndex] - 1;
    this.goToSlide(galleryIndex, prevIndex);
  }
  
  resetAnimation(galleryIndex) {
    const gallery = this.galleries[galleryIndex];
    const track = document.getElementById(gallery.trackId);
    
    // Remove CSS animation and add JavaScript control
    track.style.animation = 'none';
    track.style.transition = 'transform 0.6s ease-in-out';
    track.style.transform = 'translateX(0)';
  }
  
  pauseGallery(galleryIndex) {
    const gallery = this.galleries[galleryIndex];
    const track = document.getElementById(gallery.trackId);
    track.style.animationPlayState = 'paused';
  }
  
  resumeGallery(galleryIndex) {
    const gallery = this.galleries[galleryIndex];
    const track = document.getElementById(gallery.trackId);
    track.style.animationPlayState = 'running';
  }
}

// Global gallery control function
function controlGallery(direction, galleryIndex) {
  if (!window.infiniteGallery) return;
  
  if (direction === 'next') {
    window.infiniteGallery.nextSlide(galleryIndex);
  } else if (direction === 'prev') {
    window.infiniteGallery.prevSlide(galleryIndex);
  }
}

// Auto-advance galleries
function startAutoAdvance() {
  setInterval(() => {
    if (window.infiniteGallery) {
      window.infiniteGallery.nextSlide(0);
    }
  }, 4000);
  
  setTimeout(() => {
    setInterval(() => {
      if (window.infiniteGallery) {
        window.infiniteGallery.nextSlide(1);
      }
    }, 4500);
  }, 2000); // Offset second gallery
}

// Distance helpers for approximate distance from a reference point
const REF_LAT = 37.389705;
const REF_LNG = -122.081707;

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Global variables for location tracking
let currentMap = null;
let preciseLat = null;
let preciseLng = null;
let isUsingPreciseLocation = false;

function initVisitorMap(lat, lng, isPrecise = false) {
  if (!window.L) return; // Leaflet not loaded
  const mapEl = document.getElementById('visitor-map');
  if (!mapEl) return;

  // Clear existing map if it exists
  if (currentMap) {
    currentMap.remove();
  }

  // Initialize map with popups not auto-closing
  currentMap = L.map('visitor-map', { zoomControl: false, closePopupOnClick: false }).setView([lat, lng], 12);

  // Add OpenStreetMap tiles (free, no API key)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(currentMap);

  // Add markers with persistent popups
  const locationText = isPrecise ? 'Your precise location' : 'You are approximately here';
  const youMarker = L.marker([lat, lng]).addTo(currentMap)
    .bindPopup(locationText, { autoClose: false, closeOnClick: false });
  youMarker.openPopup();

  // Add reference marker and a connecting line; fit map to both points
  if (typeof REF_LAT === 'number' && typeof REF_LNG === 'number') {
    const refMarker = L.marker([REF_LAT, REF_LNG]).addTo(currentMap)
      .bindPopup('I am approximately here', { autoClose: false, closeOnClick: false });
    refMarker.openPopup();
    const path = L.polyline([[lat, lng], [REF_LAT, REF_LNG]], { color: '#007BFF', weight: 3, opacity: 0.7 }).addTo(currentMap);
    currentMap.fitBounds(path.getBounds(), { padding: [20, 20] });
  }

  // Ensure the final zoom happens after any fit/animation completes
  currentMap.once('moveend', () => {
    const zoomLevel = isPrecise ? 16 : 14; // Higher zoom for precise location
    currentMap.setView([lat, lng], zoomLevel, { animate: true });
  });
  // Fix cases where the container resizes after init
  setTimeout(() => currentMap.invalidateSize(), 0);
}

function requestPreciseLocation() {
  const button = document.querySelector('.location-request');
  const statusEl = document.querySelector('.location-status');
  
  if (!navigator.geolocation) {
    statusEl.textContent = 'Geolocation is not supported by this browser.';
    statusEl.className = 'location-status error';
    return;
  }

  button.disabled = true;
  button.textContent = 'Getting location...';
  statusEl.textContent = 'Requesting location permission...';
  statusEl.className = 'location-status';

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000
  };

  navigator.geolocation.getCurrentPosition(
    (position) => {
      preciseLat = position.coords.latitude;
      preciseLng = position.coords.longitude;
      isUsingPreciseLocation = true;

      // Update the visitor info with precise location
      updateVisitorInfoWithPreciseLocation(preciseLat, preciseLng, position.coords.accuracy);
      
      // Update the map with precise location
      initVisitorMap(preciseLat, preciseLng, true);

      button.textContent = 'Location updated!';
      statusEl.textContent = `Accuracy: ±${Math.round(position.coords.accuracy)}m`;
      statusEl.className = 'location-status success';
      
      // Re-enable button after 3 seconds
      setTimeout(() => {
        button.disabled = false;
        button.textContent = 'Update location again';
      }, 3000);
    },
    (error) => {
      let errorMessage = '';
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = 'Location access denied by user.';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = 'Location information unavailable.';
          break;
        case error.TIMEOUT:
          errorMessage = 'Location request timed out.';
          break;
        default:
          errorMessage = 'An unknown error occurred.';
          break;
      }
      
      button.disabled = false;
      button.textContent = 'Try again';
      statusEl.textContent = errorMessage;
      statusEl.className = 'location-status error';
    },
    options
  );
}

function updateVisitorInfoWithPreciseLocation(lat, lng, accuracy) {
  const visitorInfo = document.getElementById('visitor-info');
  const approxKm = haversineKm(REF_LAT, REF_LNG, lat, lng).toFixed(2);
  const directionsG = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${REF_LAT},${REF_LNG}&travelmode=driving`;
  const directionsOSM = `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${lat},${lng};${REF_LAT},${REF_LNG}`;
  
  visitorInfo.innerHTML = `
    <p class="visitor-message">A mysterious traveler (precise location)</p>
    <p class="visitor-message"><strong>Your precise coordinates:</strong></p>
    <p class="visitor-message"><strong>${lat.toFixed(6)}, ${lng.toFixed(6)}</strong></p>
    <p class="visitor-message">Accuracy: ±${Math.round(accuracy)} meters</p>
    <p class="visitor-message">Precise distance calculation: <strong>${approxKm} km</strong> away (straight line)</p>
    <p class="visitor-message">➡️ Wanna meet halfway?</p>
    <p class="visitor-message"><a href="${directionsG}" target="_blank" rel="noopener">Driving directions (Google Maps)</a> · <a href="${directionsOSM}" target="_blank" rel="noopener">OSM directions</a></p>
    <button class="location-request" onclick="requestPreciseLocation()">Update location again</button>
    <div class="location-status"></div>
  `;
}

async function fetchVisitorInfo() {
  try {
    // Fetch the visitor's IP address and IP-based location information
    const ipResponse = await fetch('https://ipinfo.io/json');
    const ipData = await ipResponse.json();
    const ip = ipData.ip;
    const city = ipData.city;
    const region = ipData.region;
    const country = ipData.country;

    // Parse latitude, longitude from ipinfo 'loc' (e.g., "53.4809,-2.2374")
    let latitude = null;
    let longitude = null;
    if (ipData.loc && typeof ipData.loc === 'string' && ipData.loc.includes(',')) {
      const [latStr, lngStr] = ipData.loc.split(',');
      latitude = parseFloat(latStr);
      longitude = parseFloat(lngStr);
    }

    const visitorInfo = document.getElementById('visitor-info');

    if (Number.isFinite(latitude) && Number.isFinite(longitude)) {
      const approxKm = haversineKm(REF_LAT, REF_LNG, latitude, longitude).toFixed(2);
      const directionsG = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${REF_LAT},${REF_LNG}&travelmode=driving`;
      const directionsOSM = `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${latitude},${longitude};${REF_LAT},${REF_LNG}`;
      visitorInfo.innerHTML = `
        <p class="visitor-message">A mysterious traveler</p>
        <p class="visitor-message"><strong>You are visitor with IP:</strong></p>
        <p class="visitor-message"><strong>${ip}</strong></p>
        <p class="visitor-message">Signal originating from:</p>
        <p class="visitor-message"><strong>${city}, ${region}, ${country}</strong></p>
        <p class="visitor-message">Coordinates reveal an estimated separation of <strong>${approxKm} km</strong> away (in a straight line). (Actual travel distance may increase due to… reality.)</p>
        <p class="visitor-message">➡️ Wanna meet halfway?</p>
        <p class="visitor-message"><a href="${directionsG}" target="_blank" rel="noopener">Driving directions (Google Maps)</a> · <a href="${directionsOSM}" target="_blank" rel="noopener">OSM directions</a></p>
        <button class="location-request" onclick="requestPreciseLocation()">Want more accurate location?</button>
        <div class="location-status"></div>
      `;
      // Initialize the small map with IP-based coordinates
      initVisitorMap(latitude, longitude);
    } else {
      visitorInfo.innerHTML = `
        <p class="visitor-message">You are visitor with IP:</p>
        <p class="visitor-message"><strong>${ip}</strong></p>
        <p class="visitor-message">Connecting from:</p>
        <p class="visitor-message"><strong>${city}, ${region}, ${country}</strong></p>
        <p class="visitor-message">Approximate location unavailable.</p>
        <button class="location-request" onclick="requestPreciseLocation()">Want to share your location?</button>
        <div class="location-status"></div>
      `;
    }
  } catch (error) {
    console.error('Error fetching visitor info:', error);
    document.getElementById('visitor-info').innerHTML = `
      <p class="visitor-message">Unable to load visitor information.</p>
      <button class="location-request" onclick="requestPreciseLocation()">Share your location instead?</button>
      <div class="location-status"></div>
    `;
  }
}

function tryFetchVisitorInfo() {
  fetchVisitorInfo().catch(() => {
    setTimeout(tryFetchVisitorInfo, 1000); // Retry every second if it fails
  });
}

tryFetchVisitorInfo();




