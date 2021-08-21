import {Injectable} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private api: ApiService) {
  }

  async getByID(id: number): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/empleados.getById.php?id=${id}`);
  }

  async getAll(): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/empleados.getAll.php`);
  }

  async delete(id: number): Promise<any> {
    return await this.api.delete(`${environment.apiBackend}/empleados.delete.php?id=${id}`);
  }
}
