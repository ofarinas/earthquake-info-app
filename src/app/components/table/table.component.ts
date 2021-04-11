import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {EarthquakeItem} from '../../models/earthquake-item';
import {GREEN, ORANGE, RED} from '../../models/color';


@Component({
  selector: 'app-table',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns = ['title', 'type', 'status', 'time', 'tsunami', 'place', 'detail', 'mag'];
  @Input() tableElement;
  dataSource: MatTableDataSource<EarthquakeItem>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableElement);
  }

  getColor(mag: number): string {
    if (mag > 3) {
      return RED;
    }
    if (mag > 2) {
      return ORANGE;
    }
    return GREEN;
  }
}

