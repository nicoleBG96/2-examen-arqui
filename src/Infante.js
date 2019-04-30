import Weapon from './Weapon.js';

export default class Infante {

    constructor() {
        this.weapon = new Weapon();
        this.weapon.isSword();
    }
}