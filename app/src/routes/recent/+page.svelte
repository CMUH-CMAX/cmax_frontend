<script>
	import { Eye } from 'svelte-heros-v2';
	import HeaderNavigator from '$components/gadgets/HeaderNavigator.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let recent_symptoms = [
		{
			body_part: 'head',
			name: '發燒',
			academic: 'pyrexia',
			visit: 3578
		},
		{
			body_part: '',
			name: '紅疹',
			academic: 'rash',
			visit: 1324
		},
		{
			body_part: 'lower_adbomen',
			name: '下腹疼痛',
			academic: 'abdominal-pain',
			visit: 1324
		},
		{
			body_part: 'head',
			name: '頭暈',
			academic: 'vertigo',
			visit: 1324
		},
		{
			body_part: '',
			name: '畏寒',
			academic: 'rigor',
			visit: 1324
		},
		{
			body_part: 'lower_abdomen',
			name: '腹瀉',
			academic: 'diarrhea',
			visit: 1324
		},
		{
			body_part: '',
			name: '皮膚過敏',
			academic: 'allergic-dermatitis',
			visit: 1324
		},
		{
			body_part: 'head',
			name: '流鼻水',
			academic: 'rhinorrhea',
			visit: 1324
		},
		{
			body_part: 'head',
			name: '打噴嚏',
			academic: 'sneeze',
			visit: 1324
		},
		{
			body_part: 'head',
			name: '偏頭痛',
			academic: 'migraine',
			visit: 1324
		},
		{
			body_part: 'head',
			name: '牙齦紅腫',
			academic: 'gingivitis',
			visit: 1324
		},
		{
			body_part: 'head',
			name: '口臭',
			academic: 'halitosis',
			visit: 1324
		}
	];
	function generateSearchParams(symptomData) {
		const redirectTarget = symptomData.body_part == '' ? '' : 'search/body';
		const newParams = new URLSearchParams($page.url.searchParams);
		const { body_part, academic } = symptomData;
		console.log(symptomData);
		newParams.set('body_part', body_part);
		newParams.set('name', academic);
		goto(`${redirectTarget}?${newParams.toString()}`);
	}
</script>

<svelte:head>
	<meta name="theme-color" id="theme-color" content="#1A5B5B" />
</svelte:head>
<main class="relative w-screen flex flex-col min-h-screen">
	<HeaderNavigator mainTitle="近期常見症狀" />

	<div class="p-5">
		{#each recent_symptoms as symptom, i}
			<section
				class="symptoms-card flex col-span rounded px-5 py-3.5 text-sm border shadow"
				data-rank={i + 1}
				on:click={generateSearchParams.bind(null, {
					body_part: symptom.body_part,
					academic: symptom.academic
				})}
			>
				<div class="flex justify-start">
					<span class="pr-1">
						{symptom.name}
					</span>
					<small>{symptom.academic}</small>
				</div>
				<div class="flex justify-end mr-0 ml-auto items-center visit prevent-select">
					<div class="visit-eye">
						<Eye variation="outline" size="14" />
					</div>
					<span>{symptom.visit}</span>
				</div>
			</section>
		{/each}
	</div>

	<div class="last-updated text-center text-xs p-5">
		<span>最後更新時間: {new Date().toISOString().replace(/T|Z/g, ' ')}</span>
	</div>
</main>

<style>
	.headerbar {
		color: var(--gray-1);
		background: var(--blue-5);
		border-bottom: 1px solid #e5e5e5;
	}

	.symptoms-card {
		transition-duration: 0.1s;
		cursor: pointer;
		background-color: var(--white-75p);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.1);
		margin-bottom: 10px;
	}
	.symptoms-card:hover {
		transform: scale(1.05);
		background: var(--white-f);
	}
	.symptoms-card::after {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		/* transform: translateY(-100%); */
		/* transform to top left  */
		transform: translate(-120%, -120%);
		font-size: 9px;
		width: 17px;
		height: 17px;
		content: attr(data-rank);
		border: 1px solid var(--white-f);
		border-radius: 50%;
		background: var(--linear-gold);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.1);
		transition-duration: 0.1s;
	}
	.symptoms-card:active {
		transform: scale(1);
		background: var(--blue-1);
	}
	.symptoms-card:hover::after {
		/* scale */
		transform: translate(-120%, -120%) scale(1.2);
	}
</style>
