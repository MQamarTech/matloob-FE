export const setLocalStorageItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorageItem = (key, defaultValue = null) => {
  try {
    return JSON.parse(localStorage.getItem(key, defaultValue));
  } catch (error) {
    return defaultValue;
  }
};

export const convertDateFormat = isoString => {
  const date = new Date(isoString);

  // Extracting year, month, and day
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  // Formatting the date as desired, e.g., YYYY-MM-DD
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

export const removeLocalStorageItem = key => localStorage.removeItem(key);
