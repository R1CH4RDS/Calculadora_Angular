import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oladudu';
  resultado: string = '';
  display: string = '';


  public calcular() {
    this.display = this.display;
    if (this.display) {
      this.display = eval(this.display);
    } else {
      this.display = "Nada..."
    }
  }

  public clear(){
    this.display='';
  }

  public back() {
    this.display = this.display.substring(0, this.display.length - 1);
  }

  public insert(n: number) {
    this.display = this.display + n;
  }

  public especial(n: string) {
    this.display = this.display + n;
  }

}
