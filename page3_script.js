
var clickCount = 0;
var initialButtonSize = 180;
var minButtonSize = 10;
var button = document.getElementById('no-button');


function chooseResponse(response) {
    if (response === 'no') {
        clickCount++;
        if (clickCount > 9) {
            document.getElementById('question').textContent = "Buri baat penchooo!";
            disableNoButton();
            angryOption();
        }
        else if (clickCount == 9) {
            document.getElementById('question').textContent = "Last chance hai bubyaaa?!";
            lastChance()
        }
        else {
            changeImageNo();
            document.getElementById('question').textContent = "Mazak matt karo bubu :(";
            shrinkNoButton();
        }
    } 
    else {
        celebrate();
    }
}


function angryOption() {
    const pic = document.getElementById('pic');
    pic.src = "IMG_3599.JPG";
}


function disableNoButton() {
    var button = document.getElementById('no-button');
    button.style.opacity = '0.6';
    button.style.cursor = 'not-allowed';
    button.style.backgroundColor = '#85a5ad';
    button.style.width = '180px'
    button.removeAttribute('onclick');
}


function lastChance() {
    const pic = document.getElementById('pic');
    pic.src = "IMG_3594 copy.JPG";
}


function changeImageYes() {
    const pic = document.getElementById('pic');
    pic.src = "IMG_3591 copy.JPG";
}


function changeImageNo() {
    const pic = document.getElementById('pic');
    pic.src = "IMG_3593 copy.JPG";
}


function shrinkNoButton() {
    var button = document.getElementById('no-button');
    var currentSize = parseInt(button.style.width, 10) || initialButtonSize;
    var newSize = currentSize - 10; // Decrease size by 10 pixels
    button.style.width = newSize + 'px';
    shiftNoButton()
}


function shiftNoButton() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var currentOpacity = parseFloat(button.style.opacity) || 1;
    var newOpacity = Math.max(0, currentOpacity - 0.1);
    
    var newX = Math.floor(Math.random() * (screenWidth - button.offsetWidth));
    var newY = Math.floor(Math.random() * (screenHeight - button.offsetHeight));

    button.style.position = 'absolute';
    button.style.opacity = newOpacity ;
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}


function celebrate() {
    // Remove all existing elements
    var proposalContainer = document.getElementById('proposal-container');
    while (proposalContainer.firstChild) {
        proposalContainer.removeChild(proposalContainer.firstChild);
    }

    // Create and append new message div
    var messageDiv = document.createElement('div');
    messageDiv.id = 'message';

    var heading = document.createElement('h2');
    heading.textContent = 'Congratulations!';
    messageDiv.appendChild(heading);

    var paragraph = document.createElement('p');
    paragraph.textContent = "You've made a wonderful choice!";
    messageDiv.appendChild(paragraph);

    var pic = document.createElement('img');
    if (clickCount >= 9) {
        pic.src = 'IMG_3688.JPG';
    }
    else { 
        pic.src = 'IMG_3591 copy.JPG';
    }
    pic.alt = 'Marriage Proposal Pic';
    pic.id = 'pic';
    messageDiv.appendChild(pic);

    proposalContainer.appendChild(messageDiv);
}