export type EventHandlerType = 'BUTTON' | 'FLOATING_BUTTON';
export interface EventUserType {
  name: string;
}

export const eventHandlers: Map<
  EventHandlerType,
  (params: EventUserType) => void
> = new Map([
  ['BUTTON', (params) => alert(`hello ${params.name}, this is a button`)],
  [
    'FLOATING_BUTTON',
    (params) => alert(`hello ${params.name}, this is a floating button!`),
  ],
]);
