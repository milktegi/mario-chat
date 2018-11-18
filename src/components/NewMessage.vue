<template>
	
	<div class="new-message">
		<form @submit.prevent="addMessage">
			<label for="new-message">새로운 메시지 (enter to add):</label>
			<input type="text" name="new-message" v-model="newMessage">
			<p class="red-text" v-if="feedback">{{ feedback }}</p>
		</form>
	</div>

</template>

<script>

export default {
	name: 'NewMessage',
	props: ['name'],
	data() {
		return {
			newMessage: null,
			feedback: null
		}
	},
	methods: {
		addMessage() {
			console.log(this.newMessage, this.name, Date.now())
		}
	}
}
</script>

<style>

</style>
