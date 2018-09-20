import { Component, OnInit } from '@angular/core';
import { Welcome } from '../../Models/welcome.models';
import { WelcomeService } from "../../services/welcome.service";
import {SimpleService} from "../../services/simple.service";
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers:[WelcomeService]
})
export class WelcomeComponent implements OnInit {

  id: number;
  code: string;
  name: string;
  isempty:boolean;

  welcomex:Welcome[]

  public Listx: Array<Welcome> = []

  constructor(
    public welcomeService: WelcomeService,
    public simpleService :SimpleService,
    private toastr: ToastrService
  ) {}

  //   let wel: Welcome = new Welcome();
  //   wel.Id = 1
  //   wel.Code = "00982"
  //   wel.Name = "Asanga"

  //   this.Listx.push(wel);

  //   let wel1: Welcome = new Welcome();
  //   wel1.Id = 2
  //   wel1.Code = "00927"
  //   wel1.Name = "Asanga Chan"

  //   this.Listx.push(wel1);

  //   console.log(this.Listx);
  // }

  showSuccess() {
    
    this.toastr.info('Welcome!', 'CRUD Function!');
  }

  dele(x) {
    console.log(x.Id);
    if (confirm('Are you sure to delete this record ?') == true) {
    this.simpleService.deleteWelcome(x.Id).subscribe(x => {
      this.simpleService.getWelcomeList().subscribe(welcomes=>{this.welcomex=welcomes;
        
      });
      this.id=undefined;
      this.code ='';
      this.name = '';
      this.toastr.success('Record Deleted Succcessfully');
    })
  }
}

  more(x) {
    this.id = x.Id;
    this.code = x.Code;
    this.name = x.Name;
  }

  ngOnInit() {
 
     // this.getAll();
     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(ok));
     this.showSuccess();
     this.id=undefined;
     this.code ='';
     this.name = '';
      this.simpleService.getWelcomeList().subscribe(welcomes=>{this.welcomex=welcomes;
      });
      
    
 
    
  }

  isEmpty(){

    if(this.code!='' && this.name !=''){
      return false;
    }else{
      return true;
    }

  }

  getAll(){
    this.welcomeService.getAllWelcomes().subscribe(welcomes=>{this.welcomex=welcomes;
    });
    console.log(this.welcomeService.getAllWelcomes().subscribe());
  }

  Refresh(){
    window.location.reload()
  }
  onSubmit(){
    const wel = {
      Id: this.id,
      Name:this.name,
      Code:this.code

    };
    console.log(this.id);
    if (this.id==null){

      this.simpleService.postWelcome(wel)
      .subscribe(data => {
        
        this.simpleService.getWelcomeList().subscribe(welcomes=>{this.welcomex=welcomes;});
        this.toastr.success('New Record Added Succcessfully');
        this.id=undefined;
        this.code ='';
        this.name = '';
        
      })

    }else {
      console.log(wel);
      this.simpleService.putWelcome(this.id,wel)
      .subscribe(x=>{
        this.simpleService.getWelcomeList().subscribe(welcomes=>{this.welcomex=welcomes;});
        this.toastr.success('Record updated Succcessfully');
      })
      this.id=undefined;
      this.code ='';
      this.name = '';
      
    }
    
 

  }

}

