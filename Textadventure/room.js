var Textadventure;
(function (Textadventure) {
    var Room = /** @class */ (function () {
        function Room(_roomId, _roomDesc, _roomCreatures, _roomItems, _roomIdNorth, _roomIdEast, _roomIdSouth, _roomIdWest, _roomIdUp, _roomIdDown) {
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
        Room.prototype.getRoom = function () {
            return this;
        };
        Room.prototype.getRoomId = function () {
            return this.roomId;
        };
        Room.prototype.getRoomDesc = function () {
            return this.roomDesc;
        };
        Room.prototype.getRoomNorth = function () {
            return this.roomIdNorth;
        };
        Room.prototype.getRoomEast = function () {
            return this.roomIdEast;
        };
        Room.prototype.getRoomSouth = function () {
            return this.roomIdSouth;
        };
        Room.prototype.getRoomWest = function () {
            return this.roomIdWest;
        };
        Room.prototype.getRoomUp = function () {
            return this.roomIdUp;
        };
        Room.prototype.getRoomDown = function () {
            return this.roomIdDown;
        };
        //Manage Room Creatures
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
        //Manage Room Items
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
    Textadventure.Room = Room;
    function findRoomById(roomId) {
        return Textadventure.allRooms.find(function (i) { return i.roomId === roomId; });
    }
    Textadventure.findRoomById = findRoomById;
})(Textadventure || (Textadventure = {}));
