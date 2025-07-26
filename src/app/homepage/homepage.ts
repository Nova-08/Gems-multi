import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements AfterViewInit {

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.animate-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  }
}
