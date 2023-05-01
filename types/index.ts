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

export type MenuData = {
  isAutoAspectRatio: boolean;
};

export type ManagementData = {
  fileId: number;
  settingId: number;
};

export type InputFiles = OriginalData & SettingData & OutputData & MenuData & ManagementData;

export type UpdateOriginalData = Partial<OriginalData>;
export type UpdateSettingData = Partial<SettingData>;
export type UpdateOutputData = Partial<OutputData>;
export type UpdateMenuData = Partial<MenuData>;
export type UpdateManagementData = Partial<ManagementData>;
export type UpdataInputFiles = UpdateOriginalData &
  UpdateSettingData &
  UpdateOutputData &
  UpdateMenuData &
  UpdateManagementData;

export type Format = 'jpeg' | 'png' | 'webp' | 'gif' | 'avif';
export type FormatLevel = 'lossless' | 'high' | 'middle' | 'low';
export type SettingFit = 'cover' | 'contain' | 'fill';
export type SettingPosition = 'center' | 'top' | 'bottom' | 'right' | 'left';
export type SettingBackground = `#${string}`;

export type MenuSetttingValue = {
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

export type UpdataMenuSetttingValue = Partial<MenuSetttingValue>;
