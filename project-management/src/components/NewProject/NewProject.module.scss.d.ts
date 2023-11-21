export type Styles = {
  'cancelButton': string;
  'container': string;
  'menu': string;
  'saveButton': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
