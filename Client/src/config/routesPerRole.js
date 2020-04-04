const MEMBER_ROUTES = [
  '/',
  '/accounts',
  '/scheduled',
  '/scheduled/posts',
  '/settings',
  '/settings/profile'
];

const ADMIN_ROUTES = [
  ...MEMBER_ROUTES,
  '/scheduled/unapproved',
  '/scheduled/past',
  '/monitor-activity',
  '/content-finder',
  '/analytics/facebook',
  '/analytics/twitter',
  '/accounts/linkedin',
  '/accounts/pinterest',
  '/settings/manage-account',
  '/settings',
  '/settings/team',
];

const OWNER_ROUTES = [
  ...ADMIN_ROUTES,
  '/settings/billing',
  '/settings/billing/plans'
];

const ROUTES = {
  'member': MEMBER_ROUTES,
  'admin': ADMIN_ROUTES,
  'owner': OWNER_ROUTES
}

export default ROUTES;
