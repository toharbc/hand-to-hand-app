export class Users {
    constructor(
        public UserId?: number,
        public UserFirstName?: string,
        public UserLastName?: string,
        public UserPhone?: string,
        public UserPassword?: string,
        public UserMail?: string,
        public UserAdress?: string,
        public AreaId?:number) { }
}