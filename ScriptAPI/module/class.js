function ExampleModule() {

    this.getName = function () {
        return "ExampleModule";
    }

    this.getDescription = function () {
        return "This module has been created using LiquidBounce's scripting API.";
    }

    this.getCategory = function () {
        return "Misc"; // Combat, Exploit, Fun, Misc, Movement, Player, Render, World
    }

    this.onEnable = function () {
        chat.print("§c§lHey! I am now enabled.");
    }

    this.onDisable = function () {
        chat.print("§c§lBye! I am now disabled.");
    }

    this.onUpdate = function () {
        mc.thePlayer.swingItem();
    }
}