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
            //do stuff
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

    export class Player extends CreatureAdvanced {

        //Player Functions
        help(): string {
            return "help";
        }

        look(): string {
            return "I see nothing";
        }

        take(pickedItemName: string): void {
            let itemRoom: Room = findRoomById(this.getInRoomId());
            let pickedItem: Item = itemRoom.getRoomItems().find(i => i.getName() === pickedItemName);
            itemRoom.removeItemFromRoom(pickedItem);
            super.getInventory().push(pickedItem);
        }

        inventory(): string {
            return "list of inventory";
        }

        drop(droppedItemName: string): void {
            let droppedItem: Item = super.getInventory().find(i => i.getName() === droppedItemName);
            super.getInventory().splice(super.getInventory().indexOf(droppedItem));
            findRoomById(droppedItem.getInRoomId()).addItemToRoom(droppedItem);
        }

        attack(target: string): void {
            getCreatureByName(target).applyDmg(this.getAtk());
        }

        talk(target: string): string {
            return getCreatureByName(target).getDialogue();
        }

        inspect(target: string): string {
            return "You look at the " + getCreatureByName(target).getName() + ". You realize, " + getCreatureByName(target).getDesc()
            + ". After inspecting it for a while you can see it's current Health (" + getCreatureByName(target).getCurrentHealth()
            + ") and it's Attack Value (" + getCreatureByName(target).getAtk() + ")";
        }

        quit(): void {
            //close tab;
        }


    }

    function getCreatureByName(targetName: string): Creature {
        return allCreatures.find(i => i.getName() === targetName);
    }
}