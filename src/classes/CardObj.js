export class TimeFrame{
    constructor(type,current,prev){
        this.current = current;
        this.prev = prev;
        this.type = type;
    }
}

export class CardObj{
    constructor(title, image, timeframes, color){
        this.title = title;
        this.image = image;
        this.timeframes = timeframes;
        this.color = color;
    }
}