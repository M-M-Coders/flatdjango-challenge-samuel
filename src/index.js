const divfilmDetails = document.querySelector(".film-details"); // Use querySelector to select by class name.
const title = document.getElementById("film-title");
const poster = document.getElementById("film-poster");
const runTime = document.getElementById("film-runtime");
const capacity = document.getElementById("film-capacity");
const showTime = document.getElementById("film-showtime");
const tickets = document.getElementById("film-tickets-available"); // Update the ID.
const description = document.getElementById("film-description-entry"); // Update the ID.
const textArea = document.getElementById("description"); // Update to get by ID.
const form = document.getElementById("description-form")

fetch("http://localhost:3000/films") // Update the fetch URL to target your JSON file.
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    const film = data[0]; // Assuming you want to display the first film.
    console.log(film)
    renderFirstfilm(film);
  });

function renderFirstfilm(film) {
  const available_tickets = parseInt(film.capacity-film.tickets_sold)
  title.textContent = film.title;
  showTime.textContent = film.showtime;
//   adjust this line of code after creating my tickets function
  tickets.textContent = `${available_tickets} Tickets Available`;
  description.textContent = film.description;
  capacity.textContent = `${film.capacity} people only`;
  runTime.textContent = `${film.runtime} minutes` ;
  poster.src = film.poster;
}




form.addEventListener("click", 
function(event){
    event.preventDefault()
    updateTickets()
})
 
function  updateTickets(){
    fetch("http://localhost:3000/films") 
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      const film = data[0]; // Assuming you want to display the first film.
      console.log(film)


let availableTickets = parseInt (tickets.textContent)
if (availableTickets > 0) {
    // If there are available tickets, update and display the new value
    availableTickets--;
    tickets.textContent = `${availableTickets} Tickets Available`;
  } else {
    // If no more tickets are available, display a message or take appropriate action
  
 
tickets.textContent = "No Ticket Available!!";

}});
}



 
const liElements = document.querySelectorAll('li');

liElements.forEach(function (liElement){
    liElement.classList.add("film-item");
})




    fetch("http://localhost:3000/films")  
    .then(function(resp) {
      return resp.json();
    })
    .then(function(film) {
    film.forEach(function(film, index){

 if(liElements[index]){
    liElements[index].textContent = film.title
 }

    })
 })
 
 
 // Fetch film data from the server (assuming it's running on http://localhost:3000)
 fetch("http://localhost:3000/films")
   .then(function(resp) {
     return resp.json();
   })
   .then(function(data) {
     // Iterate through each film in the data and assign its title to the corresponding <li> element
     data.forEach(function(film, index) {

      const liElements = document.querySelectorAll('li');
       if (liElements[index]) {
         // Attach a click event listener to each <li> element
         liElements[index].addEventListener("click", function() {
           // When clicked, display the details of the selected film
           function displayFilmDetails(film) {
            const availableTickets = film.capacity - film.tickets_sold;
            title.textContent = film.title;
            showTime.textContent = film.showtime;
            tickets.textContent = `${availableTickets} Tickets Available`;
            description.textContent = film.description;
            capacity.textContent = `${film.capacity} people only`;
            runTime.textContent = `${film.runtime} minutes`;
            poster.src = film.poster;
          }
          displayFilmDetails(film)
         });
       }
     });
   });
 
 // Function to display film details when an <li> element is clicked
 



