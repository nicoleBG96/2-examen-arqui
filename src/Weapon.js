import WeaponDecorator from './WeaponDecorator.js';

export default class Weapon {

    constructor() {}
    isArc() {
        this.weaponDecorator = new WeaponDecorator();
        this.damage = 5;
    }

    isSword() {
        this.weaponDecorator = new WeaponDecorator();
        this.damage = 10;
    }

    returnDamage() {
        return this.damage + this.weaponDecorator.additionalDamage;
    }
}