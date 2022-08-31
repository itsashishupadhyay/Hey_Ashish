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

  btn.on("click", function() {
    $(this).addClass('GrabResume-progress');
    setTimeout(function() {
      btn.addClass('GrabResume-fill')
    }, 500);

    setTimeout(function() {
      btn.removeClass('GrabResume-fill')
    }, 4100);

    setTimeout(function() {
      btn.addClass('GrabResume-complete')
    }, 2200);
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
