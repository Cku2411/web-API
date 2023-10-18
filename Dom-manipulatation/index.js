console.log("hello");
// Store an elenment inside a variable
const link = document.querySelector("a");
// more older method
// get element by ID or tagname

// Using properties and method on HTML object to control it

link.text = "Mozilla Develop Network";
link.href = "https://developer.mozilla.org";

// Grabbing reference our element
const sect = document.querySelector("section");
// create a new paragrap
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride";

// append the new paragrap
sect.appendChild(para);

// adding text node to the paragrap
const text = document.createTextNode(
  " — the premier source for web development knowledge."
);

// select the first node match P
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// MOve paragrap to the bottom of the section
// sect.appendChild(linkPara);
const linkCopy = linkPara.cloneNode(true);

sect.appendChild(linkCopy);

// or call parent node to remove itSelf
console.log(linkCopy.parentNode.removeChild(linkCopy));

/**
 * Style in element
 */

para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

/** SETATRIBUTE */

para.setAttribute("class", "hightlight");
