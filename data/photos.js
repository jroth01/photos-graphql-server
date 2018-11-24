const PHOTOS = [
  {
    id: 'sunrise in texas.jpg',
    name: 'Sunrise in Texas',
    albumId: 'permian-1',
    src: 'https://i.pinimg.com/originals/ec/3d/84/ec3d848f6c9215ade75b97fa3fa2187a.jpg',
  },
  {
    id: 'long-road',
    name: 'A Long Road',
    albumId: 'permian-1',
    src: 'https://i.pinimg.com/originals/13/15/f2/1315f29209038882b3bac886cc65fd0d.jpg',
  },
  {
    id: "devil-canyon.jpg",
    name: 'Devil\'s Canyon',
    albumId: 'permian-1',
    src: 'https://scontent-lhr3-1.cdninstagram.com/vp/595c1bc743b02b6bfcfcc6bc626ded27/5C4841DC/t51.2885-15/e35/c247.0.544.544/s320x320/30855097_416875948783685_4905469057148387328_n.jpg',
  },
  {
    id: 'purple.jpg',
    name: 'Purple Majesty',
    albumId: 'permian-1',
    src: 'https://i.pinimg.com/originals/5f/42/bf/5f42bf81c6b019faa841ee60f3310091.jpg',
  },
  {
    id: 'floodin-down-in-texas',
    name: 'Texas Flood',
    albumId: 'texas-1',
    src: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/ys-waterfalls/ys-waterfalls-05.adapt.1900.1.jpg',
  },
  {
    id: 'oil.jpg',
    name: 'Oil Country',
    albumId: 'texas-1',
    src: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/ys-waterfalls/ys-waterfalls-06.adapt.1900.1.jpg',
  },
  {
    id: 'yeehaw.jpg',
    name: 'Southern Draw',
    albumId: 'texas-1',
    src: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/ys-waterfalls/ys-waterfalls-07.adapt.1900.1.jpg',
  },
  {
    id: 'taco.png',
    albumId: 'texas-1',
    name: 'Tex Mex',
    src: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/ys-waterfalls/ys-waterfalls-08.adapt.1900.1.jpg',
  },
  {
    id: 'crab.png',
    albumId: 'alaska-1',
    src: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/ys-waterfalls/ys-waterfalls-09.adapt.1900.1.jpg',
  },
  {
    id: 'wildflower.jpg',
    albumId: 'alaska-1',
    src: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/ys-waterfalls/ys-waterfalls-10.adapt.1900.1.jpg',
  },
  {
    id: '193-3',
    albumId: 'alaska-1',
    src: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/ys-waterfalls/ys-waterfalls-11.adapt.1900.1.jpg',
  },
  {
    id: 'some-id',
    albumId: 'alaska-1',
    src: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/ys-waterfalls/ys-waterfalls-12.adapt.1900.1.jpg',
  },
  {"id":"0","src":"https://i.postimg.cc/Qxw0vzdQ/IMG-20181124-091531.jpg","albumId":"pawling-vacation"},{"id":"1","src":"https://i.postimg.cc/Z5Lj05Lc/IMG-20181124-091539.jpg","albumId":"pawling-vacation"},{"id":"2","src":"https://i.postimg.cc/Dzy6G3jK/IMG-20181124-091610.jpg","albumId":"pawling-vacation"},{"id":"3","src":"https://i.postimg.cc/W3xwxF22/IMG-20181124-091621.jpg","albumId":"pawling-vacation"},{"id":"4","src":"https://i.postimg.cc/tCWBQ5Z8/IMG-20181124-091632.jpg","albumId":"pawling-vacation"},{"id":"5","src":"https://i.postimg.cc/bdcS91qt/IMG-20181124-091646.jpg","albumId":"pawling-vacation"},{"id":"6","src":"https://i.postimg.cc/SRzz9gb4/IMG-20181124-091656.jpg","albumId":"pawling-vacation"},{"id":"7","src":"https://i.postimg.cc/Y24X8kpr/IMG-20181124-091720.jpg","albumId":"pawling-vacation"},{"id":"8","src":"https://i.postimg.cc/mr8MWcyv/IMG-20181124-091758.jpg","albumId":"pawling-vacation"},{"id":"9","src":"https://i.postimg.cc/6qL4zyqb/IMG-20181124-091830.jpg","albumId":"pawling-vacation"},{"id":"10","src":"https://i.postimg.cc/qMwC3h9z/IMG-20181124-091929.jpg","albumId":"pawling-vacation"},{"id":"11","src":"https://i.postimg.cc/gkmZjqtC/IMG-20181124-092040.jpg","albumId":"pawling-vacation"},{"id":"12","src":"https://i.postimg.cc/pTQdM3vp/IMG-20181124-092157.jpg","albumId":"pawling-vacation"},{"id":"13","src":"https://i.postimg.cc/nVvmnw2K/IMG-20181124-092324.jpg","albumId":"pawling-vacation"},{"id":"14","src":"https://i.postimg.cc/W1fF9RpV/IMG-20181124-092506.jpg","albumId":"pawling-vacation"},{"id":"15","src":"https://i.postimg.cc/RZqqJP7D/IMG-20181124-092522.jpg","albumId":"pawling-vacation"},{"id":"16","src":"https://i.postimg.cc/KcJZ7P8S/IMG-20181124-092917.jpg","albumId":"pawling-vacation"},{"id":"17","src":"https://i.postimg.cc/4NDjpyVR/IMG-20181124-092927.jpg","albumId":"pawling-vacation"},{"id":"18","src":"https://i.postimg.cc/vB2NTZbj/IMG-20181124-093004.jpg","albumId":"pawling-vacation"},{"id":"19","src":"https://i.postimg.cc/yNvfp8gd/IMG-20181124-093037.jpg","albumId":"pawling-vacation"},{"id":"20","src":"https://i.postimg.cc/pXhg9z9B/IMG-20181124-093059.jpg","albumId":"pawling-vacation"},{"id":"21","src":"https://i.postimg.cc/d0vXSf5W/IMG-20181124-093116.jpg","albumId":"pawling-vacation"},{"id":"22","src":"https://i.postimg.cc/W31yskLg/IMG-20181124-093133.jpg","albumId":"pawling-vacation"},{"id":"23","src":"https://i.postimg.cc/MZ4L8Hsf/IMG-20181124-093202.jpg","albumId":"pawling-vacation"},{"id":"24","src":"https://i.postimg.cc/HnJPy1LL/IMG-20181124-093250.jpg","albumId":"pawling-vacation"},{"id":"25","src":"https://i.postimg.cc/662XZDgR/IMG-20181124-093302.jpg","albumId":"pawling-vacation"},{"id":"26","src":"https://i.postimg.cc/mDnmRpSW/IMG-20181124-093316.jpg","albumId":"pawling-vacation"},{"id":"27","src":"https://i.postimg.cc/V5Q40ST7/IMG-20181124-093405.jpg","albumId":"pawling-vacation"},{"id":"28","src":"https://i.postimg.cc/13HhPPVx/IMG-20181124-093422.jpg","albumId":"pawling-vacation"},{"id":"29","src":"https://i.postimg.cc/Pr1n31t5/IMG-20181124-093514.jpg","albumId":"pawling-vacation"},{"id":"30","src":"https://i.postimg.cc/VsxcWKPh/IMG-20181124-093532.jpg","albumId":"pawling-vacation"},{"id":"31","src":"https://i.postimg.cc/g2dFfrJq/IMG-20181124-093640.jpg","albumId":"pawling-vacation"},{"id":"32","src":"https://i.postimg.cc/N0jhjVRK/IMG-20181124-093651.jpg","albumId":"pawling-vacation"},{"id":"33","src":"https://i.postimg.cc/qRN983b0/IMG-20181124-093729.jpg","albumId":"pawling-vacation"},{"id":"34","src":"https://i.postimg.cc/L4Zc5jg3/IMG-20181124-093814.jpg","albumId":"pawling-vacation"}
]

module.exports = PHOTOS;