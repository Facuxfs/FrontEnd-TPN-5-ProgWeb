import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  
  espectadores!:Array<Espectador>;
  tickets!:Array<Ticket>;
  espectador= [{id:1, name : "nacional"},
  {id:2, name : "extranjero"}];
  categoria:string="";
  espectadorVar:string="";

  constructor(private ticketService:TicketService, private router:Router ,private espectadorService:EspectadorService){
    this.tickets = new Array<Ticket>;
    this.espectadores = new Array<Espectador>();
    this.obtenerTickets();
    this.cargarEspectadores();
  }
  
  
  obtenerTickets(){
  this.ticketService.getTickets().subscribe(
    result =>{
      console.log(result)
      let unTicket:Ticket = new Ticket();
        result.forEach((element:any) => {
        Object.assign(unTicket,element)
        this.tickets.push(unTicket)
        unTicket = new Ticket();
      });
    
    } ,
    error=>{
    }
  )
  }
  //obtener tickets por categoria
  obtenerTicketsCategoria(categoria:string){
    this.ticketService.getTicketsCategoria(categoria).subscribe(
      result =>{
        console.log(result)
        this.tickets = new Array<Ticket>;
        let unTicket:Ticket = new Ticket();
          result.forEach((element:any) => {
          Object.assign(unTicket,element)
          this.tickets.push(unTicket)
          unTicket = new Ticket();
        });
      
      } ,
      error=>{
      }
    )
    }
//obtener tickets por espectador
    obtenerTicketsEspectador(id:string){
      this.ticketService.getTicketsEspectador(id).subscribe(
        result =>{
          console.log(result)
          this.tickets = new Array<Ticket>;
          let unTicket:Ticket = new Ticket();
            result.forEach((element:any) => {
            Object.assign(unTicket,element)
            this.tickets.push(unTicket)
            unTicket = new Ticket();
          });
        
        } ,
        error=>{
        }
      )
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

  eliminarTicket(ticket:Ticket){
    this.ticketService.deleteTicket(ticket).subscribe(
      (result: any) => {
        if (result.status == 1){
          alert(result.msg);
          window.location.reload()
        }
  },
      error => {
        alert(error.msg);
      }
    )
  }

  agregarTicket(){
    this.router.navigate(["ticket-form",0])
  }

  modificarTicket(ticket:Ticket){
    this.router.navigate(["ticket-form",ticket._id])
  }
  
  
  ngOnInit(): void {
    
  }
}
