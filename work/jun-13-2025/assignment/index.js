const urlParams = new URLSearchParams(window.location.search);
const integrationId = urlParams.get('id');
const readmeUrl = 'https://raw.githubusercontent.com/zopdev/helm-charts/main/charts/jupyterhub/README.md';
// const readmeUrl = `https://raw.githubusercontent.com/zopdev/helm-charts/main/charts/${integrationId}/README.md`;
const readmeContentDiv = document.getElementById('readme-content');
const sidebarContentDiv = document.getElementById('sidebar-content');
const mainReadmeArea = document.getElementById('main-readme-area');
const searchToggleButton = document.getElementById('searchToggleButton');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');

let headingElements = [];
let sidebarLinks = [];

async function fetchReadme() {
    try {
        const response = await fetch(readmeUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const readmeMarkdown = await response.text();
        const readmeHtml = marked.parse(readmeMarkdown);
        processAndDisplayReadme(readmeHtml);
    } catch (error) {
        console.error('Error fetching the README file:', error);
        readmeContentDiv.innerHTML = `<p style="color: #ef4444;">Error loading README content. Please ensure the URL is correct and try again.</p>`;
    }
}

function processAndDisplayReadme(htmlContent) {
    readmeContentDiv.innerHTML = htmlContent;
    sidebarContentDiv.innerHTML = '';
    headingElements = [];
    sidebarLinks = [];

    const showAllLink = document.createElement('a');
    showAllLink.href = '#';
    showAllLink.textContent = 'Show All';
    showAllLink.classList.add('sidebar-show-all');
    showAllLink.addEventListener('click', (event) => {
        event.preventDefault();
        mainReadmeArea.scrollTo({ top: 0, behavior: 'smooth' });
        updateSidebarActiveLink('');
        searchInput.value = '';
        filterSidebarLinks('');
        searchContainer.classList.remove('active');
    });
    sidebarContentDiv.appendChild(showAllLink);
    sidebarLinks.push(showAllLink);

    const headings = readmeContentDiv.querySelectorAll('h1, h2');

    headings.forEach((heading, index) => {
        let id = heading.id || `section-${index}`;
        heading.id = id;
        headingElements.push(heading);

        const sidebarLink = document.createElement('a');
        sidebarLink.href = `#${id}`;
        sidebarLink.textContent = heading.textContent;
        sidebarLink.classList.add('block');
        if (heading.tagName === 'H2') {
            sidebarLink.classList.add('level-2');
        }
        sidebarLink.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToSection(id);
        });
        sidebarContentDiv.appendChild(sidebarLink);
        sidebarLinks.push(sidebarLink);
    });

    mainReadmeArea.addEventListener('scroll', highlightActiveSection);
    window.addEventListener('resize', highlightActiveSection);
    setTimeout(highlightActiveSection, 100);
}

function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        updateSidebarActiveLink(sectionId);
        setTimeout(highlightActiveSection, 300);
    }
}

function highlightActiveSection() {
    const currentScrollPos = mainReadmeArea.scrollTop;
    const offset = 80;

    let activeSectionId = '';

    for (let i = headingElements.length - 1; i >= 0; i--) {
        const heading = headingElements[i];
        if (currentScrollPos + offset >= heading.offsetTop) {
            activeSectionId = heading.id;
            break;
        }
    }
    updateSidebarActiveLink(activeSectionId);
}

function updateSidebarActiveLink(activeSectionId) {
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

function toggleSearchBar() {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        filterSidebarLinks('');
    }
}

function filterSidebarLinks(query) {
    const lowerCaseQuery = query.toLowerCase().trim();
    const showAllLink = sidebarContentDiv.querySelector('.sidebar-show-all');

    sidebarLinks.forEach(link => {
        if (link === showAllLink) {
            return;
        }

        const linkText = link.textContent.toLowerCase();
        if (lowerCaseQuery === '' || linkText.includes(lowerCaseQuery)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });

    if (showAllLink) {
        if (lowerCaseQuery !== '') {
            showAllLink.style.display = 'none';
        } else {
            showAllLink.style.display = 'block';
        }
    }
}

searchToggleButton.addEventListener('click', toggleSearchBar);
searchInput.addEventListener('input', (event) => {
    filterSidebarLinks(event.target.value);
});

document.addEventListener('DOMContentLoaded', fetchReadme);