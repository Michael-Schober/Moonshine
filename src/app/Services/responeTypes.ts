export class Token
{
    public access_token: string;
    public expires_in: number;
    public token_type: string;
    public id: string;
    public jti: string;
    public scope: string;
}

export class User
{
    public username: string;
    public password: string;
}

export class Game
{
    public id: number;
    public executive: User;
    public name: String;
}

export class jwtDecoded
{
    public id: number;
    public scope: Array<string>;
    public user_name: string;
}

