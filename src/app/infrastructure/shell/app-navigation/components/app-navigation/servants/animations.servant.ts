import { trigger, style, transition, state, animate, keyframes, AnimationTriggerMetadata } from '@angular/animations';

export class AnimationServant {
  public static getAnimations(): any[] {
    return [
      AnimationServant.getArrowAnimations()
    ];
  }

  private static getArrowAnimations(): AnimationTriggerMetadata {
    return trigger('sidebarArrowAnimation',
      [
        state('1', style(
          {
            transform: 'rotate(0deg)'
          })),
        state('0', style(
          {
            transform: 'rotate(180deg)'
          })),
        transition('* => *', animate('400ms ease-out'))
      ]);
  }
}
