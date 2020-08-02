namespace Textadventure {
    export class Creature {
        private creatureId: string;
        private name: string;
        private desc: string;
        private dialogue: string;
        private inRoomId: number;
        private status: boolean;
        private maxHealth: number;
        private health: number;
        private atk: number;

        constructor(_creatureId: string, _name: string, _desc: string, _inRoomId: number, _status: boolean, _maxHealth: number, _atk: number, _dialogue: string) {
            this.creatureId = _creatureId;
            this.name = _name;
            this.desc = _desc;
            if (_dialogue == "") {
                this.dialogue = "This creature doesn't seem intelligent enough to talk to.";
            } else {
                this.dialogue = _dialogue;
            }
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

        getDialogue(): string {
            return this.dialogue;
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
            } else {
                if (Math.floor(Math.random() * 100) % 4 == 0) {
                    this.attackPlayer();
                }
            }
        }

        die(): void {
            let currentRoom: Room = findRoomById(this.inRoomId);
            currentRoom.removeCreatureFromRoom(this);
        }

        attackPlayer(): void {
            if (Math.round(Math.random() * 100) % 5 == 0) {
                playerHealth = playerHealth - this.getAtk();
                if (playerHealth < 0) playerHealth = 0;
                console.log(this.getName() + " hit back and dealt you " + this.getAtk() + " damage. \n You have " + playerHealth + " HP left.");
                checkPlayerStatus();
            }
        }
    }

    export class CreatureAdvanced extends Creature {
        private hiddenInventory: Item[];

        constructor(creatureId: string, name: string, desc: string, inRoomId: number, status: boolean, maxHealth: number, atk: number, _dialogue: string, _inventory: Item[]) {
            super(creatureId, name, desc, inRoomId, status, maxHealth, atk, _dialogue);
            this.hiddenInventory = _inventory;

        }

        //Advanced Getters
        getInventory(): Item[] {
            return this.hiddenInventory;
        }

        //Advanced Functions
        die(): void {
            let currentRoom: Room = findRoomById(this.getInRoomId());
            for (let inventoryItem of this.hiddenInventory) {
                currentRoom.addItemToRoom(inventoryItem);
            }
            currentRoom.removeCreatureFromRoom(this);
        }
    }

    export function getCreatureByName(targetName: string): Creature {
        return allCreatures.find(i => i.getName() === targetName);
    }
}