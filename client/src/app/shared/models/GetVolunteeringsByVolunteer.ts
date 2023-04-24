import { Time } from "@angular/common";

export class GetVolunteeringsByVolunteer {
    constructor(
        volunteeringId: number,
        ReqId: number,
        ReqFirstName: string,
        ReqLastName: string,
        TypeOfVolunteeringName: string,
        RangeOfDate: string,
        days: string,
        startHour: Time,
        endHour: Time,
        startDate: Date,
        endDate: Date,
        Status: number,
        Rating: number,
        Comment: string,
        CommentDate: Date
    ) { }
}