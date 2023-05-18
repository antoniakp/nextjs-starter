import { SxProps, Theme } from '@mui/system';

export type Styles = SxProps<Theme>;

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }

  interface PaletteOptions {
    white: PaletteOptions['primary'];
  }
}
