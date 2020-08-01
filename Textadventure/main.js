var Textadventure;
(function (Textadventure) {
    // Room 1 ~ Entrance
    var creaturesEntrance = [new Textadventure.Creature("BC001", "Dummy", "Wanna test your skills? I'm ready!", 1, true, Number.MAX_SAFE_INTEGER, 0)];
    var entrance = new Textadventure.Room(1, "desc", creaturesEntrance, undefined, 0, 0, 1, 0, 0, 0);
    // Room 2 ~ Main Hall
    var creaturesMainHall = [new Textadventure.CreatureAdvanced("AC001", "Undead Wolf", "It's a wolf but undead, duh.", 2, true, 4, 2, "grrrrrrr...", [new Textadventure.Item("I001", "Magic Map", "Shows you an overview of this Dungeon.", 2, 0, 0)])];
    var mainHall = new Textadventure.Room(2, "desc", creaturesMainHall, undefined, 0, 0, 1, 0, 0, 0);
    // Room 3 ~ Riddle Room
    /*     let creaturesRiddleRoom: Creature[] = [new Creature()] */
    // Room 4 ~ Battle Room 1
    // Room 5 ~ Battle Room 2
    // Room 6-1 ~ Staircase Room - Main Floor
    // Room 6-2 ~ Staircase Room - Second Floor
    // Room 7 ~ Battle Room 3
    // Room 8 ~ Final Room
    var allRooms = [entrance, mainHall];
    var allCreatures = creaturesEntrance.concat(creaturesMainHall);
})(Textadventure || (Textadventure = {}));