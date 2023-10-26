import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent {
  private _visible: boolean = true;
  @Input() tituloModal?: string;
  @Output() visibleChange = new EventEmitter<boolean>();

  private visibleChangeSubject = new Subject<boolean>();

  constructor() {}

  ngOnInit() {
    this.visibleChangeSubject.subscribe(value => {
      this.visibleChange.emit(value);
    });
  }

  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
    this.visibleChangeSubject.next(this._visible);
  }
}