import { elements } from './base';
import { Fraction } from 'fractional';

const formatCount = (count) => {
  if (count) {
    // count=2.5 --> 2 1/2
    // count=2.5 --> 2 1/2

    const [int, dec] = count
      .toString()
      .split('.')
      .map((el) => parseInt(el, 10));

    if (!dec) return coutn;

    if (int === 0) {
      const fr = new Fraction(count);
      return `${fr.numerator}/${fr.denominator}`;
    } else {
      const fr = new Fraction(count - int);
      return `${int} ${fr.numerator}/${fr.denominator}`;
    }
  }
};

const createIngredient = (ingredient) =>
  `
    <li class="recipe__item">
        <svg class="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__count">${formatCount(ingredient.count)}</div>
        <div class="recipe__ingredient">
        <span class="recipe__unit">${ingredient.unit}</span>
            ${ingredient.ingredient}
        </div>
    </li>
    `;

export const clearRecipe = () => {
  elements.recipe.innerHTML = '';
};

export const renderRecipe = (recipe) => {
  const markup = `
        <figure class="recipe__fig">
                <img src="${recipe.img}" alt="${
    recipe.title
  }" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${recipe.title}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">${
                      recipe.time
                    }</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">${
                      recipe.servings
                    }</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-plus"></use>
                            </svg>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>

            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
                    ${recipe.ingredients
                      .map((elto) => createIngredient(elto))
                      .join(' ')}
                </ul>

                <button class="btn-small recipe__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Agregar a lista de compras</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">Como cocinarla</h2>
                <p class="recipe__directions-text">
                    Esta receta fue cuidadosamente diseñada y probada por
                    <span class="recipe__by">${
                      recipe.author
                    }</span>. Por favor, consulte las instrucciones en su sitio web.
                </p>
                <a class="btn-small recipe__btn" href="${
                  recipe.url
                }" target="_blank">
                    <span>Instrucciones</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>

                </a>
            </div>
        
        `;

  elements.recipe.insertAdjacentHTML('afterbegin', markup);
};
