document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const modal = document.getElementById('add-recipe-modal');
    const addBtn = document.getElementById('add-recipe-btn');
    const closeBtn = document.querySelector('.close');
    const recipeForm = document.getElementById('recipe-form');
    const recipeContainer = document.getElementById('recipe-container');

    // Open modal when Add Recipe is clicked
    addBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    recipeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('recipe-name').value;
        const image = document.getElementById('recipe-image').value;
        const desc = document.getElementById('recipe-desc').value;
        const link = document.getElementById('recipe-link').value;
        
        // Create new recipe card
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${image}" alt="${name}">
            <h2>${name}</h2>
            <p>${desc}</p>
            <a href="${link}" target="_blank">View Recipe</a>
            <button class="delete-btn">Delete</button>
        `;
        
        // Add to container
        recipeContainer.prepend(recipeCard);
        
        // Reset form and close modal
        recipeForm.reset();
        modal.style.display = 'none';
        
        // Add delete event to new button
        addDeleteEvent(recipeCard.querySelector('.delete-btn'));
    });

    // Add delete events to existing buttons
    document.querySelectorAll('.delete-btn').forEach(btn => {
        addDeleteEvent(btn);
    });

    // Function to add delete event
    function addDeleteEvent(btn) {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this recipe?')) {
                btn.parentElement.remove();
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('add-recipe-modal');
    const addBtn = document.getElementById('add-recipe-btn');
    const closeBtn = document.querySelector('.close');
    
    // Open modal
    addBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form submission
    document.getElementById('recipe-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Your form handling code here
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});