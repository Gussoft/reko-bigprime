
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'BigPrimeAngularExample';


  ngOnInit() {
    this.loadScript('https://code.jquery.com/jquery-2.2.4.min.js','anonymous',null);
    this.loadScript('https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js','anonymous','sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo');
    this.loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js','anonymous','sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6');
    this.loadScript('http://localhost:9006/api/bigface?dni=46191069&externalId=215&uuid=8e90deb67f3c4e21b2cc6d30736f732a',null,null);

  }

  public loadScript(url: string,crossorigin: string | null, integrity: string | null) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    if(crossorigin){
      script.crossOrigin = crossorigin;
    }
    if(integrity){
      script.integrity=integrity;
    }
    body.appendChild(script);
  }
  
   startProcess2(){
    console.log("Welcome to the jungle!");
    
  }
 
}
