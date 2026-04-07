import { Injectable, ViewContainerRef, ComponentRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentFactoryService {
  createComponent(component: any, viewContainerRef: ViewContainerRef): ComponentRef<any> {
    return viewContainerRef.createComponent(component);
  }
}