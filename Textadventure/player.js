var Textadventure;
(function (Textadventure) {
    //Player Stats
    var playerCurrentRoomId = 1;
    var playerBaseHealth = 20;
    var playerMaxHealth = playerBaseHealth;
    Textadventure.playerHealth = playerMaxHealth;
    var playerBaseAtk = 4;
    var playerAtk = playerBaseAtk;
    var playerInventory;
    //Player Functions
    function help() {
        console.log("help");
    }
    Textadventure.help = help;
    function look() {
        console.log("you see");
    }
    Textadventure.look = look;
    function take(pickedItemName) {
        var itemRoom = Textadventure.findRoomById(playerCurrentRoomId);
        var pickedItem = itemRoom.getRoomItems().find(function (i) { return i.getName() === pickedItemName; });
        itemRoom.removeItemFromRoom(pickedItem);
        playerInventory.push(pickedItem);
        updatePlayerStats();
    }
    Textadventure.take = take;
    function inventory() {
        console.log("you have an inventory");
    }
    Textadventure.inventory = inventory;
    function drop(droppedItemName) {
        var droppedItem = playerInventory.find(function (i) { return i.getName() === droppedItemName; });
        playerInventory.splice(playerInventory.indexOf(droppedItem));
        Textadventure.findRoomById(droppedItem.getInRoomId()).addItemToRoom(droppedItem);
        updatePlayerStats();
    }
    Textadventure.drop = drop;
    function attack(target) {
        Textadventure.getCreatureByName(target).applyDmg(playerAtk);
        Textadventure.getCreatureByName(target).attackPlayer();
    }
    Textadventure.attack = attack;
    function talk(target) {
        console.log(Textadventure.getCreatureByName(target).getName() + ": \n" + Textadventure.getCreatureByName(target).getDialogue());
    }
    Textadventure.talk = talk;
    function inspect(target) {
        return "You look at the " + Textadventure.getCreatureByName(target).getName() + ". You realize, " + Textadventure.getCreatureByName(target).getDesc()
            + ". After inspecting it for a while you can see it's current Health (" + Textadventure.getCreatureByName(target).getCurrentHealth()
            + ") and it's Attack Value (" + Textadventure.getCreatureByName(target).getAtk() + ")";
    }
    Textadventure.inspect = inspect;
    function quit() {
        //close tab;
    }
    Textadventure.quit = quit;
    //Player Help Functions
    function updatePlayerStats() {
        var newMaxHealth = playerBaseHealth;
        var newCurrentHealth = playerBaseHealth;
        var newAtk = playerBaseAtk;
        for (var _i = 0, playerInventory_1 = playerInventory; _i < playerInventory_1.length; _i++) {
            var item = playerInventory_1[_i];
            newMaxHealth = newMaxHealth + item.getHealthBonus();
            newCurrentHealth = newCurrentHealth + item.getHealthBonus();
            if (newCurrentHealth > newMaxHealth)
                newCurrentHealth = newMaxHealth;
            newAtk = newAtk + item.getAtkBonus();
        }
        playerMaxHealth = newMaxHealth;
        Textadventure.playerHealth = newCurrentHealth;
        playerAtk = newAtk;
    }
    function checkPlayerStatus() {
        if (Textadventure.playerHealth == 0)
            prompt("You died!");
    }
    Textadventure.checkPlayerStatus = checkPlayerStatus;
    ;
})(Textadventure || (Textadventure = {}));
