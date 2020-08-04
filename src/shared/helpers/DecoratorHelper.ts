export class DecoratorHelper {
  static composeDecorators(...decorators: MethodDecorator[]): any {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
    ): any {
      decorators.forEach((decorator) => decorator(target, propertyKey, descriptor));
    };
  }
}
