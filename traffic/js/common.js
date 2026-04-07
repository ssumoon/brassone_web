document.addEventListener('DOMContentLoaded', () => {
  const currentUrl = new URL(window.location.href);
  const currentPath = decodeURIComponent(currentUrl.pathname).replace(/\/+$/, '') || '/';
  const currentPage = currentUrl.searchParams.get('page') || '';

  const resolveMenuUrl = (href) => {
    if (!href) return null;

    try {
      return new URL(href, window.location.href);
    } catch (error) {
      return null;
    }
  };

  const normalizePath = (pathname) => {
    return decodeURIComponent(pathname || '').replace(/\/+$/, '') || '/';
  };

  document.querySelectorAll('.gnb > li').forEach((menuItem) => {
    const mainLink = menuItem.querySelector('.main-item');
    const subLinks = menuItem.querySelectorAll('.sub-item a');

    let hasActiveSub = false;

    subLinks.forEach((link) => {
      const linkUrl = resolveMenuUrl(link.getAttribute('href'));
      if (!linkUrl) return;

      const linkPath = normalizePath(linkUrl.pathname);
      const linkPage = link.dataset.menuPage || linkUrl.searchParams.get('page') || '';
      const isSamePath = linkPath === currentPath;
      const isActive = isSamePath && (!linkPage || linkPage === currentPage);

      link.classList.toggle('active', isActive);

      if (isActive) {
        hasActiveSub = true;
      }
    });

    if (mainLink) {
      const menuRoot = mainLink.dataset.menuRoot || '';
      const mainUrl = resolveMenuUrl(mainLink.getAttribute('href'));
      const mainPath = mainUrl ? normalizePath(mainUrl.pathname) : '';
      const isSameMainPath = mainPath === currentPath;
      const shouldActivateMain = hasActiveSub || (menuRoot === 'history' && isSameMainPath) || (menuRoot === 'timeless' && isSameMainPath);

      mainLink.classList.toggle('active', shouldActivateMain);
    }
  });
});