<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  const paypalUsername = 'AxelLab427';
  const donationAmounts = [1, 3, 5, 10];
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

  const currentYear = new Date().getFullYear();
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
          <button class="bmac-button" on:click={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z" />
            </svg>
            <span>Donate</span>
          </button>

          {#if isDropdownOpen}
            <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 200 }}>
              {#each donationAmounts as amount}
                <a
                  href="https://paypal.me/{paypalUsername}/{amount}"
                  target="_blank"
                  rel="noopener noreferrer"
                  on:click={closeDropdown}
                >
                  ${amount}
                </a>
              {/each}
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

  /* --- Buy Me a Coffee Button --- */
  .bmac-container {
    position: relative;
  }
  
  .bmac-button {
    background: transparent;
    border: 2px solid var(--accent-secondary);
    color: var(--accent-secondary);
    border-radius: 20px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    transition: var(--transition-fast);
  }

  .bmac-button:hover {
    background-color: var(--accent-primary);
    border-color: var(--accent-primary);
    color: #000;
    transform: scale(1.05);
    box-shadow: 0 0 15px var(--accent-primary);
  }

  .bmac-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    background-color: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 1001;
  }

  .bmac-dropdown a {
    padding: 0.75rem 1.5rem;
    color: var(--text-primary);
    font-weight: 600;
    text-align: center;
  }

  .bmac-dropdown a:hover {
    background-color: var(--accent-primary);
    color: #000;
    text-decoration: none;
  }

  /* --- Footer --- */
  .main-footer {
    position: fixed;
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

  .footer-links {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
</style>