# GollumTS-Trait

Simple trait decorator for TS class.


## Install
```
npm install gollumts-trait
```



## Use trait

```typescript
import {Trait} from "gollumts-annoation";

export class Animal {
	
	public eat(): void {
		console.log('This animal eatttt.');
	};
	
}


export class Human implements Animal {
	
	@Trait(Animal) 
	public eat(): void {};
	
}

```

## Result


```typescript

let human = new Human();

human.eat() //  display: 'This animal eatttt.'

```