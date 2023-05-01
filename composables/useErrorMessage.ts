export const useErrorMessage = () => {
  const { MAXIMUM_NUMBER_OF_IMAGES, MAXIMUM_NUMBER_OF_SUBMIT } = useConstant();

  const errorMessage = (errcode: number, text?: string) => {
    switch (errcode) {
      case 1:
        alert('このファイルは対象外です。');
        break;

      case 2:
        alert('対象外のファイルが含まれていました。');
        break;

      case 3:
        alert('4.2MB以上のファイルはアップロードできません。');
        break;

      case 4:
        alert(`以下のファイルのアップロードに失敗しました。\n\n${text}`);
        break;

      case 5:
        alert('タイムアウトしました。\nファイルが大きすぎる可能性があります。');
        break;

      case 6:
        alert(
          '変換後のファイルサイズが大きすぎるためエラーとなりました。\n申し訳ありませんが、設定を変更してください。',
        );
        break;

      case 7:
        alert(
          'サーバーでエラーが発生しました。\n申し訳ありませんが、設定を変更し、もう一度お試しください。',
        );
        break;

      case 8:
        alert('送信に失敗しました。');
        break;

      case 9:
        alert(`アップロードできる画像の上限は${MAXIMUM_NUMBER_OF_IMAGES.value}枚です。`);
        break;

      case 10:
        alert(`一度に変換できる画像の上限は${MAXIMUM_NUMBER_OF_SUBMIT.value}枚です。`);
        break;

      case 11:
        alert('画像の取り込み中にエラーが発生しました。');
        break;
    }
  };

  return { errorMessage };
};
