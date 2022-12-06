define(['pipAPI', 'https://sophievandijck.github.io/IATtestversie/IAtphysioperspective.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Actief', //Will appear in the data.
			title : {
				media : {word : 'Actief'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image: 'cycling.png'},
					{image: 'dog walking.png'},
					{image: 'gardening.png'},
					{image: 'lifting.png'},
					{image: 'running.png'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Rust', //Will appear in the data.
			title : {
				media : {word : 'Rust'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{image: 'leaning wall.png'},
					{image: 'lying floor cropped.png'},
					{image: 'sitting on chair.png'},
					{image: 'sitting on floor.png'},
					{image: 'sitting on floor_2.png'}
      			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
    		attribute2 :	{
			name : 'Veilig',
			title : {
				media : {word : 'Veilig'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Betrouwbaar'},
					{word: 'Bescherming'},
					{word: 'Ongedeerd'},
					{word: 'Veiligheid'},
					{word: 'Zorgeloos'},
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute1 :{
			name : 'Gevaar',
			title : {
				media : {word : 'Gevaar'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Schade'},
					{word: 'Probleem'},
					{word: 'Onveilig'},
					{word: 'Risicovol'},
					{word: 'Dreiging'},
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://www.flickr.com/photos/197162666@N08/albums/72177720304244491'
		} 
	});
});
