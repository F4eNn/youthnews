type NavItem = {
   path: string;
   label: string;
};

export const navigation = {
   home: {
      label: 'Home',
      path: '/',
   },
   team: {
      label: 'Zespół',
      path: '/zespol',
   },
   events: {
      label: 'Wydarzenia',
      path: '/wydarzenia',
   },
   projects: {
      label: 'Nasze projekty',
      path: '/projekty',
   },
   cooperation: {
      label: 'Współpraca',
      path: '/wspolpraca',
   },
   filmSchool: {
      label: 'Szkoła filmowa',
      path: '/szkola-filmowa',
   },
   developmentGroups: {
      label: 'Grupy rozwojowe',
      path: '/grupy-rozwojowe',
   },
   aboutPlatform: {
      label: 'O platformie',
      path: '/o-platformie',
   },
   partners: {
      label: 'Partnerzy',
      path: '/partnerzy',
   },
   gallery: {
      label: 'Galeria',
      path: '/galeria',
   },
   contact: {
      label: 'Kontakt',
      path: '/kontakt',
   },
   articles: {
      label: 'Starsze artykuły',
      path: '/artykuly',
   },
} as const satisfies Record<PropertyKey, NavItem>;

const numberOfVisibleItems = 4;

export const getNavItems = (amount: number = 4) => {
   const navItems = Object.values(navigation).filter((_, idx) => idx <= amount && idx > 0);
   return navItems;
};

export const dropdownItems = Object.values(navigation).filter((_, idx) => idx > numberOfVisibleItems);
