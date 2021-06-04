import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { Quote } from '../../models/quote';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [HttpService, HttpClient]
})
export class ContentComponent implements OnInit {

  quotes: Quote[] = [];

  constructor(private readonly httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData()
      .then((data: Quote[]) => this.quotes = data);
    //this.httpService.getData().subscribe((data: Quote[]) => this.quotes = data);
  }
}
