function ExampleCommand() {

    this.getName = function () {
        return "exampleCommand";
    }

    this.getAliases = function () {
        return ["testCommand", "demoCommand"];
    }

    this.execute = function (args) {
        chat.print("§aHey! Successfully executed command!");
        chat.print("Axolotl");

        mc.thePlayer.jump();
    }
}