fetch("prosto-eats/files/data.json")
    .then(response => response.json())
    .then(data => {
        const recipes = data.recipes
        const renderLocation = '.featured-recipes'
        renderAllRecipes(recipes, renderLocation)
    })

function printData(data) {
    console.log(data)
}

function renderAllRecipes(recipes, location) {
    recipes.forEach(recipe => {
        renderRecipe(recipe, location)
    });

}

function renderRecipe(recipe, location) {
    // Determine where to render the recipe
    const devLocation = document.querySelector(location);

    // Render the structure
    const containerBox = document.createElement('div');
    containerBox.className = 'col-md-4 mb-3';

    const cardBox = document.createElement('div');
    cardBox.className = 'card';
    containerBox.appendChild(cardBox);

    // image
    const recipeThumbnail = document.createElement('img');
    recipeThumbnail.setAttribute('src', recipe['image-source']);
    recipeThumbnail.className = 'image-fluid w-100 recipe-thumbnail';
    cardBox.appendChild(recipeThumbnail);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const recipeTitle = document.createElement('h5');
    recipeTitle.className = 'card-title';
    recipeTitle.setAttribute('style', 'font-family: Kanit; font-weight: 500;')
    recipeTitle.textContent = recipe['name'] + ' • ' + recipe['time-to-cook'] + ' Minutes'
    cardBody.appendChild(recipeTitle);

    const recipeSubtitle = document.createElement('h6');
    recipeSubtitle.className = 'card-subtitle text-muted mb-2';
    recipeSubtitle.setAttribute('style', 'font-family: Kanit; font-weight: 500;')
    recipeSubtitle.textContent = recipe['origin'] + ' Origin'
    cardBody.appendChild(recipeSubtitle);

    const recipeDescription = document.createElement('p');
    recipeDescription.className = 'page-body-text';
    recipeDescription.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, assumenda nemo ipsum labore maxime vel.';
    cardBody.appendChild(recipeDescription);

    cardBox.appendChild(cardBody);

    // Append the container box to the specified location
    devLocation.appendChild(containerBox);
}

function renderFeaturedRecipes(recipes) {
    numRecipes = recipes.length
    console.log(numRecipes)

    // get the featured numbers

    featuredIndexes = []
    while (featuredIndexes.length <= 3) {

    }

}