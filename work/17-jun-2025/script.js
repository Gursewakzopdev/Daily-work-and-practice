const integrationsData = {
  categories: {
    Applications: [
      {
        id: "wordpress",
        name: "WordPress",
        icon: "https://framerusercontent.com/images/1tMwCNL8nyVYanLeO1YXCmyD8.svg",
        description: "A content management system (CMS) written in PHP",
        category: "Applications",
      },
      {
        id: "jupyterhub",
        name: "Jupyter",
        icon: "https://framerusercontent.com/images/hgWz13blJI6voMJlnl8LpCs7Cjs.svg",
        description: "JupyterLab Is A Next-Generation Notebook Interface",
        category: "Applications",
      },
      {
        id: "superset",
        name: "Superset",
        icon: "https://framerusercontent.com/images/j2PaA4EyjB3z8Te54CPtEl9G4pg.svg",
        description: "Data Visualization and Data Exploration | Looker, Tableau alternative",
        category: "Applications",
      },
      {
        id: "outline",
        name: "Outline",
        icon: "https://framerusercontent.com/images/me3PE9f0sDhtHyIisE955ABYK3c.svg",
        description: "Beautiful, realtime collaborative, feature packed, and markdown compatible.",
        category: "Applications",
      },
    ],
    Datastore: [
      {
        id: "mysql",
        name: "MySQL",
        icon: "https://framerusercontent.com/images/o9NXlQW93tQQ6v3jTjDOcwxCMaU.svg",
        description: "Deploy a MySQL database service",
        category: "Datastore",
      },
      {
        id: "redis",
        name: "Redis",
        icon: "https://framerusercontent.com/images/8MWCYgdUmGTAMwJBrF8PdkFbfnI.svg",
        description: "Redis key-value data store",
        category: "Datastore",
      },
      {
        id: "cassandra",
        name: "Cassandra",
        icon: "https://framerusercontent.com/images/hyQRAJJoXaCLvlAd8IqafkKPitE.svg",
        description: "Storing and managing large volumes of structured, semi-structured, and unstructured data.",
        category: "Datastore",
      },
      {
        id: "mariadb",
        name: "MariaDB",
        icon: "https://framerusercontent.com/images/MrgrzzqL3aHPeAvXraV4W437EI.svg",
        description: "The open source relational database",
        category: "Datastore",
      },
      {
        id: "postgres",
        name: "Postgres",
        icon: "https://framerusercontent.com/images/AaiB0a2xIUnIemm6V905ML5c.svg",
        description: "PostgreSQL database service",
        category: "Datastore",
      },
      {
        id: "kafka",
        name: "Kafka",
        icon: "https://framerusercontent.com/images/T58vVQTZl0UnFlmzHJLYR7mpd8U.svg",
        description: "A distributed event streaming platform for real-time data pipelines and stream processing.",
        category: "Datastore",
      },
      {
        id: "redisdistributed",
        name: "Redis (Distributed)",
        icon: "https://framerusercontent.com/images/UijaNkqS0HW6UsMqM12w0Pg.png",
        description: "Distributed Redis cluster for high availability and scalability",
        category: "Datastore",
      },
      {
        id: "solr",
        name: "SOLR",
        icon: "https://framerusercontent.com/images/38xBPcJEGig795UQddhD41ra5xM.svg",
        description: "An open-source search platform built on Apache Lucene.",
        category: "Datastore",
      },
      {
        id: "cockroachdb",
        name: "CockroachDB",
        icon: "https://framerusercontent.com/images/yYgMVdoJyroUzIpxfhPZkgzb0OA.svg",
        description: "Source-available distributed SQL database management system",
        category: "Datastore",
      },
      {
        id: "dgraph",
        name: "Dgraph",
        icon: "https://framerusercontent.com/images/PqVSCt2usAAIShQahcf90ovxXqI.svg",
        description: "The high-performance database for modern applications",
        category: "Datastore",
      },
      {
        id: "chromadb",
        name: "ChromaDB",
        icon: "https://framerusercontent.com/images/chCSrOajsbttAYyRnFvhNbRgBEQ.svg",
        description: "The AI-native embedding database",
        category: "Datastore",
      },
      {
        id: "opentsdb",
        name: "OpenTSDB",
        icon: "https://framerusercontent.com/images/HMe9loL8PZLicwfLI1znIttA2g.png",
        description: "A Distributed, Scalable Monitoring System",
        category: "Datastore",
      },
      {
        id: "surrealdb",
        name: "SurrealDB",
        icon: "https://framerusercontent.com/images/bRyFhCW7zQ6XoCJv18CxnK8uE.svg",
        description: "A scalable, distributed, collaborative, document-graph database",
        category: "Datastore",
      },
      {
        id: "solrcloud",
        name: "Solr Cloud",
        icon: "https://framerusercontent.com/images/TF8qLyaVZCZ0P3IwWEqp9qfNH1A.svg",
        description: "Scalable, fault-tolerant Apache Solr for distributed search and indexing.",
        category: "Datastore",
      },
      {
        id: "scylladb",
        name: "ScyllaDB",
        icon: "https://framerusercontent.com/images/0MeJnJIpldPqz476W6rAWBSO4XE.svg",
        description: "ScyllaDB is a source-available distributed NoSQL wide-column data store.",
        category: "Datastore",
      },
    ],
  },
}

