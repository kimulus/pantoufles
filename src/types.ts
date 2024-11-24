export interface KnittingSection {
  id: string;
  name: string;
  color: string;
  path: string;
  paletteType: 'main' | 'accent' | 'trim' | 'collar';
}

export interface ColorPalette {
  name: string;
  color: string;
}

export interface SectionPalettes {
  main: ColorPalette[];
  accent: ColorPalette[];
  trim: ColorPalette[];
  collar: ColorPalette[];
}