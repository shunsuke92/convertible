export const useSetMatchMediaAddEventListener = () => {
  const setMatchMediaAddEventListener = (
    // eslint-disable-next-line
    callBack: (this: MediaQueryList, ev: MediaQueryListEvent) => any,
  ) => {
    window.matchMedia('(min-width:375px)').addEventListener('change', callBack);
    window.matchMedia('(min-width:576px)').addEventListener('change', callBack);
    window.matchMedia('(min-width:768px)').addEventListener('change', callBack);
    window.matchMedia('(min-width:992px)').addEventListener('change', callBack);
    window.matchMedia('(min-width:1200px)').addEventListener('change', callBack);
    window.matchMedia('(min-width:1400px)').addEventListener('change', callBack);
  };

  return {
    setMatchMediaAddEventListener,
  };
};