const faqData = [
  {
    id: "what-is-zopdev",
    question: "What is Zopdev Integration?",
    answer:
      "Zopdev Integration is a comprehensive platform that allows you to seamlessly connect and manage all your DevOps tools in one place. It supports CI/CD platforms, monitoring solutions, databases, and collaboration tools to streamline your development workflow.",
  },
  {
    id: "how-to-setup",
    question: "How do I set up an integration?",
    answer:
      "Setting up an integration is simple. Click on any integration card, follow the step-by-step configuration guide, provide your API credentials or connection details, and test the connection. Most integrations can be set up in under 5 minutes.",
  },
  {
    id: "supported-tools",
    question: "Which tools are supported?",
    answer:
      "We support over 50+ popular DevOps tools including databases like MySQL, PostgreSQL, Redis, monitoring tools like Grafana, Prometheus, DataDog, and applications like WordPress, Jupyter, and many more. New integrations are added regularly.",
  },
  {
    id: "security",
    question: "Is my data secure?",
    answer:
      "Yes, security is our top priority. All connections use encrypted protocols (TLS/SSL), credentials are stored securely using industry-standard encryption, and we follow SOC 2 compliance standards. We never store your actual data, only connection metadata.",
  },
  {
    id: "pricing",
    question: "What does it cost?",
    answer:
      "Zopdev Integration offers flexible pricing plans. We have a free tier for up to 5 integrations, and paid plans starting at $29/month for unlimited integrations with advanced features like monitoring, alerting, and team collaboration.",
  },
  {
    id: "support",
    question: "Do you provide support?",
    answer:
      "Yes, we provide comprehensive support including detailed documentation, video tutorials, email support, and for enterprise customers, dedicated support channels with guaranteed response times.",
  },
]

const currentSearchTerm = ""
let searchOverlay
let searchOverlayInput
let searchSuggestions

document.addEventListener("DOMContentLoaded", () => {
  initializeElements()
  setupEventListeners()
  renderAllIntegrations()
  renderFAQ()
  setupAccessibility()
})

function initializeElements() {
  searchOverlay = document.getElementById("search-overlay")
  searchOverlayInput = document.getElementById("search-overlay-input")
  searchSuggestions = document.getElementById("search-suggestions")
}

function setupEventListeners() {
  setupSearch()
  setupCategorySidebar()
  setupKeyboardShortcuts()
  setupSearchOverlay()
  setupFAQ()
}

