# Angular 2+ Notes Course Udemy

## Section 2

### Property Binding

Definimos variables en ts y las llamamos en el template como

```
{{ variable }}
```
### Event Binding

Cuando pasa algún evento, hacer algo. Por ejemplo si se da click, mostrar una variable o llamar una función

```html
<button (eventName)="callFunction()">
```
You can bind all properties or Events of HTML Elements.

> The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties or YOUR_ELEMENT events should yield nice results.

## Two-Way-Databinding

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