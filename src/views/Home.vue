<template>
	<div class="home">
		<h1>Videos</h1>
		<div class="video-container">
			<div v-for="video in videos" :key="video.name">
				<router-link :to="`video/${video.id}`">
					<div class="video-box">
						<img :src="video.thumbnail" />
						<div>
							<h3>{{video.name}}</h3>
							<div v-html="video.description"></div>
						</div>
					</div>
				</router-link>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "home",
	components: {},
	data() {
		return {
			videos: this.$store.state.videos
		}
	}
}
</script>

<style lang="scss" scoped>
.video-container {
	.video-box {
		border: 1px solid black;
		border-radius: 10px;
		margin: 10px;
		padding: 10px;

		text-align: left;
		display: flex;
		justify-content: flex-start;

		img {
			max-height: 150px;
			padding: 10px;
		}
	}
}
</style>