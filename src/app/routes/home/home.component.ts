import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailsComponent } from 'src/app/dialogs/details/details.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { UserInfoComponent } from 'src/app/dialogs/user-info/user-info.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  userInfo: any = [];
  pokemonData: any = [];
  filteredArray: any = [];
  term: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(
    this.pokemonData
  );

  constructor(
    private dialog: MatDialog,
    private _pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  ngAfterViewInit() {
    
  }

  getPokemons() {
    this.pokemonData = [];
    for (let i = 1; i <= 151; i++) {
      this._pokemonService.getPokemons(i).subscribe(
        (resp) => {
          this.pokemonData.push(resp);
        },
        (err) => {
          console.log(err);
        }
      );
    }
    this.dataSource = new MatTableDataSource<any>(this.pokemonData);
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }

  openModal(item) {
    console.log(item);

    const DIALOG_REF = this.dialog.open(DetailsComponent, {
      width: '820px',
      height: '365px',
      autoFocus: false,
      disableClose: false,
      data: item,
    });
  }

  openUserInfo(){

   let user = {
     userName : 'Manuel Antonio De los Santos Acosta',
     email : 'delossantosama@gmail.com',
     cellphone : '9375935920'
   }

   this.userInfo = user;

   console.log(this.userInfo);

    const DIALOG_REF = this.dialog.open(UserInfoComponent, {
      width: '820px',
      height: '325px',
      autoFocus: false,
      disableClose: false,
      data: this.userInfo,
    });
  }
}
