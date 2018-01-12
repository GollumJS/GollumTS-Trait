export function Trait (trait: any) {
	return function (target: any, propertyKey: string = null, descriptor: PropertyDescriptor = null) {
		
		if (!target.hasOwnProperty('__traits__')) {
			target.__traits__ = [];
		}
		if (propertyKey) {
			if (!trait.prototype.hasOwnProperty(propertyKey)) {
				throw new Error('The ' + propertyKey + ' not exist in trait.');
			}
			let nDescriptor = Object.getOwnPropertyDescriptor(trait.prototype, propertyKey);
			
			if (descriptor.get && nDescriptor.get) {
				descriptor.get = nDescriptor.get;
			}
			if (descriptor.set && nDescriptor.set) {
				descriptor.set = nDescriptor.set;
			}
			if (descriptor.value && nDescriptor.value) {
				descriptor.value = nDescriptor.value;
			}
			
			Object.defineProperty(target, propertyKey, descriptor);
			
			if (target.__traits__.indexOf(trait) == -1) {
				target.__traits__.push(trait);
			}
			target.__traits__.push('cool: '+propertyKey);
		} else {
			throw new Error('Trait annotation only on property');
		}
	};
}