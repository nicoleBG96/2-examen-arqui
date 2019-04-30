export default class WeaponDecorator {

    constructor() {
        this.additionalDamage = 0;
    }
    
    isFire() {
        this.additionalDamage = this.additionalDamage + 30;
    }

    isIron() {
        this.additionalDamage = this.additionalDamage + 10;
    }

    isWood() {
        this.additionalDamage = this.additionalDamage + 5;
    }
}