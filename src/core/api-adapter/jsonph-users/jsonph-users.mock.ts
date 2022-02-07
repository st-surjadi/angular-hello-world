import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JsonphUser } from "src/core/domain/jsonph-users.entity";
import { JsonphUsersRepository } from "src/core/repository/jsonph-users.repository";
import { RestApiService } from "../restApi.service";


@Injectable({
    providedIn: 'root'
})
export class JsonphUsersAdapter implements JsonphUsersRepository {
    constructor(private apiService: RestApiService) {}

    getUsers(): Observable<JsonphUser> {
        return this.apiService.get(`https://jsonplaceholder.typicode.com/users`, null);
    }
}