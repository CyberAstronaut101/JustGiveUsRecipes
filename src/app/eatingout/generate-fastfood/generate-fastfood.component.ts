import { Component, OnInit } from '@angular/core';
import { FastfoodsearchService } from '../fastfoodsearch.service';

@Component({
  selector: 'app-generate-fastfood',
  templateUrl: './generate-fastfood.component.html',
  styleUrls: ['./generate-fastfood.component.css']
})
export class GenerateFastfoodComponent implements OnInit {

  constructor(private yelpService: FastfoodsearchService) { }

  ngOnInit(): void {

  }

}
