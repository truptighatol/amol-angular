export class Usercls {
    public name: string;
    public address: string;
    public city: string;
    public email_id: string;
    public dob: Date;
    public mobile_no:number;

    constructor(name: string,address: string,city: string,email_id: string,dob: Date,mobile_no:number)
    {
        this.name= name;
        this.address= address;
        this.city= city;
        this.email_id= email_id;
        this.dob= dob;
        this.mobile_no= mobile_no;
    }
}
