import { Component, OnInit } from '@angular/core';
import { DATAS } from '../res/array'; 

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.page.html',
  styleUrls: ['./change-name.page.scss'],
})
export class ChangeNamePage implements OnInit {
  ngOnInit() {
  }

  people!: any[];
  currentIndex = 0;
  personName!: string;

  constructor() {
    this.fetchData();
  }

  fetchData() {
    this.people = DATAS;
    this.displayPerson();
  }

  displayPerson() {
    if (this.people) {
      this.personName = this.people[this.currentIndex].nama;
    }
  }

  changePerson() {
    if (this.people) {
      this.currentIndex = (this.currentIndex + 1) % this.people.length;
      this.displayPerson();
    }
  }

}
