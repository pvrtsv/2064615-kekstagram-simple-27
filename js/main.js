const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const CommentsCount = {
  MIN: 0,
  MAX: 200,
};

const photoDescription = [
  'На море',
  'Гуляем',
  'На недельку в Комарово',
  'Долгожданная встреча',
];

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('Privet', 6);

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPhotoGallery = (count) => {
  const photoGallery = [];
  for (let i = 0; i <= count; i++) {
    photoGallery[i] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: getElement(photoDescription),
      likes: getRandomPositiveInteger(LikesCount.MIN, LikesCount.MAX),
      comments: getRandomPositiveInteger(CommentsCount.MIN, CommentsCount.MAX),
    };
  };
  return photoGallery;
};

const listOfPhoto = createPhotoGallery(25);
console.table(listOfPhoto);
