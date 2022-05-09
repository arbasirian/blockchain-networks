export type IStyles = {
  empty_row_wrapper: string;
  sort_wrapper: string;
};

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
