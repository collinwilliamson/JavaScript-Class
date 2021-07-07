# Class 9

## Assignments

1. (5 pts) Add a script to gallery.html that [sets](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) title attribute for each image with the value matching its alt text.

const images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
    let alt = images[i].alt;
    images[i].title = alt;
}


2. (5 pts) Add a script that sets the current date for the date in gallery.html


3. (3 pts) Add a script to gallery.html that removes the hr element.

## Homework

1. (5 pts) [Create](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) [figcaption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) element for each image in gallery.html with text content matching the image alt text.
2. (3 pts) Add a script to gallery.html that dynamically updates the image count at the header (i.e. if one adds additional img in the html source, the number will update accordingly).

const images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
    let alt = images[i].alt;
    images[i].title = alt;
}
    

const altText = document.qureySelectorAll("alt")
const alt = images.alt;

images.title = alt;

newTitle.id = "title"




altText.getAttribute(alt)

P.S. Create the separate files for each assignment and homework. Create two branches, one for assignments and one for homework. Push your changes to the corresponding Github branches. Create pull requests to your master.


DOM Nodes
    Create Dom Nodes
    Read "______"
    Update "______"
    Delete "______"

    const newDiv = document.createElement("div");
    newDiv.id = "important-div";
    newDiv.textContent = "I am new Div";
    const mainDiv = document.querySelector("#main");
    mainDiv.appendChild (newDiv);
    const newP = document.createElement("P");
    newP.textContent = "I am new P";
    mainDiv.replaceChild (newP, newDiv);
    newP.remove ();
    //mainDiv.removeChild (newP);
