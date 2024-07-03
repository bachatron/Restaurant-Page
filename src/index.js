import './style.css';
import Logo from './logo.png';

console.log('Test world!')

let img = document.createElement("img");
img.src = Logo;
img.alt = 'Shiba bites logo'

let home_text = "Welcome to Shiba Bites, where the flavors of Argentina and Japan come together in a unique culinary fusion. Our passion for delicious food and warm hospitality drives us to create memorable dining experiences for our guests.<br><br>At Shiba Bites, we blend the rich, bold flavors of Argentine cuisine with the delicate, refined tastes of Japanese dishes. Our menu features a diverse selection of mouth-watering options, from succulent Argentine steaks to exquisite sushi rolls.<br><br>Whether you're a fan of traditional dishes or looking to try something new, our team is dedicated to delivering the highest quality meals made from fresh, premium ingredients. Join us at Shiba Bites and embark on a delightful gastronomic journey that celebrates the best of both cultures.";
let paragraph = document.createElement("p");
paragraph.innerHTML = home_text;

let content = document.getElementById("content");
content.appendChild(img);
content.appendChild(paragraph);