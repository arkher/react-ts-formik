const fallbackStorage: {
  [value: string]: string;
} = {};

export default {
  get(key: string, fallbackValue?: string) {
    try {
      const data = window.sessionStorage.getItem(key);
      return data ? JSON.parse(data) : fallbackValue;
    } catch (e) {
      console.error(e);
      return fallbackStorage[key] || fallbackValue;
    }
  },

  set(key: string, value: string) {
    try {
      const data = JSON.stringify(value);
      window.sessionStorage.setItem(key, data);
    } catch (e) {
      fallbackStorage[key] = value;
      console.error(e);
    }

    return value;
  },

  remove(key: string) {
    try {
      window.sessionStorage.removeItem(key);
    } catch (e) {
      delete fallbackStorage[key];
      console.error(e);
    }
  },
};
