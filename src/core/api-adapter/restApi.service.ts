import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class RestApiService {
    constructor(
        private http: HttpClient
    ) {}

    get(url: string, params: any) {
        const header = new HttpHeaders({
            'Content-type': 'application/json'
        });
        return this.http.get<any>(url, {params}).pipe(
            tap((res: any) => res.data),
            catchError(this.handleError)
        );
    }

    handleError(error: HttpErrorResponse) {
        const errorMessage = error;
        return throwError(errorMessage);
    }
}