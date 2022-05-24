<script>
	import Navbar from '../components/Navbar/index.svelte';
	import Footer from '../components/Footer/index.svelte';
	import '../app.css';
</script>

<div class='container'>
	<Navbar/>
	<main>
		<slot/>
	</main>
	<Footer/>
</div>

<style>
	.container{
		display: flex;
		flex-direction: column;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>