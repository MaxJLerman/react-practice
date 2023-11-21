export type Styles = {
  'container': string;
  'input': string;
  'label': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
