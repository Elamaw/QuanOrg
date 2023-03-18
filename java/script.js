const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

 document.querySelectorAll('a[href^="#"').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")) .scrollIntoView({
      behavior:"smooth"
    })
  })
 })

function sendEmail(){
  Email.send({
      Host : "smtp.gmail.com",
      Username : "kdbulatao41@gmail.com",
      Password : "......",
      To : 'valdezxand  ra@gmail.com',
      From : document.getElementById("email").value,
      Subject : "QUAN ORG INQUIRY",
      Body : "Name:" + document.getElementById("name").value
      + "<br> Email:" + document.getElementById("email").value
      + "<br> Phone:" + document.getElementById("number").value
      + "<br> Message: <br>" + document.getElementById("message").value
  }).then(
    message => alert("Message Sent! Thankyou!")
  );
}