function renderAllIntegrations() {
  renderCategoryIntegrations("Applications")
  renderCategoryIntegrations("Datastore")
}

function renderCategoryIntegrations(category) {
  const container = document.getElementById(`${category.toLowerCase()}-cards`)
  if (!container) return

  let categoryIntegrations = integrationsData.categories[category] || []

  if (currentSearchTerm) {
    categoryIntegrations = categoryIntegrations.filter(
      (integration) =>
        integration.name.toLowerCase().includes(currentSearchTerm) ||
        integration.description.toLowerCase().includes(currentSearchTerm),
    )
  }

  renderIntegrationCards(container, categoryIntegrations)
}

function renderIntegrationCards(container, integrations) {
  if (!container) return

  container.innerHTML = ""

  if (integrations.length === 0) {
    container.innerHTML = `
      <div class="no-results" role="status">
        <h3>No integrations found</h3>
        <p>Try adjusting your search criteria.</p>
      </div>
    `
    return
  }

  integrations.forEach((integration, index) => {
    const card = createIntegrationCard(integration, index)
    container.appendChild(card)
  })
}

function createIntegrationCard(integration, index) {
  const card = document.createElement("article")
  card.className = "integration-card"
  card.setAttribute("tabindex", "0")
  card.setAttribute("role", "button")
  card.setAttribute("aria-label", `${integration.name} integration. ${integration.description}`)
  card.setAttribute("data-integration-id", integration.id)
  card.setAttribute("data-card-index", index)

card.innerHTML = `
  <a href="readme.html?id=${encodeURIComponent(integration.id)}" class="integration-card-link">
    <div class="integration-card-header">
      <img
        src="${integration.icon}"
        alt=""
        class="integration-card-icon"
        aria-hidden="true"
      >
      <h3 class="integration-card-title">${escapeHtml(integration.name)}</h3>
    </div>
    <p class="integration-card-description">${escapeHtml(integration.description)}</p>
  </a>
`;

  card.addEventListener("click", () => handleCardInteraction(integration))
  card.addEventListener("keydown", (e) => handleCardKeydown(e, integration, index))

  return card
}

function handleCardInteraction(integration) {
  console.log("Integration selected:", integration)
  announceToScreenReader(`Selected ${integration.name} integration`)
}

function handleCardKeydown(e, integration, index) {
  switch (e.key) {
    case "Enter":
    case " ":
      e.preventDefault()
      handleCardInteraction(integration)
      break
    case "ArrowRight":
    case "ArrowDown":
      e.preventDefault()
      focusNextCard(index)
      break
    case "ArrowLeft":
    case "ArrowUp":
      e.preventDefault()
      focusPreviousCard(index)
      break
    case "Home":
      e.preventDefault()
      focusFirstCard()
      break
    case "End":
      e.preventDefault()
      focusLastCard()
      break
  }
}

function focusNextCard(currentIndex) {
  const cards = document.querySelectorAll(".integration-card")
  const nextIndex = (currentIndex + 1) % cards.length
  cards[nextIndex]?.focus()
}

function focusPreviousCard(currentIndex) {
  const cards = document.querySelectorAll(".integration-card")
  const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1
  cards[prevIndex]?.focus()
}

function focusFirstCard() {
  const firstCard = document.querySelector(".integration-card")
  firstCard?.focus()
}

function focusLastCard() {
  const cards = document.querySelectorAll(".integration-card")
  const lastCard = cards[cards.length - 1]
  lastCard?.focus()
}

function setupSearch() {
  const searchInput = document.getElementById("search-integrations")
  if (!searchInput) return

  searchInput.addEventListener("click", openSearchOverlay)
  searchInput.addEventListener("focus", openSearchOverlay)
}

function setupCategorySidebar() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("category-btn")) {
      handleCategoryClick(e.target)
    }
  })
}

