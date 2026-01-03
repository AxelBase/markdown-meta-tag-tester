<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  const currentYear = new Date().getFullYear();

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Fira+Code&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
</svelte:head>

<div class="site-wrapper">
  <header class="main-header">
    <nav class="container">
      <div class="nav-left">
        <a href="{base}/" class="brand-logo" aria-label="Home">
          <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" />
        </a>
        <a href="{base}/" class="brand-name">AxelBase</a>
       
        <div class="bmac-container" use:clickOutside on:click_outside={closeDropdown}>
          <button class="bmac-button" on:click={toggleDropdown} aria-label="Support options">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
            </svg>
            <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
            <span class="d-sm-none fw-semibold">Coffee</span>
          </button>

          {#if isDropdownOpen}
            <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                <span class="amount">$3</span> One Coffee
              </a>
              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                <span class="amount">$5</span> Two Coffees
              </a>
              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                <span class="amount">$10</span> Three Coffees
              </a>

              <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
                Custom Amount
              </a>

              <a
                href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                on:click={closeDropdown}
                class="custom-amount"
              >
                Buy via Crypto (Bitcoin)
              </a>
            </div>
          {/if}
        </div>
      </div>
     
      <ul class="nav-right">
        <li><a class="nav-link" href="{base}/">Home</a></li>
        <li><a class="nav-link" href="{base}/#about">About</a></li>
        <li><a class="nav-link" href="{base}/#how-to-use">How to Use</a></li>
        <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
        <li><a class="nav-link" href="{base}/blog">Blog</a></li>
      </ul>
    </nav>
  </header>

  <main class="main-content">
    <slot />
  </main>

  <footer class="main-footer">
    <div class="container">
      <p>&copy; {currentYear} AxelBase Markdown Meta Tag Tester</p>
      <div class="footer-links">
        <a href="{base}/privacy">Privacy Policy</a>
        <span>|</span>
        <a href="{base}/terms">Terms & Conditions</a>
      </div>
    </div>
  </footer>
</div>

<style>
  .site-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    flex: 1;
    padding-top: 80px; /* Space for fixed header */
    padding-bottom: 80px; /* Space for fixed footer */
  }

  /* --- Header / Navbar --- */
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(18, 18, 18, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid var(--border-color);
    box-shadow: var(--shadow-md);
  }

  .main-header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }

  .nav-left, .nav-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-right {
    list-style: none;
  }

  .brand-logo img {
    height: 40px;
    width: 40px;
    transition: transform 0.3s ease;
  }

  .brand-logo:hover img {
    transform: rotate(360deg);
  }

  .brand-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
  }

  .nav-link {
    font-weight: 600;
    font-size: 1rem;
    color: var(--text-secondary);
    text-decoration: none;
    position: relative;
    padding: 0.5rem 0;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-primary);
    transition: width 0.3s ease;
  }

  .nav-link:hover {
    color: var(--text-primary);
    text-decoration: none;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* --- Buy Me a Coffee Button (adapted from File 1) --- */
  .bmac-container {
    position: relative;
  }

  .bmac-button {
    background: var(--accent-primary);
    color: #000;
    font-size: 0.95rem;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .bmac-button:hover {
    background: var(--accent-hover);
    transform: translateY(-1px) scale(1.05);
    box-shadow: 0 0 15px var(--accent-primary);
  }

  .bmac-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: var(--secondary-bg);
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(255, 140, 0, 0.25);
    overflow: hidden;
    border: 1px solid rgba(255, 140, 0, 0.2);
    z-index: 1001;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--text-primary);
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--accent-primary);
    color: #000;
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--accent-secondary);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--accent-secondary);
    border-top: 1px solid var(--border-color);
    justify-content: center !important;
  }

  /* --- Footer --- */
  .main-footer {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--secondary-bg);
    border-top: 2px solid var(--border-color);
    padding: 1rem 0;
    z-index: 999;
  }

  .main-footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

</style>