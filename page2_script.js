function proceed() {
    // Get responses
    const response1 = document.getElementById('response1').value.trim();
    const response2 = document.getElementById('response2').value.trim();
    const response3 = document.getElementById('response3').value.trim();

    // Validate minimum length
    if (response1.length < 6 || response2.length < 6 || response3.length < 6) {
        alert("Please provide responses with at least 60 words each.");
        return;
    }

    // Proceed to the next page
    window.location.href = "page3_index.html"; // Replace "next_page.html" with the actual link
}