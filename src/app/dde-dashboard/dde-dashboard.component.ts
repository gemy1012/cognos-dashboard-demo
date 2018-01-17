import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { CodeSnippet, CSVSourceCS, DB2SourceCS } from '../../model/code-snippet'

@Component({
  selector: 'dde-dashboard',
  templateUrl: './dde-dashboard.component.html',
  styleUrls: ['./dde-dashboard.component.css'],
})
export class DdeDashboardComponent implements OnInit {
  @Output() codeToRun = new EventEmitter<CodeSnippet>();

  constructor() {
  }

  ngOnInit() {
  }

  getAddSourceCode() {
    this.codeToRun.emit(CSVSourceCS);
  }

}
