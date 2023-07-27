interface Data {
  task: string;
  status: boolean;
}

export const storeToLocalStorage = (key: string, data: Data[]): void => {
  if (!key || !data) {
    console.log("Storage name or data cannot be empty");
  } else {
    // store to local storage
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getFromLocalStorage = (dataKey: string) => {
  if (!dataKey) {
    console.log("Key cannot be empty");
  } else {
    const data = JSON.parse(localStorage.getItem(dataKey)!);
    return data;
  }
};
