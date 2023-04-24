export class Rating {
    UserId: number;
    ratingAvg: number;
    ratingCount: number;
    constructor(
        UserId: number = -1, 
        ratingAvg: number = 0, 
        ratingCount: number = 0) {
            this.UserId = UserId;
            this.ratingAvg = ratingAvg;
            this.ratingCount = ratingCount;
        }
}