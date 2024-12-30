import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  images: any[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => this.images = data);
  }

  viewImage(imageId: string): void {
    // Navegar a la vista de detalle de la imagen
  }

  editImage(imageId: string): void {
    // Navegar a la edición de la imagen
  }
}
