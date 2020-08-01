namespace Textadventure {
    export class Creature {
        private creatureId: string;
        private name: string;
        private desc: string;
        private inRoomId: number;
        private status: boolean;
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

        //Basic Getters
        getCreatureId(): string {
            return this.creatureId;
        }

        getName(): string {
            return this.name;
        }

        getDesc(): string {
            return this.desc;
        }

        getInRoomId(): number {
            return this.inRoomId;
        }

        getStatus(): boolean {
            return this.status;
        }

        getCurrentHealth(): number {
            return this.health;
        }

        getAtk(): number {
            return this.atk;
        }

        //Basic Functions
        changeStatus(): void {
            this.status = !this.status;
        }

        applyDmg(dmg: number): void {
            this.health = this.health - dmg;
            if (this.health <= 0) {
                this.health = 0;
                this.die();
            }
        }

        die(): void {
            let currentRoom: Room = findRoomById(this.inRoomId);
            currentRoom.removeCreatureFromRoom(this);
        }

        attack(target: Creature): void {
            target.applyDmg(this.atk);
        }
    }

    export class CreatureAdvanced extends Creature {
        public dialogue: string;
        private inventory: Item[];

        constructor(creatureId: string, name: string, desc: string, inRoomId: number, status: boolean, maxHealth: number, atk: number, _dialogue: string, _inventory: Item[]) {
            super(creatureId, name, desc, inRoomId, status, maxHealth, atk);
            this.inventory = _inventory;
            this.dialogue = _dialogue;
        }

        //Advanced Getters
        getDialogue(): string {
            return this.dialogue;
        }

        //Advanced Functions
        die(): void {
            let currentRoom: Room = findRoomById(this.getInRoomId());
            for (let inventoryItem of this.inventory) {
                currentRoom.addItemToRoom(inventoryItem);
            }
            currentRoom.removeCreatureFromRoom(this);
        }
    }
}