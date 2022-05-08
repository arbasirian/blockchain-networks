export type IStyles = {
  rectangle: string;
  rectangle_active: string;
  rectangle_deactive: string;
};

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
