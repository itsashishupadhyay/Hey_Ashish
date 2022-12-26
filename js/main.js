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

  const thumbnailContainer = (i == 0) ? thumb1 : ((i==2)?thumb2:thumb3)

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




