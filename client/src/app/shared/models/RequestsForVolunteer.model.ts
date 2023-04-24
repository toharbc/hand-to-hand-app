export class RequestsForVolunteer {
    constructor(

        public RequestForVolunteerId?: number,
        public HelpRequestId?: number,
        public VolunteerId?: number,
        public Status?: string,
        public Done?: 'bool',
        public Review?: number,
        public Comment?: string,


    ) {

    }
}