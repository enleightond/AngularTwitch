# AngularTwitch
# twitchersDigest
# This app intends to give the user a customized experience of twitch.tv
* Features:
  - Individual user account
  - Personalized page to include favorite streams
  - Track streamers
  - Tracks status of streamers (on/offline)
  - Search and filter for all games
* Wishlist:
  - Embedded video
  - Email/text alert/update for live streams


Work flow for TwitcherDigest Project

	~User sign up/sign in page
	~User Login Info
		~Login User Authentication
		~User security/privacy (Cross platform/app security with Twitch API)
	~User can sign in with Twitch account
		~user get directed to twitch for auth
	~First panel user interface
		~User can search for games/streams. 
		~user can select "Stream Choices" to be saved in favorites.
		~select the game to display
	~second panel user interface
		~User can select from list of "Favorite Games" to populate the streamers panel for current streams of selected game.
	~third panel user interface
		~User can expand video stream from streamer section into full screen mode to display in second panel.
		~lists current game streamers
		~lists favorite streamers
	~Save users game searches to game favorites panel
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
