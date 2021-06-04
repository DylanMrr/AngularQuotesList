import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Quote} from '../../models/quote';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() quotes?: Quote[];
  searchValue = "";
  dataSource: MatTableDataSource<Quote>;

  constructor() {
    this.dataSource = new MatTableDataSource<Quote>(this.quotes);
  }

  ngOnInit(): void {
    
  }

  onSearchValueChange(event: Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
