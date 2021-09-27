import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // private nuevoTexto= new Subject<string>()

  constructor(private http: HttpClient) { }


  getUsuarios(pagina: number): Observable<any> {
    const URL = "https://gorest.co.in/public/v1/users?page=" + pagina
    return this.http.get(URL)
  }

  getUsuario(id: any): Observable<any>{
    const URL = "https://gorest.co.in/public/v1/users/" + id
    return this.http.get(URL)
  }
  // modificarTexto(texto:string): void{
  //   this.nuevoTexto.next(texto)
  // }

  // getTexto(): Observable<string>{
  //   return this.nuevoTexto.asObservable()
  // }
}
