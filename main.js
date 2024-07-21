const pets = [
    {
      id: 1,
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      
    },
    {
      id: 2,
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      
    },

    {
      id: 3,
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      
    },

    {
      id: 4,
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      
    },

    {
      id: 5,
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      
    },

    {
      id: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      
    },

    {
      id: 7,
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      
    },

    {
      id: 8,
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      
    },

    {
      id: 9,
      
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
    },

    {
      id: 10,
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      
    },

    {
      id: 11,
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      
    },

    {
      id: 12,
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      
    },

    {
      id: 13,
       imageUrl: "https://media.istockphoto.com/id/175453491/photo/dalmatian.webp?b=1&s=170667a&w=0&k=20&c=i_JPI3No-RITvbg6GOjk_lUJiFqlP0kPBWOi9hly5gE=",
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
     
    },

    {
      id: 14,
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      
    },

    {
      id: 15,
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      
    },

    {
      id: 16,
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      
    },
    {
     id: 17,
     imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      
    },
    {
      id: 18,
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      
    },
    {
      id: 19,
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      
    },
    {
      id: 20,
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      
    },
    {
      id: 21,
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      
    },
    {
        id: 22,
        imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      
    },
    {
        id: 23,
        imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      
    },
    {
        id: 24,
        imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      
    },
    {
      id: 25,
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      
    },
    {
        id: 26,
        imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      
    },
    {
        id: 27,
        imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      
    },
    {
        id: 28,
        imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      
    },
    {
      id: 29,
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      
    },
    {
      id: 30,
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      
    }
  ];


  // ************************* //
  // ****** FUNCTIONS ******** //
  // ************************* //

  // Targeting query selector from DOM //
  // const targetingPets = document.querySelector('.card');
  // let domString = "";
  // for (const pet of pets) {
  //   domString += `<div class="card" style="width: 18rem;">
  //         <h5 class="card-title">${pet.name}</h5>
  //         <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
  //         <div class="card-body">
  //         <p class-"card-color">${pet.color}</p>
  //         <p class="card-text">${pet.specialSkill}</p>
  //         <footer class="card-type">${pet.type}</footer>
  //       </div>
  //     </div>`;
  // }

  // targetingPets.innerHTML = domString;

// Render to DOM utilit function //
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}


// Get cards on DOM function //
const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {
        domString += `<div class="card" style="width: 18rem;">
        <h5 class="card-title">${pet.name}</h5>
        <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
        <div class="card-body">
        <p class-"card-color">${pet.color}</p>
        <p class="card-text">${pet.specialSkill}</p>
        <footer class="card-type">${pet.type}</footer>
        <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
        </div>
      </div>`;
  }
  renderToDom(".card", domString);

};




// Filter cards with specific colors //
const filter = (array, petTypeString) => {
  const petTypeArray = [];
  array.forEach((option) => {
    if(option.type === petTypeString){
    petTypeArray.push(option);
    }
  });
  return petTypeArray;
}

const showAllPets = document.querySelector(".all-pets");
const showAllDogs = document.querySelector(".dogs");
const showAllCats = document.querySelector(".cats");
const showAllDinos = document.querySelector(".dino");

// show all pets on the DOM //
showAllPets.addEventListener("click", () => {
  cardsOnDom(pets);
});

//Show all Dogs on DOM //
showAllDogs.addEventListener("click", () => {
  const allDogPets = filter(pets, "dog");
  cardsOnDom(allDogPets);
});

//Show all Cats on DOM //
showAllCats.addEventListener("click", () => {
  const allCatPets = filter(pets, "cat");
  cardsOnDom(allCatPets);
});

//Show all Dinosaurs on DOM //
showAllDinos.addEventListener("click", () => {
  const allDinoPets = filter(pets, "dino");
  cardsOnDom(allDinoPets);
});


//*********************************************//
//*******Create New Card On DOM Function*******/
//*********************************************//

//target the form on the DOM//
const petform = document.querySelector("form");

//create the function that grabs all the values from the form and pushes the new opject to the array
const createPet = (e) => {
  e.preventDefault(); //prevents default action of form button if no function applies / add for each form your create
  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#pet-name").value,
    imageUrl: document.querySelector("#img-url").value,
    color: document.querySelector("#pet-color").value,
    specialSkill: document.querySelector("#pet-skill").value,
    type: document.querySelector("#pet-type").value
  }
  pets.push(newPetObj);
  cardsOnDom(pets);
  petform.reset();
 
}

 //add event listener for form submit button//
 petform.addEventListener("submit", createPet);

//*********************************************//
//********* Deleted Card From DOM **************/
//*********************************************//

//target the card div in the html file//
card = document.querySelector(".class")
card.addEventListener('click', (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("==");
    const index = pets.findIndex(e => e.id === Number(id));
    pets.splice(index, 1);
    cardsOnDom(pets);
  }
}); 

const startCards = () => {
  cardsOnDom(pets);
}

startCards();
// push all cards to DOM //
cardsOnDom(pets)
