const { ApolloServer, gql } = require('apollo-server');

const ALBUMS = require('./data/albums');
const PHOTOS = require('./data/photos');

const typeDefs = gql`

  type Photo {
    id: String,
    name: String,
    avatar: String,
    thumb: String,
    src: String,
    desktop: String,
    album: Album
  }

  type Album {
    id: String,
    date: String,
    name: String
    photos: [Photo]
  }

  type Query {
    photos: [Photo],
    albums: [Album],
    album(id: ID!): Album
    photo(id: ID!): Photo
  }
  
`;

const resolvers = {
  Query: {
    albums: () => ALBUMS,
    photos: () => PHOTOS,
    photo: (obj, args, context, info) => {
      let photo = {};
      photo = PHOTOS.find(photo => photo.id === args.id);
      if (photo) {
        const album = ALBUMS.find(album => album.id === photo.albumId);
        photo.album = album;
      }
      return photo;
    },
    album: (obj, args, context, info) => {
      let album = {};
      album = ALBUMS.find(album => album.id === args.id);
      if (album) {
        album.photos = PHOTOS.filter(photo => photo.albumId === album.id)
      }
      return album;
    },

  },
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  introspection: true,
});

server.listen({port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});