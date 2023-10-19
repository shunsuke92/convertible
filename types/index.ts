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
  | 'gray50'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray600'
  | 'gray700'
  | 'gray800'
  | 'gray900'
  | 'gray950'
  | 'green50'
  | 'green100'
  | 'green200'
  | 'green300'
  | 'green400'
  | 'green500'
  | 'green600'
  | 'green700'
  | 'green800'
  | 'green900'
  | 'green950'
  | 'red50'
  | 'red100'
  | 'red200'
  | 'red300'
  | 'red400'
  | 'red500'
  | 'red600'
  | 'red700'
  | 'red800'
  | 'red900'
  | 'red950'
  | 'blue50'
  | 'blue100'
  | 'blue200'
  | 'blue300'
  | 'blue400'
  | 'blue500'
  | 'blue600'
  | 'blue700'
  | 'blue800'
  | 'blue900'
  | 'blue950'
  | 'yellow50'
  | 'yellow100'
  | 'yellow200'
  | 'yellow300'
  | 'yellow400'
  | 'yellow500'
  | 'yellow600'
  | 'yellow700'
  | 'yellow800'
  | 'yellow900'
  | 'yellow950'
  | 'sky50'
  | 'sky100'
  | 'sky200'
  | 'sky300'
  | 'sky400'
  | 'sky500'
  | 'sky600'
  | 'sky700'
  | 'sky800'
  | 'sky900'
  | 'sky950';
