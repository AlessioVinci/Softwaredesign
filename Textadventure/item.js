var Textadventure;
(function (Textadventure) {
    var Item = /** @class */ (function () {
        function Item(_itemId, _name, _desc, _inRoomId, _atkBonus, _healthBonus) {
            this.itemId = _itemId;
            this.name = _name;
            this.desc = _desc;
            this.inRoomId = _inRoomId;
            this.atkBonus = _atkBonus;
            this.healthBonus = _healthBonus;
        }
        //Basic Getters
        Item.prototype.getItemId = function () {
            return this.itemId;
        };
        Item.prototype.getName = function () {
            return this.name;
        };
        Item.prototype.getDesc = function () {
            return this.desc;
        };
        Item.prototype.getInRoomId = function () {
            return this.inRoomId;
        };
        Item.prototype.getAtkBonus = function () {
            return this.atkBonus;
        };
        Item.prototype.getHealthBonus = function () {
            return this.healthBonus;
        };
        return Item;
    }());
    Textadventure.Item = Item;
})(Textadventure || (Textadventure = {}));
