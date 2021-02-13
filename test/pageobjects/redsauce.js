/**
* Métodos genéricos que se pueden usar en cualquier test relacionado con la página web de Redsauce
*/
module.exports = class RedSauce {
    /**
    * @param path Ruta de la página
    * @param mainPage URL de la página principal de Redsauce
    * @param section Elemento que al ser clicado redirecciona a una sección determinada
    */

    constructor() {
        this.mainPage = 'https://redsauce.net/es';
    }

    setLanguage(lan) {
        switch(lan) {
            case 'es':
            case 'en':
                this.mainPage = 'https://redsauce.net/'.concat(lan);
                break;
            default:
                this.mainPage = 'https://redsauce.net/es';
                break;
        }
    }

    open (path) {
        return browser.url(path)
    }

    gotoMainPage() {
        this.open(this.mainPage);
    }

    gotoSection (section) {
        section.isClickable() === true ? section.click() : browser.url(section.getAttribute('href'));

        /* En caso que en section se pase una url relativa (ej: 'nosotros') en lugar del elemento (ej: boton) que redirecciona */
        // let sectionURL = this.mainPage.concat('/').concat(section);
        // this.open(sectionURL);
    }

    expectElements(tag, num) {
        expect(tag).toBeElementsArrayOfSize(num); 
    }
}
