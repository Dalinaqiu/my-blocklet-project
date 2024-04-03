
export const getDataFromLocalstorage = item => {
  const data = window.localStorage.getItem(item);
  if (data) {
    return JSON.parse(data);
  }
  return '';
};
  
export const setDataFromLocalstorage = (item, data) => {
  window.localStorage.setItem(item, JSON.stringify(data));
};

export const mockData = {
  name: 'liqiu',
  email: '123456@gmail.com',
  phone: '1553333333'
};
  
export const userKey = 'user';