namespace Textadventure {

    //Player Stats
    let playerCurrentRoomId: number = 1;
    let playerBaseHealth: number = 20;
    let playerMaxHealth: number = playerBaseHealth;
    export let playerHealth: number = playerMaxHealth;
    let playerBaseAtk: number = 4;
    let playerAtk: number = playerBaseAtk;
    let playerInventory: Item[];


    //Player Functions
    export function help(): void {
        console.log("help");
    }

    export function look(): void {
        console.log("you see");
    }

    export function take(pickedItemName: string): void {
        let itemRoom: Room = findRoomById(playerCurrentRoomId);
        let pickedItem: Item = itemRoom.getRoomItems().find(i => i.getName() === pickedItemName);
        itemRoom.removeItemFromRoom(pickedItem);
        playerInventory.push(pickedItem);

        updatePlayerStats();
    }

    export function inventory(): void {
        console.log("you have an inventory");
    }

    export function drop(droppedItemName: string): void {
        let droppedItem: Item = playerInventory.find(i => i.getName() === droppedItemName);
        playerInventory.splice(playerInventory.indexOf(droppedItem));
        findRoomById(droppedItem.getInRoomId()).addItemToRoom(droppedItem);

        updatePlayerStats();
    }

    export function attack(target: string): void {
        getCreatureByName(target).applyDmg(playerAtk);
        getCreatureByName(target).attackPlayer();
    }

    export function talk(target: string): void {
        console.log(getCreatureByName(target).getName() + ": \n" + getCreatureByName(target).getDialogue());
    }

    export function inspect(target: string): string {
        return "You look at the " + getCreatureByName(target).getName() + ". You realize, " + getCreatureByName(target).getDesc()
            + ". After inspecting it for a while you can see it's current Health (" + getCreatureByName(target).getCurrentHealth()
            + ") and it's Attack Value (" + getCreatureByName(target).getAtk() + ")";
    }

    export function quit(): void {
        //close tab;
    }

    //Player Help Functions
    function updatePlayerStats(): void {
        let newMaxHealth: number = playerBaseHealth;
        let newCurrentHealth: number = playerBaseHealth;
        let newAtk: number = playerBaseAtk;
        for (let item of playerInventory) {
            newMaxHealth = newMaxHealth + item.getHealthBonus();
            newCurrentHealth = newCurrentHealth + item.getHealthBonus();
            if (newCurrentHealth > newMaxHealth) newCurrentHealth = newMaxHealth;
            newAtk = newAtk + item.getAtkBonus();
        }
        playerMaxHealth = newMaxHealth;
        playerHealth = newCurrentHealth;
        playerAtk = newAtk;
    }

    export function checkPlayerStatus(): void {
        if (playerHealth == 0) prompt("You died!");
    };
}