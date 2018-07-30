/// <reference path="../../../../../../../../node_modules/reflect-metadata/Reflect.d.ts" />.

import { IParameterlessConstructor } from '../../../../../../language-extensions/src/public_api';

export const CTOR_PROP_KEY_PREFIX = 'ConstructableProperty';

export function ConstructableProperty<T>(ctor: IParameterlessConstructor<T>) {
  return function (target: object, propertyKey: string) {
    Reflect.defineMetadata(CTOR_PROP_KEY_PREFIX, ctor, target, propertyKey);
  };
}
