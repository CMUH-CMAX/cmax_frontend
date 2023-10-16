<script>
  	import { page } from '$app/stores';
    import { Home, MagnifyingGlass, User } from 'svelte-heros-v2';

    let menuItems = [
      {
        name: '首頁',
        activate: (u)=>u==='/',
        icon: Home,
      },
      {
        name: '搜尋',
        activate: (u)=>u==='/search',
        icon: MagnifyingGlass,
      },
      {
        name: '我的',
        activate: (u)=>u==='/about',
        icon: User,
      }
    ]
</script>
<style>
  :root {
    --menu-height: 5em;
  }
  #main-navigation {
		border-top: 1px solid #DBD6D1;

		/* border: 1px solid #DBD6D1;
    border-style: solid solid none solid; */
		width: 100%;
		background: var(--white-f);
  }

	.navbar-icon {
		--size: 2rem;

		position: relative;
		left: calc(50% - var(--size)/2);
		width: var(--size);
		height: var(--size);
	}

	a {
		text-decoration: none;
	}

	a.feature-link:hover:not(.activate) > * {
		color: var(--blue-2);
		background: var(--linear-1);

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	a.activate > * {
		color: var(--blue-4);
		background: var(--linear-1);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
<nav id="main-navigation">
  <ul class="pt-2 pb-1 m-0 flex justify-center items-center text-center">
    <li class="relative flex justify-center items-center w-4/12" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
      <a href="/" class="feature-link {$page.url.pathname === '/' ? 'activate' : ''}">
        <div class="navbar-icon">
          <Home variation="solid" size="32" />
        </div>
        <span class="text-xs i18n">首頁</span>
      </a>
    </li>
    <li class="relative flex justify-center items-center text-center w-4/12" aria-current={$page.url.pathname === '/search' ? 'page' : undefined}>
      <a href="/search" class="feature-link {$page.url.pathname === '/search' ? 'activate' : ''}">
        <div class="navbar-icon">
          <MagnifyingGlass variation="solid" size="32" />
        </div>
        <span class="text-xs i18n">搜尋</span>
      </a>
    </li>
    <li class="relative flex justify-center items-center text-center w-4/12" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
      <a href="/about" class="feature-link {$page.url.pathname === '/about' ? 'activate' : ''}">
        <div class="navbar-icon">
          <User variation="outline" size="32" />
        </div>
        <span class="text-xs i18n">我的</span>
      </a>
    </li>
  </ul>
</nav>
