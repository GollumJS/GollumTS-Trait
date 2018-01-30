import {Trait} from "../src/Trait";

export class Animal {
	
	public eat(): void {
		console.log('This animal eatttt.');
	};
	
}

export class Human implements Animal {
	
	@Trait(Animal)
	public eat(): void {};
	
}

let human = new Human();

human.eat(); //  display: 'This animal eatttt.'