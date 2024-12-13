const navbar = document.querySelector(".navbar"),
navbarLink = document.querySelector(".nav-link"),
navCollapse = document.querySelector(".navbar-collapse");


function scrollMenuBar(){

    navbar.addEventListener("click", function(e) { 
        navCollapse.style.display=="none"; //"block"=pour afficher

        });

    navbarLink.addEventListener("click", function(e) { 
        navCollapse.style.display=="none";
    });

}



function scrollToBottom(){
    window.addEventListener('scroll', function(e) { 
        if (window.scrollY > 0) {
            navbar.classList.add('scroll');
        } else {
            navbar.classList.remove('scroll');
        } 
    });           

}

scrollToBottom();

