import {Component, OnInit} from '@angular/core';
import {Empleado} from "../empleado";
import {EmpleadoService} from "../services/empleado.service";
import {MatDialog} from "@angular/material/dialog";
import {
  ConfirmDialogComponent,
  ConfirmDialogModel
} from "../../../shared/components/confirm-dialog/confirm-dialog.component";
import {ToastService} from "../../../shared/services/toast.service";

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.scss']
})
export class EmpleadosListComponent implements OnInit {

  loading = false;
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService,
              private dialogConfirm: MatDialog,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(): Promise<void> {
    this.loading = true;
    this.empleados = await this.empleadoService.getAll();
    this.loading = false;
  }

  async eliminar(empleado: Empleado): Promise<void> {

    const dialogData = new ConfirmDialogModel(
      'Eliminar Empleado',
      `¿Está seguro(a) de eliminar el empleado: <b>${empleado.name} ${empleado.lastName}</b>?`
    );
    const dialogRef = this.dialogConfirm.open(ConfirmDialogComponent, {
      maxWidth: '600px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        const response = await this.empleadoService.delete(empleado.id);
        if (response.success) {
          this.toastService.success('Empleado eliminado con éxito!');
          this.getAll();
        }
      }
    });

  }

}
