import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Scategories } from '../scategories';
import { ScategoriesService } from '../scategories.service';
import { FilePondComponent } from 'ngx-filepond';

@Component({
  selector: 'app-createscat',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myPond') myPond: FilePondComponent;
  
  display = "none";
  scategories: Scategories = new Scategories();
  
  constructor(private scategoriesService: ScategoriesService) {}

  ngOnInit(): void {
    // Initializations if needed
  }
 
  ajoutscategorie = () => {
    this.scategoriesService.create(this.scategories).subscribe((data) => {
      console.log(data);
      this.closeModal();
      window.location.reload();
    });
  }

  openModal() {
    this.display = "block";
  }

  closeModal() {
    this.display = "none";
  }

  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    server: {
      process: (fieldName: any, file: any, metadata: any, load: any, error: any, progress: any, abort: any) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'Ecommerce_cloudinary');
        data.append('cloud_name', 'dazfiaqow');
        data.append('public_id', file.name);

        this.scategoriesService.uploadSignature(data).subscribe({
          next: (res: { url: any; }) => {
            this.scategories.imagescategorie = res.url;
            load(res);
          },
          error: (e: any) => {
            console.log(e);
            error(e);
            return () => {};
          },
          complete: () => {
            console.log('done');
            return () => {
              abort();
            };
          }
        });
      },
      revert: (uniqueFileId: any, load: any, error: any) => {
        error('Error');
        load();
      }
    }
  }
}
