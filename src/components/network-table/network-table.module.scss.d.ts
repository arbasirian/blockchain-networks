export type IStyles = {
  default_arrow: string;
  down_arrow: string;
  full_table: string;
  table_body_tr: string;
  table_header: string;
  top_arrow: string;
};

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
