import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('modalContent', { static: false })
  public modalContent: TemplateRef<ModalComponent>;

  @Input()
  public title: string;
  @Input()
  public editableContent: boolean;
  @Input()
  public primaryButtonLabel: string;
  @Input()
  public panelClass: string;

  public isOpened: boolean;
  public modal: MatDialogRef<ModalComponent, any>;

  constructor(
    private dialog: MatDialog,
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  public openModal(): void {
    if(this.isOpened){
      return;
    }
    this.isOpened = true;

    const modalConfigs = this.getModalConfigs();
    this.modal = this.dialog.open(this.modalContent, modalConfigs);
    this.changeDetector.detectChanges();
  }

  public closeModal() {
    this.isOpened = false;
    this.modal.close();
    this.changeDetector.detectChanges();
  }

  private getModalConfigs(): MatDialogConfig {
    return {
      maxWidth: 'auto',
      maxHeight: 'auto',
      minWidth: 'auto',
      minHeight: 'auto',
      width: 'auto',
      disableClose: true,
      panelClass: this.panelClass
    } as MatDialogConfig;
  }
}
