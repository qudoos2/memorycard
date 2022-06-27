// Gra a couple of things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playeLives = 6;

// Link text
playerLivesCount.textContent = playeLives;

// card Generator
    //We generate the object 🧑🏻‍💻
    let cardData = ()=>[
      { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
      { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" },
      { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
      { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
      { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
      { imgSrc: "./images/ledzep.jpeg", id: 6, name: "led zeppelin" },
      { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
      { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
      { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
      { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 182" },
      { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
      { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
      { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
      { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
      { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
      { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
    ];
    const randomize =()=>{
        const getData = cardData();
        
        getData.sort(()=> Math.random() - 0.5)
        return getData;
    }
// card Generator Function
const cardGenerator = ()=>{
   
    const getData = randomize();
    // Generate the HTML
    getData.forEach((item) =>{
        console.log(item)
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = "card"
        face.classList = "face"
        back.classList = "back"
        // Attach the Info to the cards
        face.src = item.imgSrc;
       card.setAttribute("name", item.name)
        // Attach card to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener('click', (e)=>{
            card.classList.toggle('toggleCard');
            checkCards(e)
        })
    })
    
   const checkCards = (e)=>{
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard')
    // Logic
    if(flippedCards.length ===2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log("match");
            flippedCards.forEach(card=>{
                card.classList.remove('flipped');
                card.style.pointerEvents = "none"
            })
        }else{
            console.log('wrong');
            flippedCards.forEach(card =>{
                card.classList.remove("flipped");
                setTimeout(()=> card.classList.remove("toggleCard"),1000)
            });
            playeLives--;
            playerLivesCount.textContent = playeLives;
            if(playeLives ===0){
                restart("Try Again!")
            }
           
        }
    }
    if(toggleCard.length === 16){
        restart('you won')
    }
   }
   // Run a check to see if we wan to 
   
}

// Restart
const restart = (text)=>{
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = "none"
    cardData.forEach((item,index)=>{
        cards[index].classList.remove('toggleCard');
        // Randomize 
       setTimeout(()=>{
        cards[index].style.pointerEvents = 'all';
        faces[index].src = item.imgSrc;
        cards[index].setAttribute('name', item.name);
        section.style.pointerEvents  = "all"
       },1000)
    });
    playeLives = 6;
    playerLivesCount.textContent = playeLives;
    setTimeout(()=> window.alert((text), 100))
}
cardGenerator();