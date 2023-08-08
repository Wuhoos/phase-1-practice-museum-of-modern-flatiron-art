fetch('http://localhost:3000/current-exhibits')
.then(response => response.json())
.then(art => {
    //console.log(art)
    renderingArt(art[0])
})

function renderingArt(artData){
    const title = document.getElementById('exhibit-title')
    const image = document.getElementById('exhibit-image')
    const description = document.getElementById('exhibit-description')
    const comments = document.getElementById('comments-section')

    title.textContent = artData.title
    image.src = artData.image
    description.textContent = artData.description
    artData.comments.forEach(comment => {
        //console.log(comment)
        const oldComment = document.createElement('p')
        oldComment.textContent = comment
        comments.appendChild(oldComment)
    })
}

const commentForm = document.getElementById('comment-form')
commentForm.addEventListener('submit', e => {
    e.preventDefault()
    const commentInput = document.querySelector('#comment-form input').value
    const commentSection = document.getElementById('comments-section')
    const newComment = document.createElement('p')
    //console.log("this is input", commentInput)
    newComment.textContent = commentInput
    commentSection.appendChild(newComment)
})


const ticketButton = document.querySelector('#buy-tickets-button')
let numberOfTickets = 0
function addTicket(){
    console.log(addTicket)
    //const ticketButton = document.querySelector('#buy-tickets-button')
    const ticketBought = document.querySelector('#tickets-bought')
    numberOfTickets++
    ticketBought.textContent = numberOfTickets + ` Tickets Bought`
    
}
ticketButton.addEventListener('click', () => addTicket())


