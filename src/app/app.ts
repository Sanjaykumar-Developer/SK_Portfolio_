import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './Home.html',
  styleUrls: ['./HomeStyle.css']
})
export class App {
  protected readonly Logo = signal("Sanjay");
  protected readonly Name = signal("I'm Sanjaykumar");
}
