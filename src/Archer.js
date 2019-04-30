import Weapon from './Weapon.js';

export default class Archer{
    
    constructor(){
        this.weapon = new Weapon ();
        this.weapon.isArc();
    }
}
