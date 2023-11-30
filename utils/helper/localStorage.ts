class LocalStorage {
  static getItem = async (key: string) => {
    try {
      const value = await new Promise((resolve, reject) => {
        const item = localStorage.getItem(key);
        if (item) {
          resolve(item);
        } else {
          resolve(null);
        }
      });
      return value;
    } catch (error) {
      console.error("Error getting item:", error);
    }
  };

  static setItem = async (key: string, value: any) => {
    try {
      await new Promise((resolve, reject) => {
        localStorage.setItem(key, value);
        resolve(null);
      });
    } catch (error) {
      console.error("Error setting item:", error);
    }
  };

  static removeItem = async (key: string) => {
    try {
      await new Promise((resolve, reject) => {
        localStorage.removeItem(key);
        resolve(null);
      });
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  static clear = async () => {
    try {
      await new Promise((resolve, reject) => {
        localStorage.clear();
        resolve(null);
      });
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  };
}

export default LocalStorage;
