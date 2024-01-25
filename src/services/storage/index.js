const store = window.localStorage;

export const getStorage = key => {
  try {
    return JSON.parse(store.getItem(key));
  } catch (e) {
    return null;
  }
};

export const setStorage = (key, value) => store.setItem(key, JSON.stringify(value));

export const removeStorage = key => store.removeItem(key);

export const clearAll = () => store.clear();

export const hasStorage = key => {
  const item = getStorage(key);
  return !!item;
};
