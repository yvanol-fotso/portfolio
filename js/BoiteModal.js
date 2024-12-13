///////////////////////////////////////////
//////////////// Projet //////////////////
////////////////////////////////////// 


const projects = [
  {
    title: "Moclis - Project 1",
    description: "The Moclis project focuses on creating a research laboratory at the University of Dschang. This laboratory aims to promote international research and facilitate collaboration among researchers. Moclis explores various fields such as complex systems, machine learning, material characterization, mathematical modeling, and more.",
    image: "images/projets/1.png",
    link: "https://moclisrg.org/",
  },
  {
    title: "Moclis - Project 2",
    description: "The Moclis project is dedicated to establishing an innovative research environment at the University of Dschang. It aims to foster international research collaborations and advance knowledge in fields like complex systems, machine learning, material characterization, mathematical modeling, and others.",
    image: "images/projets/2.png",
    link: "https://moclisrg.org/",
  },
  {
    title: "Moclis - Project 3",
    description: "Moclis is an initiative to create a world-class research laboratory at the University of Dschang. The project supports international collaboration and focuses on diverse research domains such as complex systems, machine learning, material characterization, and mathematical modeling.",
    image: "images/projets/3.png",
    link: "https://moclisrg.org/",
  },
];


// let currentProjectIndex = 0;

// function showProject(index) {
//   const project = projects[index];
//   document.getElementById("project-image").src = project.image;
//   document.getElementById("project-image").alt = project.title;
//   document.getElementById("project-link").href = project.link;
//   document.getElementById("project-title").textContent = project.title;
//   document.getElementById("project-description").textContent = project.description;

//   document.querySelectorAll(".carousel-image").forEach((img) => {
//       img.classList.remove("active");
//   });
//   document.getElementById("project-image").classList.add("active");
// }

// function previousProject() {
//   currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
//   showProject(currentProjectIndex);
// }

// function nextProject() {
//   currentProjectIndex = (currentProjectIndex + 1) % projects.length;
//   showProject(currentProjectIndex);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   showProject(currentProjectIndex);
// });


let currentProjectIndex = 0;

function showProject(index, direction = null) {
  const container = document.getElementById("projects-carousel");
  const currentImage = container.querySelector(".carousel-image.active");

  // Ajouter la nouvelle image
  const newImage = document.createElement("img");
  newImage.src = projects[index].image;
  newImage.alt = projects[index].title;
  newImage.className = "carousel-image";
  if (direction) {
    newImage.classList.add(direction === "next" ? "active" : "slide-in-left");

  } else {
    newImage.classList.add("active"); // Pas de transition pour l'image initiale
  }
  container.appendChild(newImage);

  // Mettre à jour les détails
  document.getElementById("project-title").textContent = projects[index].title;
  document.getElementById("project-description").textContent = projects[index].description;
  document.getElementById("project-link").href = projects[index].link;

  // Animation de sortie pour l'image actuelle
  if (currentImage) {
    currentImage.classList.add(direction === "next" ? "slide-out-left" : "slide-out-right");
    currentImage.addEventListener(
      "transitionend",
      () => {
        currentImage.remove(); // Supprimer l'ancienne image
      },
      { once: true }
    );
  }

  // Activer la nouvelle image après la transition
  if (direction) {
    newImage.addEventListener(
      "transitionend",
      () => {
        newImage.classList.add("active");
      },
      { once: true }
    );
  }
}

function previousProject() {
  currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
  showProject(currentProjectIndex, "prev");
}

function nextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  showProject(currentProjectIndex, "next");
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  showProject(currentProjectIndex); // Pas d'animation pour l'image initiale
});





///////////////////////////////////
//////////// publication ///////////
//////////////////////////////////
 // Exemple de données pour le carrousel
 const publications = [
  {
    title: "Machine Learning and Cyber Deception for Securing SDN from DNS Spoofing",
    description: "Deep Learning for SDN Security",
    image: "images/publications/2.png"
  },
  {
    title: "Machine Learning and Cyber Deception for Securing SDN from DNS Spoofing",
    description: "Machine Learning in Cyber Deception",
    image: "images/publications/4.png"
  },
  {
    title: "Machine Learning and Cyber Deception for Securing SDN from DNS Spoofing",
    description: "DNS Spoofing Detection Techniques",
    image: "images/publications/5.png"
  }
];

