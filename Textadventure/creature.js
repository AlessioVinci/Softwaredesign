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
var Textadventure;
(function (Textadventure) {
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
        //Basic Getters
        Creature.prototype.getCreatureId = function () {
            return this.creatureId;
        };
        Creature.prototype.getName = function () {
            return this.name;
        };
        Creature.prototype.getDesc = function () {
            return this.desc;
        };
        Creature.prototype.getInRoomId = function () {
            return this.inRoomId;
        };
        Creature.prototype.getStatus = function () {
            return this.status;
        };
        Creature.prototype.getCurrentHealth = function () {
            return this.health;
        };
        Creature.prototype.getAtk = function () {
            return this.atk;
        };
        //Basic Functions
        Creature.prototype.changeStatus = function () {
            this.status = !this.status;
        };
        Creature.prototype.applyDmg = function (dmg) {
            this.health = this.health - dmg;
            if (this.health <= 0) {
                this.health = 0;
                this.die();
            }
        };
        Creature.prototype.die = function () {
            var currentRoom = Textadventure.findRoomById(this.inRoomId);
            currentRoom.removeCreatureFromRoom(this);
        };
        Creature.prototype.attack = function (target) {
            target.applyDmg(this.atk);
        };
        return Creature;
    }());
    Textadventure.Creature = Creature;
    var CreatureAdvanced = /** @class */ (function (_super) {
        __extends(CreatureAdvanced, _super);
        function CreatureAdvanced(creatureId, name, desc, inRoomId, status, maxHealth, atk, _dialogue, _inventory) {
            var _this = _super.call(this, creatureId, name, desc, inRoomId, status, maxHealth, atk) || this;
            _this.inventory = _inventory;
            _this.dialogue = _dialogue;
            return _this;
        }
        //Advanced Getters
        CreatureAdvanced.prototype.getDialogue = function () {
            return this.dialogue;
        };
        //Advanced Functions
        CreatureAdvanced.prototype.die = function () {
            var currentRoom = Textadventure.findRoomById(this.getInRoomId());
            for (var _i = 0, _a = this.inventory; _i < _a.length; _i++) {
                var inventoryItem = _a[_i];
                currentRoom.addItemToRoom(inventoryItem);
            }
            currentRoom.removeCreatureFromRoom(this);
        };
        return CreatureAdvanced;
    }(Creature));
    Textadventure.CreatureAdvanced = CreatureAdvanced;
})(Textadventure || (Textadventure = {}));
