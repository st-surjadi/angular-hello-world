import { Observable } from "rxjs";
import { JsonphUser } from "../domain/jsonph-users.entity";


export abstract class JsonphUsersRepository {
    abstract getUsers(): Observable<JsonphUser>
}