function handleCategoryClick(button) {
  const categoryButtons = document.querySelectorAll(".category-btn")
  const category = button.getAttribute("data-category")

  categoryButtons.forEach((btn) => {
    btn.setAttribute("aria-pressed", "false")
    btn.classList.remove("active")
  })

  button.setAttribute("aria-pressed", "true")
  button.classList.add("active")

  const targetSection = document.getElementById(`${category.toLowerCase()}-section`)
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })

    announceToScreenReader(`Scrolled to ${category} section`)
  }
}

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !isInputFocused()) {
      e.preventDefault()
      openSearchOverlay()
    }

    if (e.key === "Escape") {
      if (searchOverlay && searchOverlay.classList.contains("active")) {
        closeSearchOverlay()
      } else if (document.activeElement && document.activeElement !== document.body) {
        document.activeElement.blur()
      }
    }
  })
}

function setupSearchOverlay() {
  if (!searchOverlay || !searchOverlayInput) return

  const closeButton = document.querySelector(".search-overlay-close")
  if (closeButton) {
    closeButton.addEventListener("click", closeSearchOverlay)
  }

  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      closeSearchOverlay()
    }
  })

  searchOverlayInput.addEventListener("input", handleOverlaySearch)
  searchOverlayInput.addEventListener("keydown", handleOverlaySearchKeydown)
}

function openSearchOverlay() {
  if (!searchOverlay || !searchOverlayInput) return

  searchOverlay.classList.add("active")
  searchOverlayInput.focus()
  document.body.style.overflow = "hidden"

  showSearchSuggestions("")

  announceToScreenReader("Search overlay opened")
}

function closeSearchOverlay() {
  if (!searchOverlay) return

  searchOverlay.classList.remove("active")
  document.body.style.overflow = ""
  searchOverlayInput.value = ""

  announceToScreenReader("Search overlay closed")
}

function handleOverlaySearch(e) {
  const searchTerm = e.target.value.toLowerCase()
  showSearchSuggestions(searchTerm)
}

function handleOverlaySearchKeydown(e) {
  if (e.key === "Escape") {
    closeSearchOverlay()
  } else if (e.key === "ArrowDown") {
    e.preventDefault()
    const firstSuggestion = document.querySelector(".search-suggestion")
    if (firstSuggestion) {
      firstSuggestion.focus()
    }
  }
}

function showSearchSuggestions(searchTerm) {
  if (!searchSuggestions) return

  if (!searchTerm || searchTerm.trim() === "") {
    searchSuggestions.innerHTML = ""
    return
  }

  const allIntegrations = [
    ...integrationsData.categories.Applications,
    ...integrationsData.categories.Datastore,
  ]

  const filteredIntegrations = allIntegrations.filter(
    (integration) =>
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (filteredIntegrations.length === 0) {
    searchSuggestions.innerHTML = `
      <div class="no-suggestions">
        <p>No integrations found for "${escapeHtml(searchTerm)}"</p>
      </div>
    `
    return
  }

  searchSuggestions.innerHTML = filteredIntegrations
    .map((integration, index) => createSearchSuggestion(integration, index))
    .join("")

  const suggestionElements = document.querySelectorAll(".search-suggestion")
  suggestionElements.forEach((element, index) => {
    element.addEventListener("click", () => {
      handleSuggestionClick(filteredIntegrations[index])
    })
    element.addEventListener("keydown", (e) => {
      handleSuggestionKeydown(e, index, suggestionElements.length)
    })
  })
}

function createSearchSuggestion(integration, index) {
  return `
  <a href="readme.html?id=${encodeURIComponent(integration.id)}" class="integration-card-link">
    <div class="search-suggestion" tabindex="0" role="option" aria-label="${integration.name} integration">
      <img 
        src="${integration.icon}" 
        alt="" 
        class="search-suggestion-icon"
        aria-hidden="true"
      >
      <div class="search-suggestion-content">
        <div class="search-suggestion-title">${escapeHtml(integration.name)}</div>
        <div class="search-suggestion-description">${escapeHtml(integration.description)}</div>
      </div>
      <span class="search-suggestion-category">${escapeHtml(integration.category)}</span>
    </div>
  <a/>
  `
}

function handleSuggestionClick(integration) {
  closeSearchOverlay()

  const targetSection = document.getElementById(`${integration.category.toLowerCase()}-section`)
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    setTimeout(() => {
      const card = document.querySelector(`[data-integration-id="${integration.id}"]`)
      if (card) {
        card.focus()
        card.style.transform = "scale(1.02)"
        setTimeout(() => {
          card.style.transform = ""
        }, 500)
      }
    }, 500)
  }

  announceToScreenReader(`Selected ${integration.name} from search results`)
}

