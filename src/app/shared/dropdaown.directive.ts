import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdaownDirective {
    @HostBinding('class.open') isOpen  = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    constructor() { }

}
