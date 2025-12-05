import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./appStyle.css']
})
export class App {
  protected readonly Logo = signal("Sanjay");
  protected readonly Name = signal("Sanjaykumar");
}
