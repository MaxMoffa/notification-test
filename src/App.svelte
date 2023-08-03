<script>
	import { onMount } from "svelte";

	let swreg = null;
	let permission = false;

	onMount(() => {

		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('service-worker.js').then(function(reg) {

				if(reg.installing) {
					console.log('Service worker installing');
				} else if(reg.waiting) {
					console.log('Service worker installed');
				} else if(reg.active) {
					console.log('Service worker active');
				}

			}).catch(function(error) {
				console.log('Registration failed with ' + error);
			});
		}

		navigator.serviceWorker.ready.then(serviceWorkerRegistration => {
			swreg = serviceWorkerRegistration;
			console.log(swreg);
		});

	});

	function askNotification() {
		if (!("Notification" in window)) {
			alert("This browser does not support desktop notification");
		}
		Notification.requestPermission().then(function (_permission) {
			permission = _permission === "granted";
			if(permission){

				var options = {
					userVisibleOnly: true,
					applicationServerKey: urlBase64ToUint8Array("SERVER-KEY")
				};
				swreg.pushManager.subscribe(options).then(
				function(pushSubscription) {
					console.log(pushSubscription);
				}, function(error) {
					console.log(error);
				}
				);

			}
		});
	}

	function urlBase64ToUint8Array(base64String) {
		var padding = '='.repeat((4 - base64String.length % 4) % 4);
		var base64 = (base64String + padding)
			.replace(/\-/g, '+')
			.replace(/_/g, '/');

		var rawData = window.atob(base64);
		var outputArray = new Uint8Array(rawData.length);

		for (var i = 0; i < rawData.length; ++i) {
			outputArray[i] = rawData.charCodeAt(i);
		}
		return outputArray;
	}

</script>

<main>
	
	<div class="btn-notification" on:click={askNotification}>

		<span>

			Richiedi notifiche

		</span>

	</div>

	<div class="status-permission" {permission}>
		{permission ? "Notifiche abilitate!" : "Notifiche disabilitate!"}
	</div>
	
</main>

<style>

	main {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
	}

	main > .btn-notification {
		width: auto;
		height: auto;
		padding: 6px;
		border-radius: 3px;
		background-color: burlywood;
		cursor: pointer;
		user-select: none;
		transition: 0.3s ease all;
	}

	main > .btn-notification:hover {
		box-shadow: 0 2px 6px grey;
		opacity: 0.6;
	}

	main > .status-permission {
		color: red
	}

	main > .status-permission[permission=true] {
		color: green
	}

</style>