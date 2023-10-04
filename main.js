document.addEventListener("DOMContentLoaded", function () {
    const wonders = [
        {
            name: "Great Wall of China",
            description: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires.",
            image: "great wall of china.jpg"
        },
        {
            name: "Petra, Jordan",
            description: "Petra is a historical and archaeological city in southern Jordan. It is famous for its rock-cut architecture and water conduit system.",
            image: "petra.jpg"
        },
        {
            name: "Christ the Redeemer, Brazil",
            description: "Christ the Redeemer is a colossal statue of Jesus Christ in Rio de Janeiro, Brazil. It is an iconic symbol of Christianity.",
            image: "christ.jpg"
        },
        {
            name:"Chichen Itza",
            description:"Located in Mexico, Chichen Itza is a well-preserved ancient Maya city known for its pyramid, El Castillo, which aligns with the equinoxes and creates a visual illusion of a serpent descending the pyramid's steps.",
            image: "OIP.jpg"
        },
        {
            name:"Machu Picchu",
            description:"This ancient Inca city is located high in the Andes Mountains of Peru. It is renowned for its well-preserved ruins and stunning mountain scenery.",
            image:"balloon.jpg",
        },
        {
            name:"The Roman Colosseum",
            description:"Located in Rome, Italy, the Colosseum is an ancient amphitheater that once hosted gladiatorial contests and other public spectacles.",
            image:"download.jpg"
        },
        {
         name:"The Taj Mahal",
         description:"Built in Agra, India, the Taj Mahal is a stunning white marble mausoleum known for its beauty and symmetry. It was constructed by the Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
         image:"india.jpg"
        }
       
    ];

    const wonderList = document.querySelector(".wonder-list");
    const wonderImage = document.getElementById("wonder-image");
    const wonderDescription = document.getElementById("wonder-description");

   
    wonders.forEach((wonder, index) => {
        const button = document.createElement("button");
        button.textContent = wonder.name;
        button.addEventListener("click", () => {
            displayWonder(wonder);
        });
        wonderList.appendChild(button);
    });

    function displayWonder(wonder) {
        wonderImage.src = wonder.image;
        wonderImage.alt = wonder.name;
        wonderDescription.textContent = wonder.description;
    }

    
    displayWonder(wonders[0]);
});