// Charger les éléments dans le carrousel
function loadModalPublication() {
  const carouselInner = document.getElementById('carouselItems');
  carouselInner.innerHTML = ''; // Vider le contenu existant

  publications.forEach((publication, index) => {
    // Créer un élément de carrousel
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
      carouselItem.classList.add('active'); // Activer le premier élément
    }

     // Ajouter le contenu : image, titre, description
carouselItem.innerHTML = `
<div class="carousel-image-container">
  <a href="${publication.link}" target="_blank">
    <img src="${publication.image}" class="d-block w-100" alt="${publication.title}">
  </a>
</div>
<div class="carousel-caption-container">
  <h5>${publication.title}</h5>
  <p>${publication.description}</p>
  <a href="${publication.doi}" target="_blank" class="btn btn-primary">View DOI</a>
</div>
`;


    // Ajouter l'élément au carrousel
    carouselInner.appendChild(carouselItem);
  });
}

// Charger le carrousel lorsque la modale s'ouvre
document.querySelector('[data-bs-target="#carouselModal"]').addEventListener('click', loadModalPublication);


/////////////////////////////////////////////////
///////// Modal Design //////////////////
///////////////////////////////////////////////


// Tableau contenant les images supplémentaires des designs
const additionalDesignItems = [
  "images/flyers/1.jpg",
  "images/flyers/2.jpg",
  "images/flyers/3.jpg",
  "images/flyers/4.jpg",
  "images/flyers/5.jpg",
  "images/flyers/6.jpg",
  "images/flyers/7.jpg",
  "images/flyers/8.jpg",
  "images/flyers/9.jpg",
  "images/flyers/10.jpg",
  "images/flyers/11.jpg",
  "images/flyers/12.jpg",
  "images/flyers/13.jpg",
  "images/flyers/14.jpg",
  "images/flyers/15.jpg",
  "images/flyers/16.jpg",
  "images/flyers/17.jpg",
  "images/flyers/18.jpg",
  "images/flyers/19.jpg",
  "images/flyers/20.jpg",
  "images/flyers/21.jpg",
  "images/flyers/22.jpg",
  "images/flyers/23.jpg",
  "images/flyers/24.jpg",
  "images/flyers/25.jpg",
  "images/flyers/26.jpg"
  ];
  
  // Fonction pour charger les éléments de design supplémentaires dans la boîte modale
function loadDesignItems() {
    const carouselInner = document.getElementById('carouselItems');
    
    // Vider le contenu actuel du carrousel
    carouselInner.innerHTML = '';
    
    // Modifier dynamiquement le titre de la modale
    const modalTitle = document.getElementById('certModalLabel');
    modalTitle.innerText = "My Designs";  // Vous pouvez ici changer le titre selon vos besoins
    
    // Parcourir le tableau des Design pour générer les items du carrousel
    additionalDesignItems.forEach((design, index) => { // Renommé la variable interne à 'design'
        // Définir correctement la classe active
        const activeClass = index === 0 ? 'active' : '';
        
        // Créer l'élément du carrousel
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (activeClass) {
            carouselItem.classList.add(activeClass); // Ajouter active seulement si ce n'est pas vide
        }
        
        // Créer l'image pour l'élément du carrousel
        const image = document.createElement('img');
        image.src = design; // Utiliser 'design' qui est l'élément du tableau
        image.classList.add('d-block', 'w-100'); // Ajouter les classes nécessaires
        image.alt = `Design ${index + 1}`; // Alt modifié pour 'Design'
        image.classList.add('img-fluid', 'mb-3');
        
        // Ajouter l'image au carrouselItem
        carouselItem.appendChild(image);
        
        // Ajouter l'élément du carrousel à l'intérieur du carrousel
        carouselInner.appendChild(carouselItem);
    });
}


/////////////////////////////////////////////////
///////// Modal Certification //////////////////
///////////////////////////////////////////////



