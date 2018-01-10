export function sealed(name: string)
{
    return function(target: Function): void{
        console.log(`Sealing the constructor ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target:TFunction): TFunction
{
    const newCtor: Function = function(){
        console.log(target);
    }
        newCtor.prototype= Object.create(target.prototype);
        newCtor.prototype.constructor = target;
        return<TFunction> newCtor;
    
}
export function writable(isWritable: boolean)
{
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor);

//descriptor.writable();
}