document.getElementById('generator').onclick = function makeStartup() {
	company = companies[Math.floor(Math.random()*companies.length)];
	item = items[Math.floor(Math.random()*items.length)];
	document.getElementById('startup').innerHTML = company + ", but for " + item;
	document.getElementById('generator').innerHTML = "Again!";
}

const companies = ['Uber', 'Tinder', 'Facebook', 'Spotify', 'Tik Tok', 'Grubhub', 'Instagram', 'Snapchat', 'Twitter', 'Reddit', 'Reddit', 'Bumble', 'DoorDash', 'Email', 'GroupMe', 'Hulu', 'HBO', 'LinkedIn', 'Lyft', 'Netflix', 'PayPal', 'Slack', 'Trello', 'Venmo', 'Waze', 'Yelp', 'YouTube', 'Twitch', 'Pinterest', 'Discord', 'Postmates', 'Seamless']
const items = ['microtransactions', 'emails', 'the blockchain', 'music', 'cryptocurrency', 'food', 'videos', 'books', 'photos', 'retail', 'cars', 'Voice Assistants', 'your parents', 'your kids', 'men', 'women', 'schools', 'burritos', 'ice cream', 'credit scores', 'social media', 'social networks', 'crosswords', 'passwords', 'pizza', 'DoorDash', 'coffee', 'video calls', 'old people', 'young people', 'fitness', 'airplanes', 'movies', 'TV shows', 'virtual reality', 'artisanal hummus', 'powerpoints', 'space travel']
