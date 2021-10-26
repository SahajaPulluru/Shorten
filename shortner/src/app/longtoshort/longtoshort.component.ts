import { Component, Input,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { urlData } from '../model';
import { UrlshortService } from '../urlshort.service';

@Component({
  selector: 'app-longtoshort',
  templateUrl: './longtoshort.component.html',
  styleUrls: ['./longtoshort.component.css']
})
export class LongtoshortComponent implements OnInit {

  @Input() longUrl:string="";
  shortUrl:string="";
  urldata ={
    "longurl":"",
    "shorturl":"",
    "count":0
  };
  constructor(private urlService:UrlshortService, private router:Router) { }

  ngOnInit(): void {
  }

  saveData(long:string,short:string){
    this.urldata={
      "longurl":long,
      "shorturl":short,
      "count":0
    };
    console.log(this.urldata);
    this.urlService.saveUrl(this.urldata).subscribe(()=>{
      alert("URL Saved");
    });
  }

  generate(){
    var characters=this.longUrl.slice(8);
    var charactersLength=characters.length;

    for(var i=0;i<5;i++)
    {
      this.shortUrl += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    this.saveData(this.longUrl,this.shortUrl)
  }

}
