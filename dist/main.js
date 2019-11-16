"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var unit_converter_1 = require("./rendering/unit-converter");
function main() {
    unit_converter_1.UnitConverter.setUnitSize(window.innerWidth / config_1.Config.size.width);
}
main();
//# sourceMappingURL=main.js.map