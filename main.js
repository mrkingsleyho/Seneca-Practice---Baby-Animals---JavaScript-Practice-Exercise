/* Link this file to the HTML file. */
// var imgSelector = document.getElementById('kitten-img');

// imgSelector.style.borderStyle = 'solid';
// imgSelector.style.borderColor = 'pink';
// imgSelector.style.borderWidth = '10px';

var imageSelectors = document.getElementsByTagName('img');


//kitten
imageSelectors[0].style.borderStyle = 'solid';
imageSelectors[0].style.borderColor = 'pink';
imageSelectors[0].style.borderWidth = '10px';
imageSelectors[0].src = './img/cat.png';
imageSelectors[0].style.borderRadius = '100px';


//puppies
imageSelectors[1].style.borderStyle = 'solid';
imageSelectors[1].style.borderColor = 'red';
imageSelectors[1].style.borderWidth = '10px';
imageSelectors[1].src = './img/dog.jpg';
imageSelectors[1].style.borderRadius = '100px';

//bunnies

imageSelectors[2].style.borderStyle = 'solid';
imageSelectors[2].style.borderColor = 'blue';
imageSelectors[2].style.borderWidth = '10px';
imageSelectors[2].src = './img/rabbit.png';
imageSelectors[2].style.borderRadius = '100px';

//body
document.body.style.backgroundImage = "url('./img/bg_lavender.jpg')";
