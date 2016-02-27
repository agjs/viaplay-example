# Viaplay Example
#### Viaplay example with Viaplay Content API and the Trailer Addict API 



Please write your application in Node.JS and send it back to the organizer as soon as possible. Feel free to use frameworks and plugins if you wish.

##### Your Assignment
Your mission is to create a video page that shows some basic data about the selected movie with a playable trailer. The page should look similar to the image below, with a header, video and footer sections.


![alt text](http://venus.workupload.com/image/nFuoLu49 "Viaplay Screenshot")

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


##### Note

* In order to increase my chance of getting to Viaplay, please listen to the Titanic song and even better, watch the DiCaprio drown. That might soften your hearts a bit! 


#### Entire project explained in the video

* Video: https://www.youtube.com/watch?v=JH-n2XxU8Wc&feature=youtu.be
* Music in the video: https://www.youtube.com/watch?v=w2WSx2SvX98
* Heroku: https://viaplay-example.herokuapp.com

#### Run

* npm install
* npm start

Since I didn't setup any additional grunt tasks, if you want to bundle the SCSS:

* --watch style.scss:assets/style.css

To bundle frontend: 

* grunt (it will run the default task)