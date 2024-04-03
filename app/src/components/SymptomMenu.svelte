<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	export type SymptomData = {
		part: string;
		symptom: string;
	};
	let selected_symptoms = writable<SymptomData[]>([]);
</script>

<script>
	import SymptomBlock from '$components/gadgets/SymptomBlock.svelte';
	import { focus_body } from '$components/HumanBeing.svelte';
	import { twMerge } from '$lib/helper';
	import { ChevronLeft } from 'svelte-heros-v2';
	import { setContext } from 'svelte';
	import Overlay from './Overlay.svelte';

	setContext('selected_symptoms', selected_symptoms);
	let symptomsList = {
		head: [
			'頭暈',
			'頭痛',
			'幻覺 (幻視、幻聽、幻觸等)',
			'情緒低落/憂鬱',
			'失眠',
			'嗜睡',
			'記憶衰退/認知障礙',
			'注意力不集中',
			'自殘行為或傾向 (含自殺)',
			'焦慮',
			'莫名恐慌',
			'無法控制的食慾變化（厭食、暴食）',
			'躁動易怒',
			'言語混亂',
			'掉髮',
			'眩暈',
			'喉嚨痛',
			'喉嚨異物感',
			'吞嚥困難',
			'發音障礙(沙啞、無法出聲、小聲、構音障礙)',
			'痰多',
			'頸部腫塊',
			'噁心/嘔吐',
			'耳痛',
			'聽力下降',
			'耳鳴',
			'耳聾/聽力損傷',
			'鼻血',
			'鼻塞',
			'鼻涕倒流',
			'嗅覺下降',
			'鼻痛',
			'異味感',
			'鼻乾',
			'打鼾',
			'吞嚥困難',
			'痰多',
			'生長發育遲緩',
			'痘痘',
			'皮膚搔癢',
			'皮膚紅腫',
			'皮膚痛',
			'皮膚麻木',
			'水泡 / 囊泡',
			'發疹',
			'白斑',
			'化膿',
			'脫屑'
		],
		chest: [
			'胸悶',
			'胸痛',
			'易喘(依NYHA分級)',
			'心絞痛',
			'心悸',
			'豐胸',
			'乳汁分泌問題',
			'乳房脹痛'
		],
		left_arm: [
			'感覺異常',
			'肢體麻痺/無力',
			'擦傷',
			'挫傷',
			'扭拉傷',
			'痠、痛',
			'痠軟無力',
			'僵硬',
			'撕裂痛',
			'活動度受限',
			'活動時疼痛'
		],
		right_arm: [
			'感覺異常',
			'肢體麻痺/無力',
			'擦傷',
			'挫傷',
			'扭拉傷',
			'痠、痛',
			'痠軟無力',
			'僵硬',
			'撕裂痛',
			'活動度受限',
			'活動時疼痛'
		],
		stomach: [
			'噁心/嘔吐',
			'胃口改變(食慾變大或變小)',
			'噯腐吞酸/泛酸',
			'打嗝',
			'消化不良',
			'脹氣',
			'腹痛',
			'胃灼熱感'
		],
		symphysis: [
			'大小便失禁',
			'頻尿、尿急',
			'遺尿、尿不乾淨感',
			'漏尿、尿失禁',
			'夜尿',
			'解尿疼痛、排尿灼熱',
			'排尿困難、尿瀦留',
			'茶色尿',
			'血尿',
			'泡沫尿',
			'會陰部疼痛、睪丸、陰莖疼痛',
			'睪丸、陰莖紅腫/有滲出物',
			'陰莖、睪丸長出丘疹、不明突起、潰爛等',
			'生殖器官、陰部腫痛or濕疹',
			'陽痿、勃起/射精功能問題',
			'不孕',
			'性交疼痛',
			'壯陽',
			'月經異常',
			'經痛',
			'白帶異常',
			'便祕',
			'解便疼痛',
			'肛門紅腫/癢/痛',
			'血便/黑便/脂肪便',
			'養胎/懷孕階段調理'
		],
		left_leg: [
			'感覺異常',
			'肢體麻痺/無力',
			'擦傷',
			'挫傷',
			'扭拉傷',
			'痠、痛',
			'痠軟無力',
			'僵硬',
			'撕裂痛',
			'活動度受限',
			'活動時疼痛',
			'痘痘',
			'皮膚搔癢',
			'皮膚紅腫',
			'皮膚痛',
			'皮膚麻木',
			'水泡 / 囊泡',
			'發疹',
			'白斑',
			'化膿',
			'脫屑'
		],
		right_leg: [
			'感覺異常',
			'肢體麻痺/無力',
			'擦傷',
			'挫傷',
			'扭拉傷',
			'痠、痛',
			'痠軟無力',
			'僵硬',
			'撕裂痛',
			'活動度受限',
			'活動時疼痛',
			'痘痘',
			'皮膚搔癢',
			'皮膚紅腫',
			'皮膚痛',
			'皮膚麻木',
			'水泡 / 囊泡',
			'發疹',
			'白斑',
			'化膿',
			'脫屑'
		],
		left_knee: [
			'感覺異常',
			'肢體麻痺/無力',
			'擦傷',
			'挫傷',
			'扭拉傷',
			'痠、痛',
			'痠軟無力',
			'僵硬',
			'撕裂痛',
			'活動度受限',
			'活動時疼痛',
			'痘痘',
			'皮膚搔癢',
			'皮膚紅腫',
			'皮膚痛',
			'皮膚麻木',
			'水泡 / 囊泡',
			'發疹',
			'白斑',
			'化膿',
			'脫屑'
		],
		right_knee: [
			'感覺異常',
			'肢體麻痺/無力',
			'擦傷',
			'挫傷',
			'扭拉傷',
			'痠、痛',
			'痠軟無力',
			'僵硬',
			'撕裂痛',
			'活動度受限',
			'活動時疼痛',
			'痘痘',
			'皮膚搔癢',
			'皮膚紅腫',
			'皮膚痛',
			'皮膚麻木',
			'水泡 / 囊泡',
			'發疹',
			'白斑',
			'化膿',
			'脫屑'
		],
		left_calves: [
			'感覺異常',
			'肢體麻痺/無力',
			'擦傷',
			'挫傷',
			'扭拉傷',
			'痠、痛',
			'痠軟無力',
			'僵硬',
			'撕裂痛',
			'活動度受限',
			'活動時疼痛',
			'痘痘',
			'皮膚搔癢',
			'皮膚紅腫',
			'皮膚痛',
			'皮膚麻木',
			'水泡 / 囊泡',
			'發疹',
			'白斑',
			'化膿',
			'脫屑'
		],
		right_calves: [
			'感覺異常',
			'肢體麻痺/無力',
			'擦傷',
			'挫傷',
			'扭拉傷',
			'痠、痛',
			'痠軟無力',
			'僵硬',
			'撕裂痛',
			'活動度受限',
			'活動時疼痛',
			'痘痘',
			'皮膚搔癢',
			'皮膚紅腫',
			'皮膚痛',
			'皮膚麻木',
			'水泡 / 囊泡',
			'發疹',
			'白斑',
			'化膿',
			'脫屑'
		],
		left_foot: [
			'感覺異常',
			'肢體麻痺/無力',
			'擦傷',
			'挫傷',
			'扭拉傷',
			'痠、痛',
			'痠軟無力',
			'僵硬',
			'撕裂痛',
			'活動度受限',
			'活動時疼痛'
		],
		right_foot: [
			'感覺異常',
			'肢體麻痺/無力',
			'擦傷',
			'挫傷',
			'扭拉傷',
			'痠、痛',
			'痠軟無力',
			'僵硬',
			'撕裂痛',
			'活動度受限',
			'活動時疼痛'
		]
	};

	function cancelSelection() {
		selected_body_part = undefined;
		focus_body(undefined);
		clearSelected();
	}
	function whitespaceCancel() {
		if (selected_body_part === undefined) {
			cancelSelection();
		}
	}

	export function clearSelected() {
		selected_symptoms.set([]);
	}
	export let selected_body_part;
	export let menu_hide = true;
	export let symptoms_selected_pass = false;
	let selected_symptoms_count;

	$: menu_hide = selected_body_part === undefined;
	$: selected_symptoms_count = $selected_symptoms.length;
	$: symptoms_selected_pass = $selected_symptoms.length > 0;
