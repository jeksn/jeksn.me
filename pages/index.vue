<script setup lang="ts">
definePageMeta({
  title: 'jeksn.me',
  layout: 'page'
})
</script>
<template>
    <NuxtLayout>
		<PageContent>
			<div class="flex flex-col items-center justify-start mt-[25vh] px-4">
				<div class="flex flex-col items-start justify-center gap-6">
					<!-- <div class="flex items-start justify-center">
						<NuxtImg src="/blue.png" class="transition-all duration-200 rounded-full size-24 hover:scale-110" />
					</div> -->
					<div class="flex flex-col text-lg gap-y-1 md:text-2xl">
						<h1 class="my-3 text-4xl italic font-light">jeksn.me</h1>
						<p>
							Design-minded developer in Stockholm.
						</p>
						<p>
							Currently working at <a href="https://wtmg.se" class="underline transition-all underline-offset-4 hover:underline-offset-8">WTMG.</a>
						</p>
						<p>
							This is my small home on the web.
						</p>
					</div>
					<div class="mt-8">
						<h2 class="text-lg md:text-xl">Where to find me:</h2>
						<ul class="mt-1 space-y-1 text-base">
							<li>
								<a
								href="https://github.com/jeksn"
								target="_blank"
								rel="noreferrer"
								class="underline transition-all underline-offset-2 hover:underline-offset-4">
								Github
								</a>
							</li>
							<li>
								<a
								href="https://www.linkedin.com/in/jeksn/"
								target="_blank"
								rel="noreferrer"
								class="underline transition-all underline-offset-2 hover:underline-offset-4">
								LinkedIn
								</a>
							</li>
							<li>
								<a
								href="https://read.cv/jeksn"
								target="_blank"
								rel="noreferrer"
								class="underline transition-all underline-offset-2 hover:underline-offset-4">
								Read.cv
								</a>
							</li>
							<li>
								<a
								href="mailto:johan@jeksn.me"
								target="_blank"
								rel="noreferrer"
								class="underline transition-all underline-offset-2 hover:underline-offset-4">
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
