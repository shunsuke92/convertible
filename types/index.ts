export type OriginalData = {
  originalName: string;
  originalFileSize: number;
  originalWidth: number;
  originalHeight: number;
  originalFormat: Format;
  originalInfo: string;
  originalImage: string;
};

export type SettingData = {
  settingFormat: Format;
  settingFormatLevel: FormatLevel;
  settingWidth: number;
  settingHeight: number;
  settingFit: SettingFit;
  settingPosition: SettingPosition;
  settingBackground: SettingBackground;
  settingOptimization: boolean;
};

export type OutputData = {
  outputInfo: string;
  outputImage: string;
  outputImageSize: number;
  outputFile: File | undefined;
};

export type EditorData = {
  isAutoAspectRatio: boolean;
};

export type ManagementData = {
  fileId: number;
  settingId: number;
};

export type InputFiles = OriginalData & SettingData & OutputData & EditorData & ManagementData;

export type UpdateOriginalData = Partial<OriginalData>;
export type UpdateSettingData = Partial<SettingData>;
export type UpdateOutputData = Partial<OutputData>;
export type UpdateEditorData = Partial<EditorData>;
export type UpdateManagementData = Partial<ManagementData>;
export type UpdataInputFiles = UpdateOriginalData &
  UpdateSettingData &
  UpdateOutputData &
  UpdateEditorData &
  UpdateManagementData;

export type Format = 'jpeg' | 'png' | 'webp' | 'gif' | 'avif';
export type FormatLevel = 'lossless' | 'high' | 'middle' | 'low';
export type SettingFit = 'cover' | 'contain' | 'fill';
export type SettingPosition = 'center' | 'top' | 'bottom' | 'right' | 'left';
export type SettingBackground = `#${string}`;

export type EditorSetttingValue = {
  format: Format;
  formatLevel: FormatLevel;
  width: number;
  height: number;
  fit: SettingFit;
  position: SettingPosition;
  background: SettingBackground;
  isAutoAspectRatio: boolean;
  optimization: boolean;
};

export type UpdataEditorSetttingValue = Partial<EditorSetttingValue>;

export type Color =
  | 'white'
  | 'white-transparent'
  | 'black'
  | 'gray0'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4'
  | 'gray5'
  | 'gray6'
  | 'gray7'
  | 'gray8'
  | 'gray9'
  | 'gray10'
  | 'gray11'
  | 'gray12'
  | 'color1'
  | 'color2'
  | 'color3'
  | 'color4'
  | 'color5'
  | 'color6'
  | 'color7'
  | 'color8'
  | 'color9'
  | 'color10'
  | 'color11'
  | 'color12'
  | 'color13'
  | 'yellow1'
  | 'yellow2'
  | 'yellow3'
  | 'red'
  | 'blue';
