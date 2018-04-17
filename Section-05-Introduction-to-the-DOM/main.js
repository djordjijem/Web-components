var body = document.querySelector("body");
//set position of the body to relative
body.style.position = "relative";
body.style.height = "1100px";
// 1) Add a Header with the Text “New JS Header”
var header = document.createElement("h1");
var textForHeader = document.createTextNode("New JS Header");
header.appendChild(textForHeader);
body.appendChild(header);
//set position absolute and position header
header.style.position = "absolute";
header.style.top = "0.1%";
header.style.right = "50%";
header.style.zIndex = "1";
header.style.color = "pink";

// 2)Change the font color of at least one paragraph or header

var children = body.childNodes[1];
var divTab = children.childNodes[1];
//change the color of .content div
divTab.style.color = "blue";

// 3) Change the source of an image
//**If your page has no images, add one

var img = document.createElement('img');
img.setAttribute("src","world-2794559.jpg");
body.appendChild(img);
img.style.position = "absolute";
img.style.height = "700px";
img.style.width = "700px";
img.style.top = "5%";
img.style.left = "30%";

// 4) Add a page background image
body.style.backgroundImage = "url(snow-3193865_1280.jpg)";
body.style.backgroundSize = "cover";

// 5) Create a List with at least two items
var ul = document.createElement("ul");
var liOne = document.createElement("li");
var liTwo = document.createElement("li");
var liText = document.createTextNode("Some list text");
var anotherLiText =  document.createTextNode("Some other list text");
liOne.appendChild(liText);
liTwo.appendChild(anotherLiText);
ul.appendChild(liOne);
ul.appendChild(liTwo);

body.appendChild(ul);
ul.style.position = "absolute";
ul.style.left = "60%";
ul.style.top = "0.01%";
ul.style.color = "red"; 

// 6) add a paragraph at the bottom

var paragraph = document.createElement("p");
var paragraphText = document.createTextNode("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren");
paragraph.appendChild(paragraphText);
body.appendChild(paragraph);
paragraph.style.position = "relative";
paragraph.style.top = "70%";
paragraph.style.left = "41%";
paragraph.style.color = "purple";
paragraph.style.width = "250px";
paragraph.style.fontSize = "1.2em";


