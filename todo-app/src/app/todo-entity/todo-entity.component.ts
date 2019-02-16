import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-todo-entity',
  templateUrl: './todo-entity.component.html',
  styleUrls: ['./todo-entity.component.css']
})
export class TodoEntityComponent implements OnInit {
  @ViewChild('inputTitle') inputTitle: ElementRef;
  @Output() add = new EventEmitter();

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  addHandler(title: string) {
    this.add.emit(title);

    // Clear input value
    this.renderer.setProperty(this.inputTitle.nativeElement, 'value', '');
  }
}
