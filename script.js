// alert("website Loaded...");
const imageContainer = document.querySelector(".image-container");
const loadMore = document.getElementById("loadMore");
const media = window.matchMedia("(max-width:768px)");


let randomImageUrl = "https://picsum.photos/";
let imageWidth = 400;
const slash = "/";
let imageHeight = 400;

let randomString = "?random=";
let randomNum = 1;

document.addEventListener("DOMContentLoaded", () => {
    //Your code that interacts with the DOM goes here
    let startFrom = 1;
    generateImages(startFrom, 9);
});

loadMore.addEventListener("click", () => {
    let nImages = document.querySelectorAll("img").length;
    // let startFrom = nImages;
    nImages++;
    generateImages(nImages, nImages + 6);
});

if(media.matches)
{
    
    
}

function generateImages(startFrom, numberOfImages) 
{
    for (let i = startFrom; i <= numberOfImages; i++) 
    {
        randomNum = i;
        let img = document.createElement("img");
        let url = "" + randomImageUrl + imageWidth + slash + imageHeight + slash + randomString + randomNum;

        img.src = url;
        imageContainer.appendChild(img);
        img.addEventListener("click", (event) => 
        {

            
            

            var imageUrl = event.target.getAttribute("src");

            window.open(imageUrl,"_blank");
            
        });

    }
}


