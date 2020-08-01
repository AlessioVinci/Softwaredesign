class Room {
    public roomId: number;
    public roomIdNorth: number;
    public roomIdEast: number;
    public roomIdSouth: number;
    public roomIdWest: number;
    public roomIdUp: number;
    public roomIdDown: number;
    private roomCreatures: Creature[];
    private roomItems: Item[];


    constructor(_roomId: number, _roomCreatures: Creature[], _roomItems: Item[], _roomIdNorth: number, _roomIdEast: number, _roomIdSouth: number, _roomIdWest: number, _roomIdUp: number, _roomIdDown: number) {
        this.roomId = _roomId;
        this.roomCreatures = _roomCreatures;
        this.roomItems = _roomItems;
        this.roomIdNorth = _roomIdNorth;
        this.roomIdEast = _roomIdEast;
        this.roomIdSouth = _roomIdSouth;
        this.roomIdWest = _roomIdWest;
        this.roomIdUp = _roomIdUp;
        this.roomIdDown = _roomIdDown;
    }

    getRoom(): Room {
        return this;
    }

    getRoomCreatures(): Creature[] {
        return this.roomCreatures;
    }

    addCreatureToRoom(singleCreature: Creature): void {
        this.roomCreatures.push(singleCreature);
    }

    removeCreatureFromRoom(singleCreature: Creature): void {
        let key: number = this.roomCreatures.indexOf(singleCreature);
        console.log("the del key is " + key);
        this.roomCreatures.splice(key, 1);
    }

    getRoomItems(): Item[] {
        return this.roomItems;
    }

    addItemToRoom(singleItem: Item): void {
        this.roomItems.push(singleItem);
    }

    removeItemFromRoom(singleItem: Item): void {
        let key: number = this.roomItems.indexOf(singleItem);
        this.roomItems = this.roomItems.splice(key, 1);
    }
}

class Item {
    public itemId: string;
    public name: string;
    public desc: string;
    public inRoomId: number;
    private atkBonus: number;
    private healthBonus: number;

    constructor( _itemId: string, _name: string, _desc: string, _inRoomId: number, _atkBonus: number, _healthBonus: number) {
        this.itemId = _itemId;
        this.name = _name;
        this.desc = _desc;
        this.inRoomId = _inRoomId;
        this.atkBonus = _atkBonus;
        this.healthBonus = _healthBonus;
    }
}

class Creature {
    public creatureId: string;
    public name: string;
    public desc: string;
    public inRoomId: number;
    public status: boolean;
    private maxHealth: number;
    private health: number;
    private atk: number;

    constructor(_creatureId: string, _name: string, _desc: string, _inRoomId: number, _status: boolean, _maxHealth: number, _atk: number) {
        this.creatureId = _creatureId;
        this.name = _name;
        this.desc = _desc;
        this.inRoomId = _inRoomId;
        this.status = _status;
        this.maxHealth = _maxHealth;
        this.health = _maxHealth;
        this.atk = _atk;
    }

    changeStatus(): void {
        this.status = !this.status;
    }

    applyDmg(dmg: number): void {
        this.health = this.health - dmg;
        if (this.health <= 0) {
            this.health = 0;
            /* this.die(); */
        }
    }

    public die(): void {
        let currentRoom: Room = findRoomById(this.inRoomId);
        currentRoom.removeCreatureFromRoom(this);
    }

    attack(target: Creature): void {
        target.applyDmg(this.atk);
    }
}

class CreatureAdvanced extends Creature {
    public dialogue: string;
    public alignment: string;
    private inventory: Item[];

    constructor(name: string, desc: string, inRoomId: number, creatureId: string, status: boolean, maxHealth: number, atk: number, _inventory: Item[], _alignment: string, _dialogue: string) {
        super(creatureId, name, desc, inRoomId, status, maxHealth, atk);
        this.inventory = _inventory;
        this.alignment = _alignment;
        this.dialogue = _dialogue;
    }

   /*  dropItemsOnDeath(): void {
        for (let SingleItem in this.inventory) {

        }
    } */
}

let creaturesEntrance: Creature[] = [new Creature("BC001", "Undead Wolf", "It's a wolf but undead, duh.", 1, true, 4, 1),
new Creature("BC002", "Undead Wolf", "It's a wolf but undead, duh.", 1, true, 4, 1),
new Creature("BC003", "Undead Wolf", "It's a wolf but undead, duh.", 1, true, 4, 1)];
let entrance: Room = new Room(1, creaturesEntrance, undefined, 0, 0, 1, 0, 0, 0);

let creaturesMainHall: Creature[] = [new Creature("BC004", "Undead Wolf", "It's a wolf but undead, duh.", 2, true, 4, 1),
new Creature("BC005", "Undead Wolf", "It's a wolf but undead, duh.", 2, true, 4, 1)];
let mainHall: Room = new Room(2, creaturesMainHall, undefined, 0, 0, 1, 0, 0, 0);

let allRooms: Room[] = [entrance, mainHall];

console.log(1);
console.log("Index 0 before remove " + entrance.getRoomCreatures()[0].creatureId);
console.log("Index 1 before remove " + entrance.getRoomCreatures()[1].creatureId);
console.log("Index 2 before remove " + entrance.getRoomCreatures()[2].creatureId);
console.log(2);
entrance.getRoomCreatures()[2].die();
console.log("Index 0 after remove " + entrance.getRoomCreatures()[0].creatureId);
console.log("Index 1 after remove " + entrance.getRoomCreatures()[1].creatureId);
console.log("Index 2 after remove " + entrance.getRoomCreatures()[2].creatureId);

function findRoomById(roomId: number): Room {
    return allRooms.find(i => i.roomId === roomId);
}