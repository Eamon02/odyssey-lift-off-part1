// Only need this packeg {} from apollo
const { ApolloServer } = require('apollo-server');
// Pulling typeDefs from schema
const typeDefs = require('./schema');

// initiate server instance && allow apollo to provide mock data
// const server = new ApolloServer({ typeDefs, mocks:true });

// We can allow mock data to be more specific! by setting them to functions
const mocks = {
	// Apollo automatically returns 2 entries per field, but we can specify more with this!!!
	Query: () => ({
		tracksForHome: () => [...new Array(6)],
	}),
	Track: () => ({
		id: () => 'track_01',
		title: () => 'Astro Kitty, Space Explorer',
		author: () => {
			return {
				name: 'Grumpy Cat',
				photo: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
			};
		},
		thumbnail: () =>
			'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
		length: () => 1210,
		modulesCount: () => 6,
	}),
};

const server = new ApolloServer({
	typeDefs,
	mocks,
});

// creating and async message to tell us our server is running
server.listen().then(() => {
	console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at http://localhost:4000
    `);
});
