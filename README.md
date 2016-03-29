# AngularTwitch
# TwitchMe
# This app intends to give the user a customized experience of twitch.tv
* Features:
  - Individual user account
  - Personalized dashboard to add favorite games
  - Search and filter for all games
  - Embedded video from chosen streamer
  - Login with Twitch.tv account (utilizing Passport OAuth2)
* Wishlist:
  - Track/Add streamers to favorites
  - Email/text alert/update for live streams

Work flow for TwitcherDigest Project

	~User signs up or logs in with twitch account
	~User Login Info
		~Login User Authentication
		~User security/privacy (Cross platform/app security with Twitch API)
	~User can sign in with Twitch account
		~user get directed to twitch for authorization
	~User can search for games in searchbar. 
	~First (Left) panel populated with top games.
		~user can select game choices to be saved in My Stash.
		~select the game to stream from populated search or from My Stash.
	~Second (Right) panel user interface
		~User can select from list of streamers to launch a stream of the selected game.
	~third (bottum) panel user interface
		~Lists all the games the user has favorited. 
		~User can update the streams list by selecting a game.
		~User can remove favorites from My Stash.
		~Save users game searches to game My Stash panel
	

	Backend functionality:
	~Create Users table using knex
	~Create Game table using knex
	~Create Streamers table using knex
	~Create express routes
		~Create route to game table
		~Create route to streamers table
		~Create to user login table
	~Connect DB with express
	~Heroku setup
	~User experience Test Cases
		~Unit testing
		~Integration testing
		~Function testing
		~Exceptance testing
