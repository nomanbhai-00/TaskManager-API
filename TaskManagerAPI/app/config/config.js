import * as path from "node:path"
export const MONGODB_CONNECTION = "mongodb://localhost:27017/TaskManager";
export const JWT_SECRET = "abcXYZ123";
export const JWT_EXPIRATION_TIME = 60*60*24*30;
export const URI =""
export const OPTION ={ user :'', pass :'' }


///

export const EMAIL_HOST="smtp.gmail.com"
export const EMAIL_PORT=587
export const EMAIL_SECURITY=false
export const EMAIL_USER="mohdrifat042@gmail.com"
export const EMAIL_PASS="suzq hjag opck sujw"
export const EMAIL_UN_AUTH=false

///


export const MAX_JSON_SIZE ="50mb";
export const URL_ENCODE = true
export const REQUEST_LIMIT_TIME = 15 * 60 *1000 ;
export const REQUEST_LIMIT_NUMBER = 3000;
export const WEB_CACHE = true;
export const PORT = 5050

export function UPLOAD_FOLDER(filename){
    return path.resolve(process.cwd(),'storage',filename);
}
