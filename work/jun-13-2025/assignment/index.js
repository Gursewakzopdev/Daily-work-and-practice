
// URL of the GitHub README file to fetch
const readmeUrl = 'https://raw.githubusercontent.com/zopdev/helm-charts/main/charts/wordpress/README.md';

// Get references to key DOM elements
const readmeContentDiv = document.getElementById('readme-content');
const sidebarContentDiv = document.getElementById('sidebar-content');
const mainReadmeArea = document.getElementById('main-readme-area');
const searchToggleButton = document.getElementById('searchToggleButton');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');

let headingElements = []; // To store references to heading elements in the content
let sidebarLinks = []; // To store references to sidebar link elements

/**
 * Fetches the README content from the specified URL,
 * parses it, and then processes and displays it.
 */
async function fetchReadme() {
    try {
        const response = await fetch(readmeUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const readmeMarkdown = await response.text();
        // Parse markdown to HTML
        const readmeHtml = marked.parse(readmeMarkdown);
        processAndDisplayReadme(readmeHtml);
    } catch (error) {
        console.error('Error fetching the README file:', error);
        readmeContentDiv.innerHTML = `<p style="color: #ef4444;">Error loading README content. Please ensure the URL is correct and try again.</p>`;
    }
}

/**
 * Processes the parsed HTML content, injects it into the main content area,
 * and creates the sidebar links for headings.
 * @param {string} htmlContent - The HTML string generated from Markdown.
 */
function processAndDisplayReadme(htmlContent) {
    readmeContentDiv.innerHTML = htmlContent; // Directly inject the full HTML
    sidebarContentDiv.innerHTML = ''; // Clear existing sidebar content
    headingElements = []; // Reset heading elements array
    sidebarLinks = []; // Reset sidebar links array

    // Add 'Show All' link to sidebar
    const showAllLink = document.createElement('a');
    showAllLink.href = '#';
    showAllLink.textContent = 'Show All';
    // Add a specific class to identify this link for filtering logic
    showAllLink.classList.add('sidebar-show-all'); 
    showAllLink.addEventListener('click', (event) => {
        event.preventDefault();
        // Scroll to the top of the main content area
        mainReadmeArea.scrollTo({ top: 0, behavior: 'smooth' });
        updateSidebarActiveLink(''); // No specific section active when showing all
        searchInput.value = ''; // Clear search input
        filterSidebarLinks(''); // Reset filter
        searchContainer.classList.remove('active'); // Hide search bar
    });
    sidebarContentDiv.appendChild(showAllLink);
    sidebarLinks.push(showAllLink); // Add to our list of links

    // Get all h1 and h2 headings within the readmeContentDiv
    const headings = readmeContentDiv.querySelectorAll('h1, h2');

    headings.forEach((heading, index) => {
        // Generate a unique ID for each heading if it doesn't have one
        let id = heading.id || `section-${index}`;
        heading.id = id;
        headingElements.push(heading); // Store reference to the actual DOM element

        // Create sidebar link for this heading
        const sidebarLink = document.createElement('a');
        sidebarLink.href = `#${id}`;
        sidebarLink.textContent = heading.textContent;
        sidebarLink.classList.add('block');
        if (heading.tagName === 'H2') {
            sidebarLink.classList.add('level-2'); // For indentation
        }
        sidebarLink.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToSection(id);
        });
        sidebarContentDiv.appendChild(sidebarLink);
        sidebarLinks.push(sidebarLink); // Add to our list of links
    });

    // Set up scroll listener for active sidebar highlighting
    mainReadmeArea.addEventListener('scroll', highlightActiveSection);
    window.addEventListener('resize', highlightActiveSection); // Re-evaluate on resize
    // Initial highlight after content is loaded and elements are rendered
    // A small timeout ensures all layout calculations are done
    setTimeout(highlightActiveSection, 100); 
}

/**
 * Scrolls to a specific section by its ID.
 * @param {string} sectionId - The ID of the heading element to scroll to.
 */
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        // Use scrollIntoView with 'smooth' behavior and 'start' alignment
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update active class immediately, then re-evaluate after scroll
        updateSidebarActiveLink(sectionId);
        // Re-evaluate after a delay, in case smooth scroll changes final position slightly
        setTimeout(highlightActiveSection, 300); 
    }
}

/**
 * Highlights the active section in the sidebar based on scroll position.
 */
function highlightActiveSection() {
    // Get the current scroll position of the main content area
    const currentScrollPos = mainReadmeArea.scrollTop;
    // Define an offset to trigger highlighting slightly before the section reaches the very top
    const offset = 80; 

    let activeSectionId = '';

    // Iterate backwards to prioritize sections higher up when multiple are visible
    for (let i = headingElements.length - 1; i >= 0; i--) {
        const heading = headingElements[i];
        // Check if the heading's top position is within the visible scroll area
        // and accounts for the fixed navbar and offset
        if (currentScrollPos + offset >= heading.offsetTop) {
            activeSectionId = heading.id;
            break; // Found the active section
        }
    }
    updateSidebarActiveLink(activeSectionId);
}

function updateSidebarActiveLink(activeSectionId) {
    // Remove 'active' class from all links first
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (activeSectionId) {
        const activeLink = sidebarContentDiv.querySelector(`a[href="#${activeSectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

/**
 * Toggles the visibility of the search input bar.
 */
function toggleSearchBar() {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus(); // Focus the input when it appears
    } else {
        searchInput.value = ''; // Clear input when hiding
        filterSidebarLinks(''); // Reset filter when hiding
    }
}

/**
 * Filters the sidebar links based on the search query.
 * @param {string} query - The search query string.
 */
function filterSidebarLinks(query) {
    const lowerCaseQuery = query.toLowerCase().trim();
    const showAllLink = sidebarContentDiv.querySelector('.sidebar-show-all');

    sidebarLinks.forEach(link => {
        // Don't filter the "Show All" link directly here; handle its visibility separately
        if (link === showAllLink) {
            return; 
        }

        const linkText = link.textContent.toLowerCase();
        if (lowerCaseQuery === '' || linkText.includes(lowerCaseQuery)) {
            link.style.display = 'block'; // Show matching links
        } else {
            link.style.display = 'none'; // Hide non-matching links
        }
    });

    // Hide "Show All" link when a search is active, show it otherwise
    if (showAllLink) {
        if (lowerCaseQuery !== '') {
            showAllLink.style.display = 'none';
        } else {
            showAllLink.style.display = 'block';
        }
    }
}

// Event listeners for search functionality
searchToggleButton.addEventListener('click', toggleSearchBar);
searchInput.addEventListener('input', (event) => {
    filterSidebarLinks(event.target.value);
});

// Initial fetch and display of README content when the page loads
document.addEventListener('DOMContentLoaded', fetchReadme);
