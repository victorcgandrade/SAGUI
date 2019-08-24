import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public usuarios;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
      data => {this.usuarios = data},
      err => console.error(err),
      () => console.log('usuarios carregados')
    );
  }

}
