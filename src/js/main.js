/**
 * Course Catalog - Vanilla JavaScript
 */

// Course data (from Figma design)
const courses = [
  { id: 1, title: 'The Ultimate Google Ads Training Course', category: 'Marketing', price: 100, author: 'by Jerome Bell', image: 'images/card-1.png' },
  { id: 2, title: 'Prduct Management Fundamentals', category: 'Management', price: 480, author: 'by Marvin McKinney', image: 'images/card-2.png' },
  { id: 3, title: 'HR Management and Analytics', category: 'HR & Recruting', price: 200, author: 'by Leslie Alexander Li', image: 'images/card-3.png' },
  { id: 4, title: 'Brand Management & PR Communications', category: 'Marketing', price: 530, author: 'by Kristin Watson', image: 'images/card-4.png' },
  { id: 5, title: 'Graphic Design Basic', category: 'Design', price: 500, author: 'by Guy Hawkins', image: 'images/card-5.png' },
  { id: 6, title: 'Business Development Management', category: 'Management', price: 400, author: 'by Dianne Russell', image: 'images/card-6.png' },
  { id: 7, title: 'Highload Software Architecture', category: 'Development', price: 600, author: 'by Brooklyn Simmons', image: 'images/card-7.png' },
  { id: 8, title: 'Human Resources – Selection and Recruitment', category: 'HR & Recruting', price: 150, author: 'by Kathryn Murphy', image: 'images/card-8.png' },
  { id: 9, title: 'User Experience. Human-centered Design', category: 'Design', price: 240, author: 'by Cody Fisher', image: 'images/card-9.png' },
];

// Categories for tabs
const categories = ['All', 'Marketing', 'Management', 'HR & Recruting', 'Design', 'Development'];

// State
let activeCategory = 'All';
let searchQuery = '';
let visibleCount = 6;
const itemsPerPage = 3;

// DOM Elements
const categoryTabsContainer = document.querySelector('.category-tabs');
const cardGrid = document.getElementById('cardGrid');
const searchInput = document.getElementById('searchInput');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreWrapper = document.getElementById('loadMoreWrapper');

// Initialize the app
function init() {
  renderCategoryTabs();
  renderCards();
  setupEventListeners();
}

// Get category badge class
function getCategoryBadgeClass(category) {
  const categoryMap = {
    'Marketing': 'marketing',
    'Management': 'management',
    'HR & Recruting': 'hr',
    'Design': 'design',
    'Development': 'development'
  };
  return categoryMap[category] || 'marketing';
}

// Count courses by category
function getCountByCategory(category) {
  if (category === 'All') return courses.length;
  return courses.filter(course => course.category === category).length;
}

// Create srcset for retina displays
function getSrcSet(imagePath) {
  const basePath = imagePath.replace('.png', '');
  return `${basePath}.png 1x, ${basePath}-2x.png 2x, ${basePath}-3x.png 3x`;
}

// Render category tabs
function renderCategoryTabs() {
  categoryTabsContainer.innerHTML = categories.map(category => `
    <button 
      class="category-tabs__tab ${activeCategory === category ? 'category-tabs__tab--active' : ''}" 
      data-category="${category}"
      role="tab"
      aria-selected="${activeCategory === category}"
    >
      <span class="category-tabs__label">${category}</span>
      <span class="category-tabs__count">${getCountByCategory(category)}</span>
    </button>
  `).join('');
}

// Filter courses based on category and search
function getFilteredCourses() {
  return courses.filter(course => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

// Create card HTML
function createCardHTML(course) {
  return `
    <article class="card">
      <div class="card__image-wrapper">
        <img 
          src="${course.image}" 
          srcset="${getSrcSet(course.image)}"
          alt="${course.title}" 
          class="card__image"
          loading="lazy"
          width="390"
          height="240"
        >
      </div>
      <div class="card__content">
        <span class="card__badge card__badge--${getCategoryBadgeClass(course.category)}">${course.category}</span>
        <h2 class="card__title">${course.title}</h2>
        <div class="card__info">
          <span class="card__price">$${course.price}</span>
          <span class="card__divider"></span>
          <span class="card__author">${course.author}</span>
        </div>
      </div>
    </article>
  `;
}

// Render cards
function renderCards() {
  const filtered = getFilteredCourses();
  const visible = filtered.slice(0, visibleCount);
  
  if (filtered.length === 0) {
    cardGrid.innerHTML = '<div class="card-grid__empty">No courses found</div>';
    loadMoreWrapper.classList.add('course-catalog__load-more--hidden');
    return;
  }

  cardGrid.innerHTML = visible.map(createCardHTML).join('');
  
  // Show/hide load more button
  if (visibleCount >= filtered.length) {
    loadMoreWrapper.classList.add('course-catalog__load-more--hidden');
  } else {
    loadMoreWrapper.classList.remove('course-catalog__load-more--hidden');
  }
}

// Setup event listeners
function setupEventListeners() {
  // Category tabs click
  categoryTabsContainer.addEventListener('click', (e) => {
    const tab = e.target.closest('.category-tabs__tab');
    if (!tab) return;
    
    activeCategory = tab.dataset.category;
    visibleCount = 6; // Reset visible count on category change
    renderCategoryTabs();
    renderCards();
  });

  // Search input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    visibleCount = 6; // Reset visible count on search
    renderCards();
  });

  // Load more button
  loadMoreBtn.addEventListener('click', () => {
    visibleCount += itemsPerPage;
    renderCards();
  });
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', init);

