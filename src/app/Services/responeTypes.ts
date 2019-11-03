export class Token
{
    public access_token: string;
    public expires_in: number;
    public token_type: string;
    public jti: string;
    public scope: string;
}

export class User
{
    public username: string;
    public password: string;
}

