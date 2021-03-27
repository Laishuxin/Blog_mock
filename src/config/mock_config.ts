// article
export const articleConfig = {
  title: {
    min: 10,
    max: 30,
  },
  description: {
    min: 20,
    max: 50,
  },
  content: {
    min: 10,
    max: 30,
    paragraphMin: 10,
    paragraphMax: 30,
  },
  firstPicture: {
    width: [1920, 1280],
    height: [1080, 640],
  },
  avatar: {
    width: 100,
    height: 100,
  },
  views: {
    min: 0,
    max: 1024 * 100,
  },
  favorite: {
    min: 0,
    max: 100 * 100,
  },
  comments: {
    min: 0,
    max: 20,
  },
}
