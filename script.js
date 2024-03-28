let x, y; // De x- en y-positie van de cirkel
let xspeed = 5;
let yspeed = 5;
let xdirection = 1; // De richting van beweging in de x-richting (1 voor rechts, -1 voor links)
let ydirection = 1; // De richting van beweging in de y-richting (1 voor beneden, -1 voor boven)
let d = 35; // Diameter van de cirkel
let speedIncrement = 1;
let circleColor;

let rectrightY; // y-positie van de rechthoek aan de rechterkant
let rectleftY; // y-positie van de rechthoek aan de linkerkant
let rectSpeed = 10; // snelheid van de rechthoek

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = width / 2; 
    y = height / 2; // Deze twee zorgen ervoor dat x en y op het midden van het canvas worden gezet
    circleColor = color(255, 0, 162); 
    background(0);
    rectrightY = height / 2; // beginpositie van de rechthoek in het midden van het scherm
    rectleftY = height / 2; 
}

function draw() {
    background(0, 75) // zorg ervoor dat het canavas steeds op blank gaat met een lage alpha waarde voor een mooie fade
    x = x + xspeed * xdirection;
    y = y + yspeed * ydirection; // Update x&y-positie op basis van snelheid en richting, dit is dus wanneer er een nieuw stipje op het canvas komt

    if (x > width - d / 2 || x < d / 2) {
        // ALS de cirkel de rand van het canvas raakt, dan:
        xdirection *= -1; // Keer de bewegingsrichting om
        xspeed += speedIncrement; // Verhoog de snelheid wanneer de rand wordt geraakt
        changeColor();
    }

    if (y > height - d / 2 || y < d / 2) {
        // ALS de cirkel de boven- of onderkant van het canvas raakt, dan:
        ydirection *= -1;
        yspeed += speedIncrement;   
        changeColor();
    }

    // Controleren of de bal de rechthoek raakt
    if (x + d / 2 >= width - 100 && y >= rectrightY && y <= rectrightY + 90) {
        console.log("rechts")
        xdirection *= -1; // Omkeren van de bewegingsrichting van de bal
    }

   if (x + d / 2 >= 80 && y >= rectleftY && y <= rectleftY + 90) {
        console.log("links")
        xdirection *= -1; // Omkeren van de bewegingsrichting van de bal
    } 

    // Hieronder wordt de cirkel getekend
    noStroke();
    fill(circleColor); // Zet de vulkleur van de cirkel
    ellipse(x, y, d, d); // Tekenen van de cirkel op de huidige positie
    // Er wordt dus getekend op de x-positie en y-positie die hierboven bepaald is, en (d, d) om de diameter van de stip te tekenen.
    fill(255);

    rect(80, rectleftY, 20, 90); // rechthoek aan de rechterkant van het scherm

        if (keyIsDown(87)) { // pijltjeomhoog-toets
            rectleftY -= rectSpeed; // beweeg omhoog
            rectleftY = constrain(rectleftY, 0, height - 30); // zorg ervoor dat de rechthoek niet buiten het canvas gaat
        }

        if (keyIsDown(83)) { // pijltjebeneden-toets
            rectleftY += rectSpeed; // beweeg omlaag
            rectleftY = constrain(rectleftY, 0, height - 30); // zorg ervoor dat de rechthoek niet buiten het canvas gaat
        }

    rect(width - 100, rectrightY, 20, 90); // rechthoek aan de rechterkant van het scherm

        if (keyIsDown(38)) { // W-toets
            rectrightY -= rectSpeed; // beweeg omhoog
            rectrightY = constrain(rectrightY, 0, height - 30); 
        }

        if (keyIsDown(40)) { // D-toets
            rectrightY += rectSpeed; // beweeg omlaag
            rectrightY = constrain(rectrightY, 0, height - 30); // zorg ervoor dat de rechthoek niet buiten het canvas gaat
        }
}

function changeColor() {
    let randomColor;

    // Definieer hier de kleuren
    let colorOptions = [    
        color(255, 0, 0),    // Rood
        color(0, 255, 0),    // Groen
        color(255, 255, 0),  // Geel
        color(182, 2, 254),  // Paars
        color(255, 165, 0),  // Oranje
        color(0, 0, 255),    // Blauw
        color(2, 230, 254),  // Lichtblauw
        color(255, 0, 162)   // Roze
    ];

    randomColor = random(colorOptions);
    circleColor = randomColor;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    x = width / 2;
    y = height / 2;
    background(38, 198, 187);
}