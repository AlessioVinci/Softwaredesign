namespace Textadventure {
    
    // Room 1 ~ Entrance
    let creaturesEntrance: Creature[] = [new Creature("BC001", "Dummy", "Wanna test your skills? I'm ready!", 1, true, Number.MAX_SAFE_INTEGER, 0)];
    let entrance: Room = new Room(1, "desc", creaturesEntrance, undefined, 0, 0, 1, 0, 0, 0);
    

    // Room 2 ~ Main Hall
    let creaturesMainHall: Creature[] = [new CreatureAdvanced("AC001", "Undead Wolf", "It's a wolf but undead, duh.", 2, true, 4, 2, "grrrrrrr...", [new Item("I001", "Magic Map", "Shows you an overview of this Dungeon.", 2, 0, 0)])];
    let mainHall: Room = new Room(2, "desc", creaturesMainHall, undefined, 0, 0, 1, 0, 0, 0);


    // Room 3 ~ Riddle Room
/*     let creaturesRiddleRoom: Creature[] = [new Creature()] */

    // Room 4 ~ Battle Room 1


    // Room 5 ~ Battle Room 2


    // Room 6-1 ~ Staircase Room - Main Floor


    // Room 6-2 ~ Staircase Room - Second Floor


    // Room 7 ~ Battle Room 3


    // Room 8 ~ Final Room
    let allRooms: Room[] = [entrance, mainHall];
    let allCreatures: Creature[] = creaturesEntrance.concat(creaturesMainHall);

}







