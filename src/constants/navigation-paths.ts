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
      label: 'Starsze Artykuły',
      path: '/artykuly',
   },
} as const satisfies Record<PropertyKey, NavItem>;

export const navItems = Object.values(navigation).filter((_, idx) => idx <= 4 && idx > 0);

export const dropdownItems = Object.values(navigation).filter((_, idx) => idx > 4);
