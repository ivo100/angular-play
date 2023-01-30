import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-myselect',
  templateUrl: './myselect.component.html',
  styleUrls: ['./myselect.component.css']
})


export class MyselectComponent implements OnInit {

  //@ViewChild('input') myinput: MatInput;
  //@ViewChild(MatInput) myinput;
  private input: any;

  constructor() { }

  ngOnInit(): void {
  }

  title = 'simple';
  field = '';
  private _selected = '';
  private _disabled = 'true';

  @ViewChild('myInput') myInput: MatInput | undefined;

  //myInput: MatInput

  @Input()
  get disabled (): string {
    return this._disabled;
  }
  set disabled (val: string) {
    console.log("set disabled", val);
    this._disabled = val;
  }

  @Input()
  get selected (): string {
    return this._selected;
  }
  set selected (val: string) {
    console.log("set selected", val);
    this._disabled = val ? "false" : "true";
    this._selected = val;
    this.field = "";
  }

  updateField(evt: any) {
    //console.log("changed", evt);
    this.field = evt;
    //console.log("field", this.field);
    // @ts-ignore
    //this.myInput.focus();
  }
}
