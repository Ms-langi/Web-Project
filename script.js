// Function to load a section dynamically using XMLHttpRequest
function loadSection(url, elementId) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById(elementId).innerHTML = xhr.responseText;
            console.log(`Loaded HTML for ${elementId}`);
        } else {
            console.error(`Error loading section: ${xhr.status} ${xhr.statusText}`);
            document.getElementById(elementId).innerHTML = '<p>Error loading section. Please try again later.</p>';
        }
    };
    xhr.onerror = function() {
        console.error('Request failed');
        document.getElementById(elementId).innerHTML = '<p>Error loading section. Please try again later.</p>';
    };
    xhr.send();
}

// Function to load content dynamically into the #content container
function loadPage(page) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", page, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('content').innerHTML = xhr.responseText;
        } else {
            console.error("Page not found.");
            document.getElementById('content').innerHTML = '<p>Page not found.</p>';
        }
    };
    xhr.onerror = function() {
        console.error('Request failed');
        document.getElementById('content').innerHTML = '<p>Error loading page. Please try again later.</p>';
    };
    xhr.send();
}

// Initialize everything after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    loadSection('header.html', 'header-container'); // Load header
    loadSection('footer.html', 'footer-container'); // Load footer
    initializeNavigation(); // Set up navigation event listeners
});

// Initialize navigation event listeners
function initializeNavigation() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('href');
            loadPage(page); // Load page content into the #content div
        });
    });
}