// Tableau contenant les liens vers les images des certifications
const certifications = [
    "images/certifications/1.jpg",
    "images/certifications/2.jpg",
    "images/certifications/3.jpg",
    "images/certifications/4.jpg",
    "images/certifications/5.jpg",
    "images/certifications/6.jpg",
    "images/certifications/7.jpg",
    "images/certifications/8.jpg",
    "images/certifications/9.jpg",
    "images/certifications/10.jpg",
    "images/certifications/11.jpg",
    "images/certifications/12.jpg",
    "images/certifications/13.jpg",
    "images/certifications/14.jpg",
    "images/certifications/15.jpg",
    "images/certifications/16.jpg",
    "images/certifications/17.jpg",
    "images/certifications/18.jpg",
    "images/certifications/19.png"
  ];
  


//////////////////////////////////
//////////// speceific q Nodejs//
/////////////////////////////////

// const fs = require('');
// const path = require('path');
// const folderCertification = 'images/certifications';
// const certifications = [];

// fs.readdir(folderCertification,(err, files) => {
//   if (err) {
//     console.error(err);
//   }else{
//     files.forEach((file) => {
//       if (path.extname(file) ==='.jpg'  || path.extname(file) ==='.png') {
//          certifications.push(file);
//       }
//     })
//   }
// })



  // Fonction pour générer le carrousel dans la modale
  function loadCertifications() {
    const carouselInner = document.getElementById('carouselItems');
    
    // Vider le contenu actuel du carrousel
    carouselInner.innerHTML = '';
    
    // Modifier dynamiquement le titre de la modale
    const modalTitle = document.getElementById('certModalLabel');
    modalTitle.innerText = "My Certifications";  // Vous pouvez ici changer le titre selon vos besoins, par exemple "Mes Certificats Importants"
    
    // Parcourir le tableau des certifications pour générer les items du carrousel
    certifications.forEach((certification, index) => {
      // Définir correctement la classe active
      const activeClass = index === 0 ? 'active' : '';
      
      // Créer l'élément du carrousel
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (activeClass) {
        carouselItem.classList.add(activeClass); // Ajouter active seulement si ce n'est pas vide
      }
      
      // Créer l'image pour l'élément du carrousel
      const image = document.createElement('img');
      image.src = certification;
      image.classList.add('d-block', 'w-100'); // Ajouter les classes nécessaires
      image.alt = `Certification ${index + 1}`;
      
      // Ajouter l'image au carrouselItem
      carouselItem.appendChild(image);
      
      // Ajouter l'élément du carrousel à l'intérieur du carrousel
      carouselInner.appendChild(carouselItem);
    });
  }
  
  // Charger les certifications dès que la page est prête
//   document.addEventListener('DOMContentLoaded', loadCertifications);
  



//////////////////////////////////////////////////////////////
//////////////////// Conference /////////////////////////////
/////////////////////////////////////////////////////////////




// Tableau contenant les liens vers les images des certifications
const conferencesEvent = [
  "images/conferences/1.png",
  "images/conferences/2.png",
  "images/conferences/3.png",
  "images/conferences/4.png"
];


function loadConferencesEvent() {
  const carouselInner = document.getElementById('carouselItems');
  
  // Vider le contenu actuel du carrousel
  carouselInner.innerHTML = '';
  
  // Modifier dynamiquement le titre de la modale
  const modalTitle = document.getElementById('certModalLabel');
  modalTitle.innerText = "My Conferences";  // Vous pouvez ici changer le titre selon vos besoins
  
  // Parcourir le tableau des Design pour générer les items du carrousel
  conferencesEvent.forEach((conferences, index) => { // Renommé la variable interne à 'design'
      // Définir correctement la classe active
      const activeClass = index === 0 ? 'active' : '';
      
      // Créer l'élément du carrousel
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (activeClass) {
          carouselItem.classList.add(activeClass); // Ajouter active seulement si ce n'est pas vide
      }
      
      // Créer l'image pour l'élément du carrousel
      const image = document.createElement('img');
      image.src = conferences; // Utiliser 'design' qui est l'élément du tableau
      image.classList.add('d-block', 'w-100'); // Ajouter les classes nécessaires
      image.alt = `Design ${index + 1}`; // Alt modifié pour 'Design'
      image.classList.add('img-fluid', 'mb-3');
      
      // Ajouter l'image au carrouselItem
      carouselItem.appendChild(image);
      
      // Ajouter l'élément du carrousel à l'intérieur du carrousel
      carouselInner.appendChild(carouselItem);
  });
}



