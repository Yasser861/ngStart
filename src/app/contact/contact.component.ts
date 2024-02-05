import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showLabel($event:any){
    let label:any=$event.target.previousElementSibling;
    let input=$event.target;
    if(input.value==''){
      label.classList.remove('top-0');
    }else{
      label.classList.add('top-0');
    }
  }
}
