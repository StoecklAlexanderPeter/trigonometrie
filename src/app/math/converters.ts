export function toDegrees(radians: number): number {
    return radians * 180 / Math.PI;
}

export function toRadians(degrees: number): number {
    return degrees * Math.PI / 180;
}

export function round(number: number) {
    return Math.round(number * 100) / 100;
}
