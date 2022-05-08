export type IStyles = {
  icon_wrapper: string;
  table_body_tr: string;
  table_td: string;
};

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
