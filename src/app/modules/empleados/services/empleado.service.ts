import {Injectable} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {environment} from "../../../../environments/environment";
import {Empleado} from "../empleado";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private api: ApiService) {
  }

  async getByID(id: number): Promise<Empleado> {
    return await this.api.get(`${environment.apiBackend}/empleados.getById.php?id=${id}`);
  }

  async getAll(): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/empleados.getAll.php`);
  }

  async create(empleado: Empleado): Promise<any> {
    return await this.api.post(`${environment.apiBackend}/empleados.post.php`, empleado);
  }

  async update(empleado: Empleado): Promise<any> {
    return await this.api.put(`${environment.apiBackend}/empleados.put.php`, empleado);
  }

  async delete(id: number): Promise<any> {
    return await this.api.delete(`${environment.apiBackend}/empleados.delete.php?id=${id}`);
  }

}
