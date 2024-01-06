<script>
	import {Eye} from 'svelte-heros-v2';

	let symptomsRank = [
		{
			name: '發燒',
			academic: 'pyrexia',
			view: 3578,
		},
		{
			name: '紅疹',
			academic: 'rash',
			view: 1324
		}
	];
</script>
<style>
  .symptoms-card {
		cursor: pointer;
		background: var(--white-75p);
		transition-duration: 0.1s;
	}
	.symptoms-card:hover {
		background: var(--white-f);
	}
	.symptoms-card:first-child{
		margin-right: 5px;
	}
	.symptoms-card:last-child{
		margin-left: 5px;
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
		width:17px;
		height:17px;
		content: attr(data-rank);
		border: 1px solid var(--white-f);
		border-radius: 50%;
		background: var(--linear-gold);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.1);
		transition-duration: 0.1s;
	}
	.symptoms-card:hover::after {
		/* scale */
		transform: translate(-120%, -120%) scale(1.2);
	}
	.visit > .visit-eye {
		margin-right: 8px;
	}
</style>
<div class="grid grid-cols-2">

  <div class="symptoms-card flex col-span rounded px-5 py-3.5 text-sm" data-rank="1">
    <div class="flex justify-start">
      {symptomsRank[0]['name']}
    </div>
    <div class="flex justify-end mr-0 ml-auto items-center visit">
      <div class="visit-eye">
        <Eye variation="outline" size="14"/>
      </div>
      <span>{symptomsRank[0]['view']}</span>
    </div>
  </div>

  <div class="symptoms-card flex col-span rounded px-5 py-3.5 text-sm" data-rank="2">
    <div class="flex justify-start">
      {symptomsRank[1]['name']}
    </div>
    <div class="flex justify-end mr-0 ml-auto items-center visit">
      <div class="visit-eye">
        <Eye variation="outline" size="14"/>
      </div>
      <span>{symptomsRank[1]['view']}</span>
    </div>
  </div>

</div>
