import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Beer } from 'src/app/interface/beer';
import { TableData } from 'src/app/interface/tableData';
import { Wine } from 'src/app/interface/wine';
import { DrinksService } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css'],
})
export class CandidateFormComponent implements OnInit {
  preferredDrink: string = '';
  drinkType: string = '';
  beersData: Beer[] = [];
  winesData: Wine[] = [];
  myDataArray: TableData[] = [
    { fullName: 'Test', reason: 'Test2', drink: 'Test3', type: 'Test4' },
  ];
  dataSource = this.myDataArray;
  displayedColumns: string[] = ['fullName', 'reason', 'drink', 'type'];

  constructor(private drinksService: DrinksService) {}

  onGetBeers(): void {
    this.drinksService.getBeers().subscribe(
      (res) => (this.beersData = res),
      (err: any) => console.log(err)
    );
  }

  onGetWines(): void {
    this.drinksService.getWines().subscribe(
      (res) => (this.winesData = res),
      (err: any) => console.log(err)
    );
  }

  ngOnInit(): void {
    this.onGetBeers();
    this.onGetWines();
  }

  onSubmit(form: NgForm): void {
    console.log(this.beersData);
    console.log(this.preferredDrink);
    console.log(this.drinkType);
    console.log(form.value);
  }

  addData(newUser: TableData): void {
    const newUsersArray = this.myDataArray;
    newUsersArray.push(newUser);
    this.dataSource = [...newUsersArray];
    console.log(this.myDataArray);
  }
}
