///////////////// Gallery //////////////////////
$('.images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        }, 
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

/////////////// Contact Form ////////////////// 

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('8a7W_AYomdZKqSm-S');
})();

document.getElementById("contact-button").addEventListener("click",(e)=>{
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    emailjs.send("service_ipjar7h","template_mje2k2a",{
        first_name: fname,
        last_name: lname,
        email: email,
        phone_number: phone,
        message: message,
    }); 
    alert("Message Sent");
}); 

////////////////// Teams Page Profile Card PopUp ////////////////////
function togglePopup1(){
    document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
}
function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active");
}
function togglePopup4(){
    document.getElementById("popup-4").classList.toggle("active");
}
function togglePopup6(){
    document.getElementById("popup-6").classList.toggle("active");
}