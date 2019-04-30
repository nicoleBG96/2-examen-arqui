import Infante from './Infante.js';
import Archer from './Archer.js';

export default class Warrior{

    constructor(type){
        this.type = createWarrior(type);
    }

    createWarrior(grade){
        let type;
        switch (grade){
            case 'infantry': 
                type = new Infante;
            case 'archer':
                type = new Archer;
        }
        return type;
    }
}