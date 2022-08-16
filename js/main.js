function OpenLink(What) {
  if (What === "Linkedin"){
    window.open( "https://www.linkedin.com/in/itsashishupadhyay/", "_blank");
  }else if (What === "GitHub"){
    window.open("https://github.com/itsashishupadhyay", "_blank");
  }else if (What == "Email"){
    console.log("email")
    // window.open ("mailto:xyz@yourapplicationdomain.com","emailWindow");
    window.location.href = "mailto:itsashishupadhyay+HeyAshish@gmail.com";
  }else{
    window.open( What, "_blank");

  }
}

