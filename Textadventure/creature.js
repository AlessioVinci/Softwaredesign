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
        function Creature(_creatureId, _name, _desc, _inRoomId, _status, _maxHealth, _atk, _dialogue) {
            this.creatureId = _creatureId;
            this.name = _name;
            this.desc = _desc;
            if (_dialogue == "") {
                this.dialogue = "This creature doesn't seem intelligent enough to talk to.";
            }
            else {
                this.dialogue = _dialogue;
            }
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
        Creature.prototype.getDialogue = function () {
            return this.dialogue;
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
            else {
                if (Math.floor(Math.random() * 100) % 4 == 0) {
                    this.attackPlayer();
                }
            }
        };
        Creature.prototype.die = function () {
            var currentRoom = Textadventure.findRoomById(this.inRoomId);
            currentRoom.removeCreatureFromRoom(this);
        };
        Creature.prototype.attackPlayer = function () {
            if (Math.round(Math.random() * 100) % 5 == 0) {
                Textadventure.playerHealth = Textadventure.playerHealth - this.getAtk();
                if (Textadventure.playerHealth < 0)
                    Textadventure.playerHealth = 0;
                console.log(this.getName() + " hit back and dealt you " + this.getAtk() + " damage. \n You have " + Textadventure.playerHealth + " HP left.");
                Textadventure.checkPlayerStatus();
            }
        };
        return Creature;
    }());
    Textadventure.Creature = Creature;
    var CreatureAdvanced = /** @class */ (function (_super) {
        __extends(CreatureAdvanced, _super);
        function CreatureAdvanced(creatureId, name, desc, inRoomId, status, maxHealth, atk, _dialogue, _inventory) {
            var _this = _super.call(this, creatureId, name, desc, inRoomId, status, maxHealth, atk, _dialogue) || this;
            _this.hiddenInventory = _inventory;
            return _this;
        }
        //Advanced Getters
        CreatureAdvanced.prototype.getInventory = function () {
            return this.hiddenInventory;
        };
        //Advanced Functions
        CreatureAdvanced.prototype.die = function () {
            var currentRoom = Textadventure.findRoomById(this.getInRoomId());
            for (var _i = 0, _a = this.hiddenInventory; _i < _a.length; _i++) {
                var inventoryItem = _a[_i];
                currentRoom.addItemToRoom(inventoryItem);
            }
            currentRoom.removeCreatureFromRoom(this);
        };
        return CreatureAdvanced;
    }(Creature));
    Textadventure.CreatureAdvanced = CreatureAdvanced;
    function getCreatureByName(targetName) {
        return Textadventure.allCreatures.find(function (i) { return i.getName() === targetName; });
    }
    Textadventure.getCreatureByName = getCreatureByName;
})(Textadventure || (Textadventure = {}));
