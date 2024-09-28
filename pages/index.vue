<script setup lang="ts">
definePageMeta({
  title: 'jeksn.me',
  layout: 'page'
})
</script>
<template>
    <NuxtLayout>
		<PageContent>
			<div class="flex flex-col items-center justify-start mt-[20vh] px-4">
				<div>
					<div class="flex flex-col items-start justify-center gap-6 md:flex-row">
						<div class="flex items-start justify-center">
							<NuxtImg src="/blue.png" class="transition-all duration-200 rounded-full size-24 hover:scale-110" />
						</div>
						<div class="flex flex-col">

							<p class="text-base md:text-2xl">
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
						   <h2 class="text-lg md:text-xl">Where to find me:</h2>
						   <ul class="mt-1 space-y-1 text-base">
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
				</div>
			 </div>
		</PageContent>
	</NuxtLayout>
</template>
