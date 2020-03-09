export class User
{
    u_id: string;

    constructor(u_id: string)
    {
        this.u_id = u_id;
    }
}

export class Shop
{
    s_id: number;
    opening: Date;
    closing: Date;
    name: string;
    district: string;
    city: string;
}