const createElement = (type, className, data) => {
  const elem = document.createElement(type);
  const text = document.createTextNode(data);
  elem.className = elem.className
    ? elem.className
    : 'list-item';
  elem.appendChild(text);
  return elem;
};

const createList = (classNames, items, tabId) => {
  const list = document.createElement('ul');
  list.className = classNames.list
    ? classNames.list
    : 'list';
  items.forEach((item) => { // item przekaz i pracuj na nim to sa dane
    let text;
    switch (tabId) {
    case 'logs':
      text = `Count: ${item.value}, Name: ${item.key}`;
      break;
    case 'feeds':
      text = `Date: ${item.isoDate}, Title: ${item.title}`;
      break;
    default:
      break;
    }
    const elem = createElement('li', classNames.item, text);
    list.appendChild(elem);
  });

  return list;
};

const createPhoto = (type, className, url) => {
  const elem = document.createElement(type);
  elem.className = elem.className
    ? elem.className
    : 'photo';
  elem.style.backgroundImage = `url(${url})`;
  return elem;
};

const createGallery = (classNames, items) => {
  const gallery = document.querySelector('.photos-container');
  if (gallery.hasChildNodes()) {
    gallery.innerHTML = '';
  }
  gallery.className = classNames.gallery
    ? classNames.gallery
    : 'photos-container';
  items.forEach((item) => {
    const elem = createPhoto('div', classNames.photo, item.medium);
    gallery.appendChild(elem);
  });

  return gallery;
};

const debounce = (fn, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;
      fn(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const helpers = {
  createList,
  createGallery,
  debounce,
};

export {
  helpers as default,
  createList,
  createGallery,
  debounce,
};
