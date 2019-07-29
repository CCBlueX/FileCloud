function ExampleTab() {

    this.getLabel = function () {
        return "ExampleTab";
    }

    this.getTabIconItem = function () {
        return Java.type("net.minecraft.init.Items").apple;
    }

    this.displayAllReleventItems = function (items) {
        items.add(item.createItem("dirt"));
        items.add(item.createItem("skull 1 3 {display:{Name:\"Chimney\"},SkullOwner:{Id:\"2a0069a3-30a6-4aa6-b0ae-d31f1bd777f3\",Properties:{textures:[{Value:\"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjk5NTljYjk5YzY5ZjA3MzE2YWUxNGY4OWVlMjU0YTAwMzRkOTFkMThiMTZmMGM5NDBiOTNjZDUzMjUzNjQ1MSJ9fX0=\"}]}}}"))
    }
}