function handleSuggestionKeydown(e, index, totalSuggestions) {
  switch (e.key) {
    case "Enter":
    case " ":
      e.preventDefault()
      e.target.click()
      break
    case "ArrowUp":
      e.preventDefault()
      if (index === 0) {
        searchOverlayInput.focus()
      } else {
        const prevSuggestion = document.querySelectorAll(".search-suggestion")[index - 1]
        prevSuggestion?.focus()
      }
      break
    case "ArrowDown":
      e.preventDefault()
      if (index < totalSuggestions - 1) {
        const nextSuggestion = document.querySelectorAll(".search-suggestion")[index + 1]
        nextSuggestion?.focus()
      }
      break
    case "Escape":
      closeSearchOverlay()
      break
  }
}

function setupFAQ() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("faq-question")) {
      handleFAQClick(e.target)
    }
  })
}

function renderFAQ() {
  const faqContainer = document.getElementById("faq-container")
  if (!faqContainer) return

  faqContainer.innerHTML = faqData.map((faq) => createFAQItem(faq)).join("")
}

function createFAQItem(faq) {
  return `
    <div class="faq-item">
      <button 
        class="faq-question" 
        aria-expanded="false" 
        aria-controls="faq-answer-${faq.id}"
        id="faq-question-${faq.id}"
      >
        <span>${escapeHtml(faq.question)}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div
        class="faq-answer" 
        id="faq-answer-${faq.id}"
        aria-labelledby="faq-question-${faq.id}"
        role="region"
      >
        <p>${escapeHtml(faq.answer)}</p>
      </div>
    </div>
  `
}

function handleFAQClick(button) {
  const isExpanded = button.getAttribute("aria-expanded") === "true"
  const answer = button.nextElementSibling

  document.querySelectorAll(".faq-question").forEach((otherButton) => {
    if (otherButton !== button) {
      otherButton.setAttribute("aria-expanded", "false")
      const otherAnswer = otherButton.nextElementSibling
      otherAnswer.classList.remove("active")
    }
  })

  button.setAttribute("aria-expanded", !isExpanded)

  if (!isExpanded) {
    answer.classList.add("active")
    announceToScreenReader(`Expanded: ${button.textContent}`)
  } else {
    answer.classList.remove("active")
    announceToScreenReader(`Collapsed: ${button.textContent}`)
  }
}

function setupAccessibility() {
  if (!document.getElementById("sr-announcements")) {
    const announcements = document.createElement("div")
    announcements.id = "sr-announcements"
    announcements.setAttribute("aria-live", "polite")
    announcements.setAttribute("aria-atomic", "true")
    announcements.className = "sr-only"
    document.body.appendChild(announcements)
  }
}

function announceToScreenReader(message) {
  const announcements = document.getElementById("sr-announcements")
  if (announcements) {
    announcements.textContent = message
    setTimeout(() => {
      announcements.textContent = ""
    }, 1000)
  }
}

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

function isInputFocused() {
  const activeElement = document.activeElement
  return (
    activeElement &&
    (activeElement.tagName === "INPUT" ||
      activeElement.tagName === "TEXTAREA" ||
      activeElement.tagName === "SELECT" ||
      activeElement.isContentEditable)
  )
}