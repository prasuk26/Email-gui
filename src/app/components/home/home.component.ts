import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private snack:MatSnackBar) { }
  ngOnInit() : void {
  }
    btnClick()
    {
      this.snack.open("hey", "cancel");
    }
  }




