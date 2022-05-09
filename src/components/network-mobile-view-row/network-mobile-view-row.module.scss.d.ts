export type IStyles = {
  icon_wrapper: string;
  row_item: string;
  row_wrapper: string;
  status_wrapper: string;
};

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
