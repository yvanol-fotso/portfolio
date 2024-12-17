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


function loadprogressBarLangue(){
    
   // Initialisation dynamique de la barre de progression pour la compétence "Langues"
    
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => {
            fill.style.width = width;
        }, 200);
    });

}


//loadprogressBarLangue(); // cette fonction empeche mon code de charger elle est mal ecrit ou mal appeller je crois a cuase du setTimeout

