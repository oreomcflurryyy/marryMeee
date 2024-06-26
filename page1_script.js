function generateLink() {
    const partner1Name = document.getElementById('partner1Name').value;
    const partner2Name = document.getElementById('partner2Name').value;
    const meetupDuration = document.getElementById('meetupDuration').value;
    const noseBreak = document.getElementById('noseBreak').value;
    const date = document.getElementById('date').value;
    const noBreakingUpChecked = document.getElementById('noBreakingUp').checked;
    const loveForeverChecked = document.getElementById('loveForever').checked;

    // Check if all values are entered and checkboxes are ticked
    if (partner1Name && partner2Name && meetupDuration && noseBreak && date && noBreakingUpChecked && loveForeverChecked) {
        // Proceed to generate link and disable buttons
        const newPageUrl = "page2_index.html";
        const link = document.createElement('a');
        link.href = newPageUrl;
        link.textContent = "Proceed to New Page";
        link.className = "button";

        const linkContainer = document.getElementById('linkContainer');
        linkContainer.innerHTML = '';
        linkContainer.appendChild(link);

        document.getElementById('agree').disabled = true;
        document.getElementById('disagree').disabled = true;

        // Change the color of the agree button to green
        document.getElementById('agree').classList.remove('disabled');
        document.getElementById('agree').classList.add('enabled');

        // Clear any previous error message
        document.getElementById('errorMessage').textContent = '';
    } else {
        // Display error message
        document.getElementById('errorMessage').textContent = 'Please fill in all the fields and check all the checkboxes before proceeding!!!';
    }
}

function disagree() {
    alert("You have disagreed to the Terms & Conditions!");
}