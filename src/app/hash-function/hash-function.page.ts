import jsSHA from 'jssha';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hash-function',
  templateUrl: './hash-function.page.html',
  styleUrls: ['./hash-function.page.scss'],
})
export class HashFunctionPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  generateHash() {
    const shaObj = new jsSHA('SHA-256', 'TEXT', { encoding: 'UTF8' });
    /* .update() can be chained */
    shaObj.update('01112018').update('ken').update('pria').update('ifabula');
    const hash = shaObj.getHash('BYTES');

    console.log(hash);
  }
}
