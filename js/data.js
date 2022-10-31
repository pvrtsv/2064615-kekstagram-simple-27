import {getElement, getRandomPositiveInteger} from './util.js';

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

const createPhotoGallery = (count) => {
  const photoGallery = [];
  for (let i = 1; i <= count; i++) {
    photoGallery[i] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: getElement(photoDescription),
      likes: getRandomPositiveInteger(LikesCount.MIN, LikesCount.MAX),
      comments: getRandomPositiveInteger(CommentsCount.MIN, CommentsCount.MAX),
    };
  }
  return photoGallery;
};

createPhotoGallery(25);
