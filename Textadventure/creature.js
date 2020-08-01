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
            //do stuff
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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //Player Functions
        Player.prototype.help = function () {
            return "help";
        };
        Player.prototype.look = function () {
            return "I see nothing";
        };
        Player.prototype.take = function (pickedItemName) {
            var itemRoom = Textadventure.findRoomById(this.getInRoomId());
            var pickedItem = itemRoom.getRoomItems().find(function (i) { return i.getName() === pickedItemName; });
            itemRoom.removeItemFromRoom(pickedItem);
            _super.prototype.getInventory.call(this).push(pickedItem);
        };
        Player.prototype.inventory = function () {
            return "list of inventory";
        };
        Player.prototype.drop = function (droppedItemName) {
            var droppedItem = _super.prototype.getInventory.call(this).find(function (i) { return i.getName() === droppedItemName; });
            _super.prototype.getInventory.call(this).splice(_super.prototype.getInventory.call(this).indexOf(droppedItem));
            Textadventure.findRoomById(droppedItem.getInRoomId()).addItemToRoom(droppedItem);
        };
        Player.prototype.attack = function (target) {
            getCreatureByName(target).applyDmg(this.getAtk());
        };
        Player.prototype.talk = function (target) {
            return getCreatureByName(target).getDialogue();
        };
        Player.prototype.inspect = function (target) {
            return "You look at the " + getCreatureByName(target).getName() + ". You realize, " + getCreatureByName(target).getDesc()
                + ". After inspecting it for a while you can see it's current Health (" + getCreatureByName(target).getCurrentHealth()
                + ") and it's Attack Value (" + getCreatureByName(target).getAtk() + ")";
        };
        Player.prototype.quit = function () {
            //close tab;
        };
        return Player;
    }(CreatureAdvanced));
    Textadventure.Player = Player;
    function getCreatureByName(targetName) {
        return Textadventure.allCreatures.find(function (i) { return i.getName() === targetName; });
    }
})(Textadventure || (Textadventure = {}));
