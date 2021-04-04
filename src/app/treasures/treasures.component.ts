import { Component, OnInit } from '@angular/core';
import {treasure} from '../mock-treasures';

@Component({
  selector: 'app-treasures',
  templateUrl: './treasures.component.html',
  styleUrls: ['./treasures.component.css']
})
export class TreasuresComponent implements OnInit {
  Treasure = treasure;

  constructor() { }
  
  ngOnInit(): void {
  }
};