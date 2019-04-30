import Infante from './Infante.js';
import Arquero from './Arquero.js';

export default class Guerrero {

    constructor(tipo) {
        this.tipo = this.crearGuerrero(tipo);
    }

    crearGuerrero(nombre) {
        let tipo;
        switch (nombre) {
            case 'infanteria':
                tipo = new Infante();
                break;
            case 'arquero':
                tipo = new Arquero();
                break;
        }
        return tipo;
    }

}