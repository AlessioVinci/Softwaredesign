var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Room = /** @class */ (function () {
    function Room(_roomId, _roomCreatures, _roomItems, _roomIdNorth, _roomIdEast, _roomIdSouth, _roomIdWest, _roomIdUp, _roomIdDown) {
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
    Room.prototype.getRoom = function () {
        return this;
    };
    Room.prototype.getRoomCreatures = function () {
        return this.roomCreatures;
    };
    Room.prototype.addCreatureToRoom = function (singleCreature) {
        this.roomCreatures.push(singleCreature);
    };
    Room.prototype.removeCreatureFromRoom = function (singleCreature) {
        var key = this.roomCreatures.indexOf(singleCreature);
        console.log("the del key is " + key);
        this.roomCreatures.splice(key, 1);
    };
    Room.prototype.getRoomItems = function () {
        return this.roomItems;
    };
    Room.prototype.addItemToRoom = function (singleItem) {
        this.roomItems.push(singleItem);
    };
    Room.prototype.removeItemFromRoom = function (singleItem) {
        var key = this.roomItems.indexOf(singleItem);
        this.roomItems = this.roomItems.splice(key, 1);
    };
    return Room;
}());
var Item = /** @class */ (function () {
    function Item(_itemId, _name, _desc, _inRoomId, _atkBonus, _healthBonus) {
        this.itemId = _itemId;
        this.name = _name;
        this.desc = _desc;
        this.inRoomId = _inRoomId;
        this.atkBonus = _atkBonus;
        this.healthBonus = _healthBonus;
    }
    return Item;
}());
var Creature = /** @class */ (function () {
    function Creature(_creatureId, _name, _desc, _inRoomId, _status, _maxHealth, _atk) {
        this.creatureId = _creatureId;
        this.name = _name;
        this.desc = _desc;
        this.inRoomId = _inRoomId;
        this.status = _status;
        this.maxHealth = _maxHealth;
        this.health = _maxHealth;
        this.atk = _atk;
    }
    Creature.prototype.changeStatus = function () {
        this.status = !this.status;
    };
    Creature.prototype.applyDmg = function (dmg) {
        this.health = this.health - dmg;
        if (this.health <= 0) {
            this.health = 0;
            /* this.die(); */
        }
    };
    Creature.prototype.die = function () {
        var currentRoom = findRoomById(this.inRoomId);
        currentRoom.removeCreatureFromRoom(this);
    };
    Creature.prototype.attack = function (target) {
        target.applyDmg(this.atk);
    };
    return Creature;
}());
var CreatureAdvanced = /** @class */ (function (_super) {
    __extends(CreatureAdvanced, _super);
    function CreatureAdvanced(name, desc, inRoomId, creatureId, status, maxHealth, atk, _inventory, _alignment, _dialogue) {
        var _this = _super.call(this, creatureId, name, desc, inRoomId, status, maxHealth, atk) || this;
        _this.inventory = _inventory;
        _this.alignment = _alignment;
        _this.dialogue = _dialogue;
        return _this;
    }
    return CreatureAdvanced;
}(Creature));
var creaturesEntrance = [new Creature("BC001", "Undead Wolf", "It's a wolf but undead, duh.", 1, true, 4, 1),
    new Creature("BC002", "Undead Wolf", "It's a wolf but undead, duh.", 1, true, 4, 1),
    new Creature("BC003", "Undead Wolf", "It's a wolf but undead, duh.", 1, true, 4, 1)];
var entrance = new Room(1, creaturesEntrance, undefined, 0, 0, 1, 0, 0, 0);
var creaturesMainHall = [new Creature("BC004", "Undead Wolf", "It's a wolf but undead, duh.", 2, true, 4, 1),
    new Creature("BC005", "Undead Wolf", "It's a wolf but undead, duh.", 2, true, 4, 1)];
var mainHall = new Room(2, creaturesMainHall, undefined, 0, 0, 1, 0, 0, 0);
var allRooms = [entrance, mainHall];
console.log(1);
console.log("Index 0 before remove " + entrance.getRoomCreatures()[0].creatureId);
console.log("Index 1 before remove " + entrance.getRoomCreatures()[1].creatureId);
console.log("Index 2 before remove " + entrance.getRoomCreatures()[2].creatureId);
console.log(2);
entrance.getRoomCreatures()[2].die();
console.log("Index 0 after remove " + entrance.getRoomCreatures()[0].creatureId);
console.log("Index 1 after remove " + entrance.getRoomCreatures()[1].creatureId);
console.log("Index 2 after remove " + entrance.getRoomCreatures()[2].creatureId);
function findRoomById(roomId) {
    return allRooms.find(function (i) { return i.roomId === roomId; });
}
