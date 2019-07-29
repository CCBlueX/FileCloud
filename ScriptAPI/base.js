var scriptName = "{projectName}";
var scriptAuthor = "{projectAuthor}";
var scriptVersion = {projectVersion};

{moduleClass}{commandClass}{tabClass}

{moduleInstantiation}{commandInstantiation}{tabInstantiation}

function onLoad() {
    {tabRegistration}
}

function onEnable() {
    {moduleRegistration}{commandRegistration}
}

function onDisable() {
    {moduleUnregistration}{commandUnregistration}
}