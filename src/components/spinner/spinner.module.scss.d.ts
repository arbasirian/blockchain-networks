export type IStyles = {
  spin: string;
  spinner: string;
};

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
