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
