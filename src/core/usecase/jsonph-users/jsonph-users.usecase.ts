import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "src/core/base/usecase";
import { JsonphUser } from "src/core/domain/jsonph-users.entity";
import { JsonphUsersRepository } from "src/core/repository/jsonph-users.repository";

@Injectable({
    providedIn: 'root'
})
export class jsonphUsersUseCase implements UseCase<null, JsonphUser> {

    constructor(private repository: JsonphUsersRepository) {}

    execute(): Observable<JsonphUser> {
        return this.repository.getUsers();
    }
}