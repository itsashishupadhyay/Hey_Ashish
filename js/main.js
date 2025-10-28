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


const slideGallery = document.getElementsByClassName("slides")
console.log("num gallery", slideGallery.length)
for (let i = 0; i < slideGallery.length; i++) {

  const slides = slideGallery[i].querySelectorAll('div');
  console.log("num slides", slides.length);
  slides.forEach((item) => {
    console.log(item.innerHTML);
  })
  const thumb1 = document.getElementById("thumb1");
  const thumb2 = document.getElementById("thumb2");
  const thumb3 = document.getElementById("thumb3");

  const thumbnailContainer = (i == 0) ? thumb1 : ((i == 2) ? thumb2 : thumb3);

  if (!thumbnailContainer) {
    console.warn(`Thumbnail container for gallery index ${i} is missing.`);
    continue;
  }

  const slideCount = slides.length;
  const slideWidth = 540;

  const highlightThumbnail = () => {
    thumbnailContainer
      .querySelectorAll('div.highlighted')
      .forEach(el => el.classList.remove('highlighted'));
    const index = Math.floor(slideGallery[i].scrollLeft / slideWidth);
    thumbnailContainer
      .querySelector(`div[data-id="${index}"]`)
      .classList.add('highlighted');
  };

  const scrollToElement = el => {
    const index = parseInt(el.dataset.id, 10);
    slideGallery[i].scrollTo(index * slideWidth, 0);
  };

  thumbnailContainer.innerHTML += [...slides]
    .map((slide, i) => `<div data-id="${i}"></div>`)
    .join('');

  thumbnailContainer.querySelectorAll('div').forEach(el => {
    el.addEventListener('click', () => scrollToElement(el));
  });

  slideGallery[i].addEventListener('scroll', e => highlightThumbnail());

  highlightThumbnail();

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

function initVisitorMap(lat, lng) {
  if (!window.L) return; // Leaflet not loaded
  const mapEl = document.getElementById('visitor-map');
  if (!mapEl) return;

  // Initialize map
  const map = L.map('visitor-map', { zoomControl: false }).setView([lat, lng], 12);

  // Add OpenStreetMap tiles (free, no API key)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add marker
  L.marker([lat, lng]).addTo(map)
    .bindPopup('You are approximately here')
    .openPopup();

  // Add reference marker and a connecting line; fit map to both points
  if (typeof REF_LAT === 'number' && typeof REF_LNG === 'number') {
    const refMarker = L.marker([REF_LAT, REF_LNG]).addTo(map).bindPopup('I am approximately here');
    const path = L.polyline([[lat, lng], [REF_LAT, REF_LNG]], { color: '#007BFF', weight: 3, opacity: 0.7 }).addTo(map);
    map.fitBounds(path.getBounds(), { padding: [20, 20] });
  }

  // Finally, zoom back in on the visitor's location
  map.setView([lat, lng], 14);
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
        <p class="visitor-message">A mysterious traveler approaches…</p>
        <p class="visitor-message"><strong>You are visitor with IP:</strong></p>
        <p class="visitor-message"><strong>${ip}</strong></p>
        <p class="visitor-message">Signal originating from:</p>
        <p class="visitor-message"><strong>${city}, ${region}, ${country}</strong></p>
        <p class="visitor-message">Coordinates reveal an estimated separation of <strong>${approxKm} km</strong> away (in a straight line).</p>
        <p class="visitor-message">➡️ Wanna meet halfway?</p>
        <p class="visitor-message"><a href="${directionsG}" target="_blank" rel="noopener">Driving directions (Google Maps)</a> · <a href="${directionsOSM}" target="_blank" rel="noopener">OSM directions</a></p>
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
      `;
    }
  } catch (error) {
    console.error('Error fetching visitor info:', error);
    document.getElementById('visitor-info').innerHTML = '<p class="visitor-message">Unable to load visitor information.</p>';
  }
}

function tryFetchVisitorInfo() {
  fetchVisitorInfo().catch(() => {
    setTimeout(tryFetchVisitorInfo, 1000); // Retry every second if it fails
  });
}

tryFetchVisitorInfo();




