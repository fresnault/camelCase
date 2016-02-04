'use strict';

/**
 * @ngdoc function
 * @name camelCaseApp.controller:vuePolygonInteractiveCtrl
 * @description
 * # vuePolygonInteractiveCtrl
 * Controller of the camelCaseApp
 */
angular.module('camelCaseApp')
	.controller('vueFilmCtrl', function($scope) {

		$scope.thing = {
			type : 1,
			film : {
				titre : 'La mort dans la peau',
				tagline:'Ils lui ont volé son identité. Il veut la reprendre.',
				overview : 'Depuis deux ans, l\'ex-agent / tueur à gages de la CIA Jason Bourne et sa compagne Marie ont réussi à tromper leurs poursuivants au prix d\'une vigilance sans faille. Ce paisible village de Goa aurait dû être leur dernier refuge. Vain espoir. Deux ans plus tôt, Jason avait juré de se venger de quiconque le relancerait. Il tiendra parole.',
				note : 8,
				image : 'https://image.tmdb.org/t/p/w300/hfih7VmwTgFYSg4a1ZVYojNDltv.jpg'
			},
			acteurs : [
				{
					nom:'Matt Damond ',
					image:'https://image.tmdb.org/t/p/w185/eLAWpp5BLbTwjj35MbGzpL0QkWv.jpg',
					biographie:'Matthew Paige "Matt" Damon (born October 8, 1970) is an American actor, screenwriter, and philanthropist whose career was launched following the success of the film Good Will Hunting (1997) from a screenplay he co-wrote with friend Ben Affleck. The pair won an Academy Award for Best Original Screenplay and a Golden Globe Award for Best Screenplay for their work. Damon alone received multiple Best Actor nominations, including an Academy Award nomination for his lead performance in the film. Damon has since starred in commercially successful films such as Saving Private Ryan (1998), the Ocean\'s trilogy, and the first three films in the Bourne series, while also gaining critical acclaim for his performances in dramas such as Syriana (2005), The Good Shepherd (2006), and The Departed (2006). He garnered a Golden Globe nomination for portraying the title character in The Talented Mr. Ripley (1999) and was nominated for an Academy Award for Best Supporting Actor in Invictus (2009). He is one of the top 40 highest grossing actors of all time. In 2007, Damon received a star on the Hollywood Walk of Fame and was named Sexiest Man Alive by People magazine. Damon has been actively involved in charitable work, including the ONE Campaign, H2O Africa Foundation, and Water.org.'

				},
				{
					nom:'Julia Stiles',
					image:'https://image.tmdb.org/t/p/w185/wqFYU1IS1xhn4yBjlkXt9LwFYr0.jpg',
					biographie:'Julia O\'Hara Stiles (born March 28, 1981) is an American actress.After beginning her career in small parts in a New York City theatre troupe, she has moved on to leading roles in plays by writers as diverse as William Shakespeare and David Mamet. Her film career has included both commercial and critical successes, ranging from teen romantic comedies such as 10 Things I Hate About You (1999) to dark art house pictures such as The Business of Strangers (2001). She is also known for playing the supporting character Nicky Parsons in the Bourne film series and the leading role in Save the Last Dance, and for her role in Mona Lisa Smile. She guest starred as Lumen Pierce in the fifth season of the Showtime series Dexter, a role that earned her a Golden Globe Award nomination.Description above from the Wikipedia article Julia Stiles, licensed under CC-BY-SA, full list of contributors on Wikipedia.'

				},

				{
					nom:'Matt Damond 3',
					image:'https://image.tmdb.org/t/p/w185/eLAWpp5BLbTwjj35MbGzpL0QkWv.jpg',
					biographie:'Matthew Paige "Matt" Damon (born October 8, 1970) is an American actor, screenwriter, and philanthropist whose career was launched following the success of the film Good Will Hunting (1997) from a screenplay he co-wrote with friend Ben Affleck. The pair won an Academy Award for Best Original Screenplay and a Golden Globe Award for Best Screenplay for their work. Damon alone received multiple Best Actor nominations, including an Academy Award nomination for his lead performance in the film. Damon has since starred in commercially successful films such as Saving Private Ryan (1998), the Ocean\'s trilogy, and the first three films in the Bourne series, while also gaining critical acclaim for his performances in dramas such as Syriana (2005), The Good Shepherd (2006), and The Departed (2006). He garnered a Golden Globe nomination for portraying the title character in The Talented Mr. Ripley (1999) and was nominated for an Academy Award for Best Supporting Actor in Invictus (2009). He is one of the top 40 highest grossing actors of all time. In 2007, Damon received a star on the Hollywood Walk of Fame and was named Sexiest Man Alive by People magazine. Damon has been actively involved in charitable work, including the ONE Campaign, H2O Africa Foundation, and Water.org.'

				},
				{
					nom:'Matt Damond 4',
					image:'https://image.tmdb.org/t/p/w185/eLAWpp5BLbTwjj35MbGzpL0QkWv.jpg',
					biographie:'Matthew Paige "Matt" Damon (born October 8, 1970) is an American actor, screenwriter, and philanthropist whose career was launched following the success of the film Good Will Hunting (1997) from a screenplay he co-wrote with friend Ben Affleck. The pair won an Academy Award for Best Original Screenplay and a Golden Globe Award for Best Screenplay for their work. Damon alone received multiple Best Actor nominations, including an Academy Award nomination for his lead performance in the film. Damon has since starred in commercially successful films such as Saving Private Ryan (1998), the Ocean\'s trilogy, and the first three films in the Bourne series, while also gaining critical acclaim for his performances in dramas such as Syriana (2005), The Good Shepherd (2006), and The Departed (2006). He garnered a Golden Globe nomination for portraying the title character in The Talented Mr. Ripley (1999) and was nominated for an Academy Award for Best Supporting Actor in Invictus (2009). He is one of the top 40 highest grossing actors of all time. In 2007, Damon received a star on the Hollywood Walk of Fame and was named Sexiest Man Alive by People magazine. Damon has been actively involved in charitable work, including the ONE Campaign, H2O Africa Foundation, and Water.org.'

				},
				{
					nom:'Matt Damond 5',
					image:'https://image.tmdb.org/t/p/w185/eLAWpp5BLbTwjj35MbGzpL0QkWv.jpg',
					biographie:'Matthew Paige "Matt" Damon (born October 8, 1970) is an American actor, screenwriter, and philanthropist whose career was launched following the success of the film Good Will Hunting (1997) from a screenplay he co-wrote with friend Ben Affleck. The pair won an Academy Award for Best Original Screenplay and a Golden Globe Award for Best Screenplay for their work. Damon alone received multiple Best Actor nominations, including an Academy Award nomination for his lead performance in the film. Damon has since starred in commercially successful films such as Saving Private Ryan (1998), the Ocean\'s trilogy, and the first three films in the Bourne series, while also gaining critical acclaim for his performances in dramas such as Syriana (2005), The Good Shepherd (2006), and The Departed (2006). He garnered a Golden Globe nomination for portraying the title character in The Talented Mr. Ripley (1999) and was nominated for an Academy Award for Best Supporting Actor in Invictus (2009). He is one of the top 40 highest grossing actors of all time. In 2007, Damon received a star on the Hollywood Walk of Fame and was named Sexiest Man Alive by People magazine. Damon has been actively involved in charitable work, including the ONE Campaign, H2O Africa Foundation, and Water.org.'

				},
				{
					nom:'Matt Damond 6',
					image:'https://image.tmdb.org/t/p/w185/eLAWpp5BLbTwjj35MbGzpL0QkWv.jpg',
					biographie:'Matthew Paige "Matt" Damon (born October 8, 1970) is an American actor, screenwriter, and philanthropist whose career was launched following the success of the film Good Will Hunting (1997) from a screenplay he co-wrote with friend Ben Affleck. The pair won an Academy Award for Best Original Screenplay and a Golden Globe Award for Best Screenplay for their work. Damon alone received multiple Best Actor nominations, including an Academy Award nomination for his lead performance in the film. Damon has since starred in commercially successful films such as Saving Private Ryan (1998), the Ocean\'s trilogy, and the first three films in the Bourne series, while also gaining critical acclaim for his performances in dramas such as Syriana (2005), The Good Shepherd (2006), and The Departed (2006). He garnered a Golden Globe nomination for portraying the title character in The Talented Mr. Ripley (1999) and was nominated for an Academy Award for Best Supporting Actor in Invictus (2009). He is one of the top 40 highest grossing actors of all time. In 2007, Damon received a star on the Hollywood Walk of Fame and was named Sexiest Man Alive by People magazine. Damon has been actively involved in charitable work, including the ONE Campaign, H2O Africa Foundation, and Water.org.'

				}
			]
		};





	});