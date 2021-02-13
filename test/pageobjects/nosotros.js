const RedSauce = require('./redsauce');

/**
 * En esta clase se definen selectores y métodos específicos para tests relacionados con la sección 'Nosotros'
 */
class NosotrosSection extends RedSauce {
    /**
     * Aquí se definen los selectores
     */
    get profiles () { return $$('.team-box') }
    get nosotrosSection () { return $('//body/div[1]/header/div/nav/div/ul/li[1]/a') } //xPath del elemento que hay que clicar para acceder a la sección 'nosotros'

    /**
     * Función que redirecciona a la sección 'Nosotros' 
     */
    gotoNosotros () {
        return super.gotoSection(this.nosotrosSection);
    }

    /**
     * Función que espera que el número de perfiles de la sección 'Nosotros' sea igual a num
     */
    countProfiles(num) {
        return super.expectElements(this.profiles, num);
    }
}

module.exports = new NosotrosSection();