</script>

<Overlay showOverlay={!menu_hide} handleOverlayClick={cancelSelection} />
<div
	class={twMerge('fixed bg-white-f w-full bottom-0 border-t', {
		'display-none': menu_hide
	})}
>
	<div
		class={twMerge('bg-white-f rounded-t-lg border-t-2 border-main-lighter', {
			'mt-0 animate-slideDown fill-mode-forwards': menu_hide,
			'mt-[-300px] opacity-100 relative animate-slideUp': !menu_hide
		})}
	>
		<div class="py-[10px] bg-main-lightest px-5 flex items-center">
			<ChevronLeft on:click={cancelSelection} class="mx-2 outline-none" />
			<span>選擇最符合的症狀</span>
		</div>
		{#if selected_body_part !== undefined}
			<div class="overflow-scroll h-[260px] z-0 flex flex-col">
				{#each symptomsList[selected_body_part] as symptom}
					<SymptomBlock {symptom} {selected_body_part} extraStyle="shrink-0" />
				{/each}
			</div>
		{/if}
		<div class="next-process p-5 border-t">
			<div class="grid grid-cols-2 mb-4">
				<div class="symptoms-selection text-blue-4">
					已選症狀：{selected_symptoms_count}
				</div>
				<button class="text-right text-xs" on:click={clearSelected}>清空症狀</button>
			</div>
			{#if symptoms_selected_pass}
				<a href="/search/result">
					<div
						class={twMerge('bg-neutral-300 text-white text-center p-2 rounded-lg', {
							'bg-gradient-to-r from-main-lighter to-main-light': symptoms_selected_pass
						})}
					>
						下一步
					</div>
				</a>
			{/if}
			{#if !symptoms_selected_pass}
				<div
					class={twMerge('bg-neutral-300 text-white text-center p-2 rounded-lg', {
						'bg-gradient-to-r from-main-lighter to-main-light': symptoms_selected_pass
					})}
				>
					下一步
				</div>
			{/if}
		</div>
	</div>
</div>
