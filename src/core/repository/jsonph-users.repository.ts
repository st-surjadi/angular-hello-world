import { Observable } from "rxjs";
import { JsonphUser } from "../domain/jsonph-users.entity";


export abstract class jsonphUsersRepository {
    abstract getUsers(): Observable<JsonphUser>
}