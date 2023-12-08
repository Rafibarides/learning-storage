
//selecting the button and storing it in a variable
const displayButton = document.getElementById('display-button')

//function to add text using CSA (create, set, add/append)
const handleButtonClick = () => {
    //create a p element, and store it in a variable
    const myParagraph = document.createElement('p')
    myParagraph.classList.add('paragraphs')
    myParagraph.id = 'first-text'

    //set the inner text
    myParagraph.innerText = 'Hello, this is a test'

    //add to document
    document.body.appendChild(myParagraph)
}

//make it so that when user clicks button, the function gets invoked
displayButton.addEventListener('click', handleButtonClick)

