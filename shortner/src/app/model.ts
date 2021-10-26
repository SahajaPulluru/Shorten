export interface urlData{
    id?:number | undefined,
    longurl:string,
    shorturl:string,
    count:number
}

export interface chartData{
    name:string,
    value:number
}
export interface user{
    username:string,
    email:string,
    password:string
}
export interface userlogin{
    email:string,
    password:string
}