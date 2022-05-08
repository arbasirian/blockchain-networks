export type IStyles = {
  text: string;
};

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
