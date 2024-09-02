// TODO Add go to button, stars / reviews?
// TODO add proper descriptions

console.log('I started!')

if (window.location.pathname.includes('all-recipes.html')) {
    // If on the recipes page, render all recipes
    renderLocation = '.all-recipes' // Ensure this matches the class in your recipes.html
    relativeDataLocation = 'files/data.json'
    relativeImagePath = 'images/recipe-thumbnails/'
    
    console.log('in all recipes right now!')
} else {
    // If on the home page, render featured recipes
    renderLocation = '.featured-recipes'
    relativeDataLocation = 'prosto-eats/files/data.json'
    relativeImagePath = 'prosto-eats/images/recipe-thumbnails/'
    // console.log('in featured recipes right now!')
}


// [FETCH] Get access to actual JSON file.
fetch(relativeDataLocation)
    .then(response => response.json())
    .then(data => {

        // [RECIPES] Initialize the actual recipe list.
        const recipes = data.recipes

        // [LOCATION] Determine where this file is actually going to load.
        if (renderLocation.includes('.featured-recipes')) {
            renderFeaturedRecipes(recipes, renderLocation)
        }
        else if (renderLocation.includes('.all-recipes')) {
            renderAllRecipes(recipes, renderLocation)
        }
    })

function renderAllRecipes(recipes, location) {
    recipes.forEach(recipe => {
        renderRecipe(recipe, location)
    })

}

function renderRecipe(recipe, location) {
    // Determine where to render the recipe
    const devLocation = document.querySelector(location)

    // Render the structure
    const containerBox = document.createElement('div')
    if (renderLocation.includes('.all-recipes')) {
        containerBox.className = 'col-md-3 mb-3 recipe-structure'
    }
    else if (renderLocation.includes('.featured-recipes')) {
        containerBox.className = 'col-md-3 mb-3 recipe-structure'    
    }
    containerBox.style.padding = '0'

    const cardBox = document.createElement('div')
    cardBox.className = 'card'
    containerBox.appendChild(cardBox)

    // image
    const recipeThumbnail = document.createElement('img')
    recipeThumbnail.setAttribute('src', (relativeImagePath + recipe['image-source']))
    recipeThumbnail.className = 'image-fluid w-100 recipe-thumbnail'
    cardBox.appendChild(recipeThumbnail)

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    const recipeTitle = document.createElement('h5')
    recipeTitle.className = 'card-title'
    recipeTitle.setAttribute('style', 'font-family: Kanit font-weight: 500')
    recipeTitle.textContent = recipe['name'] + ' • ' + recipe['time-to-cook'] + ' Minutes'
    cardBody.appendChild(recipeTitle)

    const recipeSubtitle = document.createElement('h6')
    recipeSubtitle.className = 'card-subtitle text-muted mb-2'
    recipeSubtitle.setAttribute('style', 'font-family: Kanit font-weight: 500')
    recipeSubtitle.textContent = recipe['origin'] + ' Origin'
    cardBody.appendChild(recipeSubtitle)

    const recipeDescription = document.createElement('p')
    recipeDescription.className = 'page-body-text'
    recipeDescription.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, assumenda nemo ipsum labore maxime vel.'
    cardBody.appendChild(recipeDescription)

    // const seeRecipeButton = document.createElement('button')
    // seeRecipeButton.className = 'btn btn-primary'
    // seeRecipeButton.textContent = 'See Recipe'
    // cardBody.appendChild(seeRecipeButton)


    cardBox.appendChild(cardBody)

    // Append the container box to the specified location
    devLocation.appendChild(containerBox)
}

function renderFeaturedRecipes(recipes, location) {
    numRecipes = recipes.length

    // get the featured numbers

    const featuredIndexes = []
    while (featuredIndexes.length < 3) {
        const randomNumber = Math.floor(Math.random() * numRecipes)
        if (!featuredIndexes.includes(randomNumber)) {
            featuredIndexes.push(randomNumber)
        }
    }

    // display featured (selected) recipes
    featuredIndexes.forEach(featuredIndex => {
        renderRecipe(recipes[featuredIndex], location)
    })
}