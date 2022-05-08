export type IStyles = {
  full_table: string;
  table_header: string;
};

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
