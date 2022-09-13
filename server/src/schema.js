const { gql } = require('apollo-server');

const typeDefs = gql`
	"Entry points into the rest of out data"
	type Query {
		"""
		Query to get tracks array for Homepage grid
		non-null list of non-null tacks
		"""
		tracksForHome: [Track!]!
	}

	"A Track is a group of Modules that teaches about a specific topic"
	type Track {
		"Tracks unique ID"
		id: ID!
		"Tracks title that cannot be null"
		title: String!
		"Tracks main author that cannot be null"
		author: Author!
		"Trakcs link to image thumbnail"
		thumbnail: String
		"Tracks approximate length to complete"
		length: Int
		"Number of modules this track contains"
		modulesCount: Int
	}

	"Author of a complete track"
	type Author {
		"Unique ID"
		id: ID!
		"Author Name"
		name: String!
		"Link to Author Photo"
		photo: String
	}
`;

module.exports = typeDefs;
