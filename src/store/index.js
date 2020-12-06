import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		videos: [
			{
				id: 1,
				name: "ES2015 Arrow Function",
				description: `<p>ES2015 (aka ES6) has some great ways to make your code easier to write and understand</p>`,
				thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4IFrCamfbODucINDz8VGnQAAAA%26pid%3DApi&f=1',
				videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/Series%3A+Building+a+VueJS+App/1.5+-+Playing+video+with+the+vue-video-player.mp4"
			},
			{
				id: 2,
				name: "ES2015 Template Strings",
				description: `<p>ES2015 (aka ES6) has some great ways to make your code easier to write and understand</p>
				<p>Here are 3 cool things that template strings enable.</p>`,
				thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4IFrCamfbODucINDz8VGnQAAAA%26pid%3DApi&f=1',
				videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/Series%3A+Building+a+VueJS+App/1.5+-+Playing+video+with+the+vue-video-player.mp4"
			},
			{
				id: 3,
				name: "ES2015 Arrow Modules",
				description: `<p>ES2015 (aka ES6) has some great ways to make your code easier to write and understand</p>`,
				thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4IFrCamfbODucINDz8VGnQAAAA%26pid%3DApi&f=1',
				videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/Series%3A+Building+a+VueJS+App/1.5+-+Playing+video+with+the+vue-video-player.mp4"
			},
			{
				id: 4,
				name: "Promise Basics",
				description: `<p>ES2015 (aka ES6) has some great ways to make your code easier to write and understand</p>`,
				thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4IFrCamfbODucINDz8VGnQAAAA%26pid%3DApi&f=1',
				videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/Series%3A+Building+a+VueJS+App/1.5+-+Playing+video+with+the+vue-video-player.mp4"
			},
			{
				id: 5,
				name: "Creating New Promises",
				description: `<p>ES2015 (aka ES6) has some great ways to make your code easier to write and understand</p>`,
				thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4IFrCamfbODucINDz8VGnQAAAA%26pid%3DApi&f=1',
				videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/Series%3A+Building+a+VueJS+App/1.5+-+Playing+video+with+the+vue-video-player.mp4"
			},
			{
				id: 6,
				name: "Multiple Concurrent Promises",
				description: `<p>ES2015 (aka ES6) has some great ways to make your code easier to write and understand</p>`,
				thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4IFrCamfbODucINDz8VGnQAAAA%26pid%3DApi&f=1',
				videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/Series%3A+Building+a+VueJS+App/1.5+-+Playing+video+with+the+vue-video-player.mp4"
			},
			{
				id: 7,
				name: "ES2015 Destructuring",
				description: `<p>ES2015 (aka ES6) has some great ways to make your code easier to write and understand</p>`,
				thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4IFrCamfbODucINDz8VGnQAAAA%26pid%3DApi&f=1',
				videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/Series%3A+Building+a+VueJS+App/1.5+-+Playing+video+with+the+vue-video-player.mp4"
			},
			{
				id: 8,
				name: "ES2015 Decorators",
				description: `<p>ES2015 (aka ES6) has some great ways to make your code easier to write and understand</p>`,
				thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4IFrCamfbODucINDz8VGnQAAAA%26pid%3DApi&f=1',
				videoUrl: "https://vue-screencasts.s3.us-east-2.amazonaws.com/video-files/Series%3A+Building+a+VueJS+App/1.5+-+Playing+video+with+the+vue-video-player.mp4"
			},
		]
	},
	mutations: {},
	actions: {},
	modules: {}
});