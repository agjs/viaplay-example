# Viaplay Example
#### Viaplay example with Viaplay Content API and the Trailer Addict API 

1. At your disposal you have the Viaplay Content API and the Trailer Addict API. 

2. When visiting your video page you should fetch data from the Viaplay Content API, pick out the IMDB ID and request the trailer using that ID (minus the tt). 
	
	* How that is done, you can find in the Trailer Addict API documentation. 

3. When clicking the play button, the box art should be replaced with the video player and start playing the trailer. 
	
	* There is no need to make your own player, just use the iframe solution returned from Trailer Addict.

4. Try to make it easy for yourself to save some time, for example you could rip the URL structure from the Viaplay Content API and apply it in your app. In that way, you could just request data from the Viaplay Content API with the base URL plus the current path.

5. Think of your work as a good starting point for a bigger project. Something that can be built upon by other developers in the future. 

6. The end result should be an archive of files or a link to a repo from where we can clone and run your code. 

Please add a README.md with information about your solution. 

* How do we build and run it ? 
* What tools did you use ? 
* Why did you use them ? 
* Did you intentionally leave stuff out ?
* In that case, what and why ?

* Don’t spend more than a couple of hours on this. Feel free to use any tools you like to show us your skills.

##### Links

* Example link for your app: http://localhost:8080/web-se/film/ghostbusters-1984
* Viaplay Content API link: https://content.viaplay.se/web-se/film/ghostbusters-1984