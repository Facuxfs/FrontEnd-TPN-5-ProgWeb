import { Component , OnInit} from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  ticket!:Ticket;
  espectadores!:Array<Espectador>;
  accion:string="";
  espectador= [{id:1, name : "nacional"},
  {id:2, name : "extranjero"}];

constructor(private activatedRoute: ActivatedRoute,private espectadorService:EspectadorService, private tickerService:TicketService, private router:Router){
  this.ticket = new Ticket();
  this.espectadores = new Array<Espectador>();
}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params['id']=="0"){
        this.accion = "new";
        this.cargarEspectadores();
      }else{
        this.accion="update";
        this.cargarTicket(params['id']);
        this.cargarEspectadores();
      }
    })
  }

  cargarTicket(id:string){
    this.tickerService.getTicket(id).subscribe(
      result=>{
        console.log(result)
        Object.assign(this.ticket,result);
        this.ticket.espectador = this.espectadores.find(item=>(item._id==this.ticket.espectador._id))!
      },
      error=>{
      }
    );
  }

  cargarEspectadores(){
    this.espectadorService.getEspectadores().subscribe(
      result=>{
        let unEspectador = new Espectador();
        result.forEach((element:any) => {
          Object.assign(unEspectador,element);
          this.espectadores.push(unEspectador);
          unEspectador = new Espectador();
        });
      },
      error=>{
      }
    );
  }

  guardarTicket(){
    this.tickerService.createTicket(this.ticket).subscribe(
      (result: any) => {
        if (result.status == 1){
          alert(result.msg);
          this.router.navigate(["ticket"])
        }
  },
      error => {
        alert(error.msg);
      }
    )
  }

  modificarTicket(id:string){
    this.tickerService.editTicket(this.ticket).subscribe(
      (result: any) => {
        if (result.status == 1){
          alert(result.msg);
          this.router.navigate(["ticket"])
        }
  },
      error => {
        alert(error.msg);
      }
    )
  }
}
