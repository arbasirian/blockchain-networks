export type IStyles = {
  bar: string;
  container: string;
  nprogress: string;
  peg: string;
};

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
