import { Config } from "./config";
import { UnitConverter } from "./rendering/unit-converter";

function main() {
    UnitConverter.setUnitSize(window.innerWidth / Config.size.width);
}
main();
