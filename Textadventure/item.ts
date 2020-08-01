namespace Textadventure {
    export class Item {
        private itemId: string;
        private name: string;
        private desc: string;
        private inRoomId: number;
        private atkBonus: number;
        private healthBonus: number;

        constructor(_itemId: string, _name: string, _desc: string, _inRoomId: number, _atkBonus: number, _healthBonus: number) {
            this.itemId = _itemId;
            this.name = _name;
            this.desc = _desc;
            this.inRoomId = _inRoomId;
            this.atkBonus = _atkBonus;
            this.healthBonus = _healthBonus;
        }

        //Basic Getters
        getItemId(): string {
            return this.itemId;
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

    }
}