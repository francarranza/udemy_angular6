# udemy_angular6
https://www.udemy.com/the-complete-guide-to-angular-2/


# Angular 2+ Notes Course Udemy

## Section 2

## Databinding

### Property Binding

Definimos variables en ts y las llamamos en el template como

```
{{ variable }}
```

```html
<button [disabled]="booleanFuction()">
```

### Event Binding

Cuando pasa algún evento, hacer algo. Por ejemplo si se da click, mostrar una variable o llamar una función

```html
<button (eventName)="callFunction()">
```
You can bind all properties or Events of HTML Elements.

> The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties or YOUR_ELEMENT events should yield nice results.

### Two-Way-Databinding

>Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel directive. This is done by adding the FormsModule to the imports[] array in the AppModule.

>You then also need to add the import from @angular/forms in the app.module.ts file:

```typescript
import { FormsModule } from '@angular/forms';
```

#### Angular

`serverName` is a variable defined in typescript
```typescript
export class ServersComponent implements OnInit{
    serverName = 'Initial Value'
    ...
}
```
#### Template HTML

Using the ngModel directive:

```html
<input [(ngModel)]="serverName">
```

## Directives

Directives are Instructions in the DOM.

We can define a custom directive as follows:

```html
<p appTurnGreen> Receives a green background! </p
```

```typescript
@Directive({
    selector: '[appTurnGreen]'
})
export class TurnGreenDirective{
    ...
}
```

Directives examples:

* *ngIf: Structural directives

```html
<p *ngIf="variableName"> Server was created! </p>
```

* ngStyle: Dinamically changes styles of the template

```html
<p [ngStyle]="{background-color: getColor()}">
```

* ngClass: Like ngStyle but works with css classes

```html
<p [ngClass]="{className: serverStatus === 'online'}">
```

* ngFor
```html
<server-app *ngFor="let server of servers"></app-server>
```

### Debugging

* Chrome Console
* Augury
  


## Section 5

### Property & Event Binding

These two can be used in:

* HTML Elements: Native Properties & Events
* Directives: Custom Properties & Events
* Components: Custom Properties & Events

We can bind a property between two components as follows:

With the decorator @Input(), we are making that variable public to others
components.

``` ts
@Input('srvElement') element: {type: string, name: string, content: string};
```

``` html
<div class="row">
    <div class="col-xs-12">
    <app-server-element 
    *ngFor="let serverElement of serverElements"
    [srvElement]="serverElement" ></app-server-element>
    </div>
</div>

```

### Custom Events
parent-child, child-parent communication with EvenEmitter and @Output.


Further reading: [@Input](https://toddmotto.com/passing-data-angular-2-components-input), 
[@Output](https://toddmotto.com/component-events-event-emitter-output-angular-2)

#### Binding to custom Events

> cuak

#### Alias to custom Events

Angular
```ts
@Output('aliasName') variable = ...
```

Template
```html
<app-cockpit (aliasName)="onBlueprintAdded($event)">
</app-cockpit>
```