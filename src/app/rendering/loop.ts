export class Timer {
    private isPlaying = false;

    private readonly deltaTime = 1 / 60;
    private accumulatedTime = 0;
    private lastTime = 0;

    // @ts-ignore
    private updateCallback: (deltaTime: number) => void;

    // This was heavily inspired by
    // https://www.youtube.com/watch?v=HlloFDayGgk&list=PLS8HfBXv9ZWWe8zXrViYbIM2Hhylx8DZx&index=3
    public doFrame(time: number) {
        this.accumulatedTime += (time - this.lastTime) / 1000;

        while (this.accumulatedTime > this.deltaTime) {
            if (this.updateCallback) {
                this.updateCallback(this.deltaTime);
            }
            this.accumulatedTime -= this.deltaTime;
        }

        if (this.isPlaying) {
            requestAnimationFrame(this.doFrame.bind(this));
        }
        this.lastTime = time;
    }

    public play() {
        this.isPlaying = true;
        this.doFrame(this.lastTime);
    }

    public pause() {
        this.isPlaying = false;
    }

    public set update(updateCallback: (deltaTime: number) => void) {
        this.updateCallback = updateCallback;
    }

    public get update(): (deltaTime: number) => void {
        return this.updateCallback;
    }
}
