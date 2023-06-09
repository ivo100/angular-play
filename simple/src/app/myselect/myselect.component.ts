import {Component, Input, OnInit} from '@angular/core';
//import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-myselect',
  templateUrl: './myselect.component.html',
  styleUrls: ['./myselect.component.css']
})
export class MyselectComponent implements OnInit {

  //@ViewChild('input') myinput: MatInput;
  //@ViewChild(MatInput) myinput;

  constructor() {
  }

  // https://npm.io/package/@enonic/fnv-plus

  ngOnInit(): void {
    console.log('=== ngOnInit');
    console.log('hashFnv32a(foo)', hashFnv32a('foo'));
    console.log('hashFnv32a(46b471d8-f4ed-4726-8f26-c69dfdbdee25)', hashFnv32a('46b471d8-f4ed-4726-8f26-c69dfdbdee25'));
    console.log('hashFnv32a(46b471d8-f4ee-4726-8f26-c69dfdbdee25)', hashFnv32a('46b471d8-f4ee-4726-8f26-c69dfdbdee25'));


  }

  title = 'simple';
  private _selected = '';
  private _disabled = 'true';

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
    //this.myinput.focus();
  }

}

function hashFnv32a(str: string, seed?: number): string {
  let hval = seed === undefined ? 0x811c9dc5 : seed;

  for (let i = 0, l = str.length; i < l; i++) {
    hval ^= str.charCodeAt(i);
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }

  return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
}
