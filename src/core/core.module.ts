import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule, Provider } from "@angular/core";
import { JsonphUsersAdapter } from "./api-adapter/jsonph-users/jsonph-users.mock";
import { RestApiService } from "./api-adapter/restApi.service";
import { JsonphUsersRepository } from "./repository/jsonph-users.repository";


const DATA_SERVICE: Provider[] = [
    RestApiService,
    { provide: JsonphUsersRepository, useClass: JsonphUsersAdapter }
];

@NgModule({
    declarations: [],
    imports: [CommonModule]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                ...DATA_SERVICE
            ]
        }
    }
}