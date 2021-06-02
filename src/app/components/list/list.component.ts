import { Component, OnInit, Input } from '@angular/core';
import { Quote} from '../../models/quote';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() quotes?: Quote[];
  searchValue = "";

  constructor() { }

  ngOnInit(): void {
  }

}
