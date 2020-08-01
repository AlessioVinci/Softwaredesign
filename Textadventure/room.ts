namespace Textadventure {
    export class Room {
        private roomId: number;
        private roomDesc: string;
        private roomIdNorth: number;
        private roomIdEast: number;
        private roomIdSouth: number;
        private roomIdWest: number;
        private roomIdUp: number;
        private roomIdDown: number;
        private roomCreatures: Creature[];
        private roomItems: Item[];


        constructor(_roomId: number, _roomDesc: string, _roomCreatures: Creature[], _roomItems: Item[], _roomIdNorth: number, _roomIdEast: number, _roomIdSouth: number, _roomIdWest: number, _roomIdUp: number, _roomIdDown: number) {
            this.roomId = _roomId;
            this.roomDesc = _roomDesc;
            this.roomCreatures = _roomCreatures;
            this.roomItems = _roomItems;
            this.roomIdNorth = _roomIdNorth;
            this.roomIdEast = _roomIdEast;
            this.roomIdSouth = _roomIdSouth;
            this.roomIdWest = _roomIdWest;
            this.roomIdUp = _roomIdUp;
            this.roomIdDown = _roomIdDown;
        }

        //Basic Getters
        getRoom(): Room {
            return this;
        }

        getRoomId(): number {
            return this.roomId;
        }

        getRoomDesc(): string {
            return this.roomDesc;
        }

        getRoomNorth(): number {
            return this.roomIdNorth;
        }

        getRoomEast(): number {
            return this.roomIdEast;
        }

        getRoomSouth(): number {
            return this.roomIdSouth;
        }

        getRoomWest(): number {
            return this.roomIdWest;
        }

        getRoomUp(): number {
            return this.roomIdUp;
        }

        getRoomDown(): number {
            return this.roomIdDown;
        }

        //Manage Room Creatures
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

        //Manage Room Items
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

    export function findRoomById(roomId: number): Room {
        return allRooms.find(i => i.roomId === roomId);
    }
}