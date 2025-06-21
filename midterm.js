const anime = [
    {
        animeName: 'Dan Da Dan',
        currentEpisode: 'S1 EP12',
        rating: '100/10',
    },
    {
        animeName: 'My Hero Academia',
        currentEpisode: 'S6 EP1',
        rating: '9/10',
    },
    {
        animeName: 'Ouran Host Club',
        currentEpisode: 'S1 EP5',
        rating: '7/10',
    },
    {
        animeName: 'Chainsaw Man',
        currentEpisode: 'S1 EP10',
        rating: '7/10',
    },
    {
        animeName: 'Horimiya',
        currentEpisode: 'S1 EP11',
        rating: '6/10',
    }
];

const showInfo = () =>{
    let task = document.querySelector("#task").value;

    switch (task) {
        case "C":
            createAnime();
            break;

        case "R":
            readAnime();
            break;

        case "U":
        
            updateAnime();
            break;

        case "D":
            
            deleteAnime();
            break;
    }
};
let button = showInfo();

const listAnimes = () =>{

    let animesList = document.querySelector(".animesList");
    let allanimesList = `<ul>`;
    
    anime.forEach((anime) => {
        allanimesList += `<li> ${anime.animeName}</li><br>`;
          
    });
    allanimesList += `</ul>`;
    
    animesList.innerHTML = allanimesList;
    
}
let animesList = listAnimes();


//Create - C
const createAnime = () =>{
    let name = prompt ("Enter the anime's name: ");
    let episode = prompt ("Enter the current episode: ");
    let rate = prompt ("Personal Rating")

    anime.push({
        animeName: name,
        currentEpisode: episode,
        rating: rate,
    });

    listAnimes();
    console.log(anime);
}

//Read - R
const readAnime = () =>{
    let response = prompt("Enter the anime selection that you want to view:")

    let index = anime.findIndex((anime) => anime.animeName === response)

        display = `${anime[index].animeName}. Left off on ${anime[index].currentEpisode}. Rating: ${anime[index].rating}!`
        
        let animeDisplay = document.querySelector(".selectedTask");
        animeDisplay.innerHTML = display;
    

}

//Update - U
const updateAnime = () => {
    let response = prompt("Enter the anime that you want to update:")
    let name = prompt ("Enter the anime's name :");
    let episode = prompt ("New episode spot: ");
    let rate = prompt ("Anime's new rating: ");

    let index = anime.findIndex((anime) => anime.animeName === response)
    anime[index] = {
        animeName: name,
        currentEpisode: episode,
        rating: rate,
    }

    listAnimes();
    console.log(anime);  
};

//Delete - D
const deleteAnime = () =>{
    let response = prompt("Enter the anime that you want to delete:")

    let index = anime.findIndex((anime) => anime.animeName === response)
    
    let deleteanime = anime.splice(index,1)

    listAnimes(); 

    console.log (deleteanime);
    console.log(anime);

}


