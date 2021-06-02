import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() quote?: Quote;

  constructor() { }

  ngOnInit(): void {
  }
}
