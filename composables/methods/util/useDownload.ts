import JSZip from 'jszip';

export const useDownload = () => {
  const { isBatchSetting } = useIsBatchSetting();
  const { inputFiles } = useInputFiles();
  const { getFormat } = useGetFormat();
  const { isDownloadByFolder } = useIsDownloadByFolder();

  const download = (type: 'single' | 'all', fileIndex?: number) => {
    if (type === 'all' || isBatchSetting.value) {
      downloadAllFiles();
    } else if (type === 'single' && fileIndex !== undefined) {
      downloadSingleFile(fileIndex);
    }
  };

  const downloadAllFiles = () => {
    // ダウンロードファイル数を算出
    const { downloadNum, indexAtSingle } = calculateDownloadFileNum();

    // ファイルが複数ある場合はzip形式で、１つの場合はファイル形式でダウンロード
    if (downloadNum > 1) {
      if (isDownloadByFolder.value) {
        downloadByFolder();
      } else {
        downloadByFile();
      }
    } else if (downloadNum === 1) {
      downloadByFile(indexAtSingle);
    }
  };

  const downloadSingleFile = (fileIndex: number) => {
    // ダウンロードファイル数を算出
    const { downloadNum } = calculateDownloadFileNum(fileIndex);

    // ファイルが複数ある場合はzip形式で、１つの場合はファイル形式でダウンロード
    if (downloadNum > 1) {
      if (isDownloadByFolder.value) {
        downloadByFolder(fileIndex);
      } else {
        downloadByFile(fileIndex);
      }
    } else if (downloadNum === 1) {
      downloadByFile(fileIndex);
    }
  };

  const downloadByFolder = async (fileIndex?: number) => {
    // JSZipインスタンスの作成
    const zip = new JSZip();

    // フォルダを作成
    const folderName = `${getDate()}_convertible`;
    const folder = zip.folder(folderName);
    if (folder === null) return;

    // ファイルに名前をつけてフォルダに格納
    const fileNum = fileIndex !== undefined ? 1 : inputFiles.value.length;
    const fileNames = [];
    for (let i = 0; i < fileNum; i++) {
      const file = fileIndex !== undefined ? fileIndex : i;
      const settingNum = inputFiles.value[file].length;
      for (let j = 0; j < settingNum; j++) {
        // 未変換のファイルは無視する
        const outputFile = inputFiles.value[file][j].outputFile;
        if (outputFile !== undefined) {
          // ファイル名を作成
          let fileName = createFileName(file, j);

          // ファイル名の重複をチェック
          fileNames.push(fileName + '.' + getFormat(file, j));
          const check = fileNames.filter((name) => name === fileName + '.' + getFormat(file, j));
          if (check.length > 1) {
            fileName = `${fileName} (${check.length - 1}).${getFormat(file, j)}`;
          } else {
            fileName = `${fileName}.${getFormat(file, j)}`;
          }

          // フォルダにファイルを格納
          folder.file(fileName, outputFile);
        }
      }
    }

    // zipフォルダを作成
    const zipFile = await zip.generateAsync({ type: 'blob' });

    // ダウンロード
    downloader(`${folderName}.zip`, URL.createObjectURL(zipFile));
  };

  const downloadByFile = async (fileIndex?: number) => {
    const fileNum = fileIndex !== undefined ? 1 : inputFiles.value.length;
    for (let i = 0; i < fileNum; i++) {
      const file = fileIndex !== undefined ? fileIndex : i;
      const settingNum = inputFiles.value[file].length;
      for (let j = 0; j < settingNum; j++) {
        const folderName = `${createFileName(file, j)}.${getFormat(file, j)}`;
        const data = inputFiles.value[file][j].outputInfo + inputFiles.value[file][j].outputImage;
        downloader(folderName, data);
        await sleep(300);
      }
    }
  };

  const downloader = (folderName: string, data: string) => {
    const link = document.createElement('a');
    link.download = folderName;
    link.href = data;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const calculateDownloadFileNum = (fileIndex?: number) => {
    // ダウンロードファイル数を算出
    const fileNum = fileIndex !== undefined ? 1 : inputFiles.value.length;
    let downloadNum = 0;
    let indexAtSingle = 0;
    for (let i = 0; i < fileNum; i++) {
      const file = fileIndex !== undefined ? fileIndex : i;
      const settingNum = inputFiles.value[file].length;
      for (let j = 0; j < settingNum; j++) {
        if (inputFiles.value[file][j].outputImage) {
          downloadNum++;
          indexAtSingle = i;
        }
      }
    }

    return { downloadNum, indexAtSingle };
  };

  const createFileName = (fileIndex: number, settingIndex: number) => {
    // オリジナルファイル名から拡張子を除去
    const tmpName = inputFiles.value[fileIndex][settingIndex].originalName;
    const name = tmpName.substr(0, tmpName.lastIndexOf('.'));

    // ファイル名を作成
    let fileName;
    if (
      inputFiles.value[fileIndex][settingIndex].originalWidth ===
        inputFiles.value[fileIndex][settingIndex].settingWidth &&
      inputFiles.value[fileIndex][settingIndex].originalHeight ===
        inputFiles.value[fileIndex][settingIndex].settingHeight
    ) {
      fileName = name;
    } else {
      fileName = name + '-' + inputFiles.value[fileIndex][settingIndex].settingWidth;
    }
    return fileName;
  };

  const getDate = (type: 'second' | 'millisecond' = 'second') => {
    const today = new Date();
    let date;
    if (type === 'second') {
      date =
        today.getFullYear() +
        (today.getMonth() + 1).toString().padStart(2, '0') +
        today.getDate().toString().padStart(2, '0') +
        today.getHours().toString().padStart(2, '0') +
        today.getMinutes().toString().padStart(2, '0') +
        today.getSeconds().toString().padStart(2, '0');
    } else {
      date =
        today.getFullYear() +
        (today.getMonth() + 1).toString().padStart(2, '0') +
        today.getDate().toString().padStart(2, '0') +
        today.getHours().toString().padStart(2, '0') +
        today.getMinutes().toString().padStart(2, '0') +
        today.getSeconds().toString().padStart(2, '0') +
        today.getMilliseconds().toString().padStart(3, '0');
    }
    return date;
  };

  // 同期的に処理を止める
  const sleep = (second: number) => {
    return new Promise((resolve) => setTimeout(resolve, second));
  };

  return {
    download,
  };
};
