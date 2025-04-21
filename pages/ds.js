// List data
const items = [
    {
        id: 1,
        title: "Football Kits",
        description: "This is the detailed description for Item 1.",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        id: 2,
        title: "Logo Redesign",
        description: "This is the detailed description for Item 2.",
        imageUrl: "https://via.placeholder.com/100"
    },
    {
        id: 3,
        title: "Item 3",
        description: "This is the detailed description for Item 3.",
        imageUrl: "https://via.placeholder.com/100"
    }
];

// DOM elements
const interactiveList = document.getElementById('interactive-list');
const hoverImage = document.getElementById('hoverImage');
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlay-title');
const overlayDescription = document.getElementById('overlay-description');
const overlayContent = document.querySelector('.overlay-content');

// Generate list items from the data array
function generateListItems() {
    interactiveList.innerHTML = items.map(item => `
        <li 
            onmouseenter="showImage(event, '${item.imageUrl}')" 
            onmouseleave="hideImage()" 
            onclick="openOverlay(${item.id})"
        >
            ${item.title}
        </li>
    `).join('');
}

// Show hover image
function showImage(event, imageUrl) {
    hoverImage.src = imageUrl;
    hoverImage.classList.add('visible');
    positionImage(event);
    document.addEventListener('mousemove', positionImage);
}

// Hide hover image
function hideImage() {
    hoverImage.classList.remove('visible');
    document.removeEventListener('mousemove', positionImage);
}

// Position hover image
function positionImage(event) {
    hoverImage.style.left = `${event.pageX + 15}px`;
    hoverImage.style.top = `${event.pageY + 15}px`;
}

// Open overlay with item details
function openOverlay(itemId) {
    const item = items.find(i => i.id === itemId);
    overlayTitle.textContent = item.title;
    overlayDescription.textContent = item.description;
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

// Close overlay
function closeOverlay() {
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
}

// Handle overlay click (close when clicking outside content)
function handleOverlayClick(event) {
    if (!overlayContent.contains(event.target)) {
        closeOverlay();
    }
}

// Close overlay with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && overlay.classList.contains('visible')) {
        closeOverlay();
    }
});

// Add close button to overlay content
const closeButton = document.createElement('button');
closeButton.className = 'close-btn';
closeButton.innerHTML = '&times;';
closeButton.onclick = closeOverlay;
overlayContent.prepend(closeButton);

// Initialize the list
generateListItems();

// Add click handler to overlay
overlay.onclick = handleOverlayClick;
document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector('.preloader');
    const body = document.body;

    // Assuming the GIF duration is 3 seconds (3000ms)
    setTimeout(() => {
      preloader.style.transform = 'translateY(-100%)';
      preloader.addEventListener('transitionend', () => {
        preloader.style.display = 'none';
        body.style.overflow = 'auto'; // Re-enable scrolling after preloader is gone
      });
    }, 3000); // Adjust the time based on your GIF duration
  });