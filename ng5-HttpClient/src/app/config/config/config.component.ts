import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';
import { Config } from '../Config';



@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
   config : Config;
   test = "Config Test";
  constructor(private configService : ConfigService) { }

  ngOnInit() {
  }

  showConfig() {
  this.configService.getConfig()
    .subscribe(data => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
    });
}

}
