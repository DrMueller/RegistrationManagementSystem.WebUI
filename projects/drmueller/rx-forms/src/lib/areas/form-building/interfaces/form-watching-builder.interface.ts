import { IRxFormBuilder } from '.';

export interface IFormWatchingBuilder {
  withDebounceTime(debounceMilliseconds: number): IFormWatchingBuilder;
  buildFormWatcher(): IRxFormBuilder;
}
