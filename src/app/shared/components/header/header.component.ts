import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private debouncer: Subject<string> = new Subject<string>()

  @Output() debaunceSearchTerm = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(1000)
      )
      .subscribe( value => {
        this.debaunceSearchTerm.emit(value)
      });

  }

  onKeyUp(searchTerm:string){
    this.debouncer.next(searchTerm);
  }

}
