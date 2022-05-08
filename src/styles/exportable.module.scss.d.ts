export type IStyles = {
  color_action: string;
  color_background: string;
  color_border: string;
  color_caption: string;
  color_error: string;
  color_hover: string;
  color_link: string;
  color_natural: string;
  color_placeholder: string;
  color_primary: string;
  color_success: string;
  color_surface: string;
  color_warning: string;
};

export type ClassNames = keyof IStyles;

declare const styles: IStyles;

export default styles;
