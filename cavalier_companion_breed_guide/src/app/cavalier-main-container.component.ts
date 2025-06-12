import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-cavalier-main-container',
  templateUrl: './cavalier-main-container.component.html',
  styleUrls: ['./cavalier-main-container.component.css'],
  standalone: true
})
export class CavalierMainContainerComponent {
  readonly breedHeaderImg = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80'; // Placeholder - Cavalier King Charles Spaniel

  readonly sections = [
    {
      key: 'overview',
      title: 'Breed Overview',
      icon: '🐶',
      image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png', // Cute dog face icon
      alt: 'Cavalier breed icon',
      content: `The Cavalier King Charles Spaniel traces its history to British royalty and is beloved for its elegant looks and gentle nature.
      These affectionate dogs are small but sturdy, and their sweet expressions make them a favorite companion. The breed was named after King Charles II of England, who adored them.`
    },
    {
      key: 'temperament',
      title: 'Temperament & Personality',
      icon: '💖',
      image: 'https://cdn-icons-png.flaticon.com/512/616/616408.png', // Heart dog icon
      alt: 'Temperament icon',
      content: `Cavaliers are known for their friendly, affectionate, and adaptable personalities. 
      They are eager to please, get along well with children and other pets, and thrive on companionship. Their gentle temperament makes them wonderful therapy and family dogs.`
    },
    {
      key: 'care',
      title: 'Care & Grooming',
      icon: '🛁',
      image: 'https://cdn-icons-png.flaticon.com/512/2917/2917998.png', // Paw in bathtub icon
      alt: 'Grooming icon',
      content: `Regular brushing keeps their silky coats free of tangles, and routine veterinary care ensures good health. Cavaliers enjoy daily walks and play. 
      Their floppy ears should be checked and cleaned regularly to prevent infection.`
    },
    {
      key: 'family',
      title: 'Suitability as Family Pet',
      icon: '🏡',
      image: 'https://cdn-icons-png.flaticon.com/512/3845/3845810.png', // House with dog icon
      alt: 'Family suitability icon',
      content: `Cavaliers are ideal family companions thanks to their adaptable and people-focused nature. 
      They fit well in city apartments or homes with yards, as long as they receive attention and exercise. Before adopting, consider their need for companionship—they do not do well if left alone for long periods.`
    },
  ];
}
