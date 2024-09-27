<script setup lang="ts">
definePageMeta({
  title: 'jeksn.me',
  layout: 'page'
})
</script>
<template>
    <NuxtLayout>
		<PageContent>
			<div class="flex flex-col items-start justify-center utmt-[20vh] px-4">
				<div>
				  <h2 class="mt-4 text-4xl font-semibold md:text-6xl">
					 Front-end
					 <a
						href="https://github.com/jeksn"
						class="underline transition-all underline-offset-4 hover:underline-offset-8"
					 >developer</a>
					 <br>
					  in Stockholm
				  </h2>
				  <p class="mt-6 text-base md:text-2xl">
					 I'm a design-minded developer working at 
					<a
					href="https://wtmg.se"
					class="underline transition-all underline-offset-4 hover:underline-offset-8"
					>WTMG.
					</a>
					<br />
					This is my small home on the web.
					<br />
					Don't hesitate to get in touch.
				  </p>
				  <div class="mt-8">
					 <h2 class="text-lg md:text-2xl">Where to find me:</h2>
					 <ul class="text-base md:text-lg">
						<li>
						  <a
							 href="https://github.com/jeksn"
							 target="_blank"
							 rel="noreferrer"
							 class="underline transition-all underline-offset-2 hover:underline-offset-4"
						  >
							 Github
						  </a>
						</li>
						<li>
						  <a
							 href="https://www.linkedin.com/in/jeksn/"
							 target="_blank"
							 rel="noreferrer"
							 class="underline transition-all underline-offset-2 hover:underline-offset-4"
						  >
							 LinkedIn
						  </a>
						</li>
						<li>
						  <a
							 href="https://read.cv/jeksn"
							 target="_blank"
							 rel="noreferrer"
							 class="underline transition-all underline-offset-2 hover:underline-offset-4"
						  >
							 Read.cv
						  </a>
						</li>
						<li>
						  <a
							 href="mailto:johan@jeksn.me"
							 target="_blank"
							 rel="noreferrer"
							 class="underline transition-all underline-offset-2 hover:underline-offset-4"
						  >
							 E-mail me
						  </a>
						</li>
					 </ul>
				  </div>
				</div>
			 </div>
		</PageContent>
	</NuxtLayout>
</template>
