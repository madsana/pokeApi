import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  pokemonTypes:[] = [];
  pokemonStats:[] = [];

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    console.log(data);
    this.pokemonTypes = data.types;
    this.pokemonStats = data.stats;
    console.log(this.pokemonTypes);
  }

  ngOnInit(): void {
  }

}
