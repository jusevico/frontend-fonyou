import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../../shared/services/toast.service";
import {Empleado} from "../empleado";
import {EmpleadoService} from "../services/empleado.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Helpers} from "../../../shared/helpers/helpers";

@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styleUrls: ['./empleados-form.component.scss']
})
export class EmpleadosFormComponent implements OnInit {

  id: number;
  empleadoForm: FormGroup;
  loading: boolean = false;
  helpers = new Helpers();

  constructor(private formBuilder: FormBuilder,
              private toastService: ToastService,
              private empleadoService: EmpleadoService,
              private activeRoute: ActivatedRoute,
              private route: Router) {

    this.activeRoute.params.subscribe(params => {
      if (params.id !== undefined && params.id !== null) {
        this.id = params.id;
        this.load();
      }
    });

  }

  ngOnInit(): void {
    this.empleadoForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],
      pay: [null, [Validators.required]],
    });
  }

  async load(): Promise<void> {
    const empleado = await this.empleadoService.getByID(this.id);
    this.empleadoForm.patchValue({
      ...empleado,
      birthDate: new Date(empleado.birthDate)
    });
  }

  getParams(): Empleado {
    const birthDate = this.helpers.formatDate(this.empleadoForm.get('birthDate').value);
    return {
      ...this.empleadoForm.value,
      id: this.id,
      birthDate,
    };
  }

  async submit(): Promise<void> {

    if (!this.empleadoForm.valid) {
      this.toastService.warning('Hay errores en el formulario');
      return;
    }

    const empleado = this.getParams();
    let response;
    this.loading = true;
    if (!this.id) {
      response = await this.empleadoService.create(empleado);
    } else {
      response = await this.empleadoService.update(empleado);
    }
    this.loading = false;
    if (response.success) {
      this.toastService.success(response.message);
      this.route.navigate(['/']);
    }

  }

}
