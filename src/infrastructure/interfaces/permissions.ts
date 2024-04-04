// * I usually use types when I want to define a list of values that a variable can have.
// * I use interfaces when I want to define a shape of an object.

export type PermissionsStatus =
  | 'granted'
  | 'denied'
  | 'blocked'
  | 'limited'
  | 'unavailable'
  | 'undetermined';
