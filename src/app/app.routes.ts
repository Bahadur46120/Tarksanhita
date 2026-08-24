import { Routes } from '@angular/router';
import { adminGuard, authGuard, guestGuard, roleGuard } from './core/guards/guards';
import { debateAdminGuard } from './core/guards/debate-admin.guard';
import { debateAdminRoutes } from './pages/admin-debate/debate-admin.routes';

/**
 * Public pages are rendered inside the institutional shell (utility bar, masthead,
 * navigation, footer). The admin panel uses its own shell and is guarded.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/public-layout').then(m => m.PublicLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.HomePage),
        title: 'Tarksanhita Debate Forum — Express, Challenge, Persuade, Enlighten'
      },

      // Institution
      {
        path: 'institution',
        loadComponent: () => import('./pages/institution/institution').then(m => m.InstitutionPage),
        title: 'The Institution — Tarksanhita'
      },

      // About
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.AboutPage),
        title: 'About Us — Tarksanhita'
      },

      // Academics
      {
        path: 'academics',
        loadComponent: () => import('./pages/academics/academics').then(m => m.AcademicsPage),
        title: 'What the Centre Runs — Tarksanhita'
      },
      {
        path: 'academics/:slug',
        loadComponent: () => import('./pages/shared-pages/content-detail').then(m => m.ContentDetailPage),
        data: { resource: 'topics', kind: 'topic', section: 'Academics', parent: '/academics' }
      },

      // Debates
      {
        path: 'debates',
        loadComponent: () => import('./pages/debates/debates').then(m => m.DebatesPage),
        title: 'Debate & Logic — Tarksanhita'
      },
      {
        path: 'debates/start',
        loadComponent: () => import('./pages/debates/start-debate').then(m => m.StartDebatePage),
        canActivate: [authGuard],
        title: 'Start a Debate — Tarksanhita'
      },
      {
        path: 'debates/:slug',
        loadComponent: () => import('./pages/debates/debate-detail').then(m => m.DebateDetailPage),
        title: 'Debate — Tarksanhita'
      },

      // Research & publications
      {
        path: 'research',
        loadComponent: () => import('./pages/research/research').then(m => m.ResearchPage),
        title: 'Research & Publications — Tarksanhita'
      },
      {
        path: 'publications',
        loadComponent: () => import('./pages/shared-pages/content-list').then(m => m.ContentListPage),
        data: {
          resource: 'research',
          kind: 'research',
          title: 'Publications',
          lede: 'Journals, monographs and occasional papers published by the Centre.'
        },
        title: 'Publications — Tarksanhita'
      },
      {
        path: 'case-studies',
        loadComponent: () => import('./pages/shared-pages/content-list').then(m => m.ContentListPage),
        data: {
          resource: 'research',
          kind: 'research',
          fixedCategory: 'CaseStudy',
          title: 'Case Studies',
          lede: 'Structured notes on landmark judgments, with argument maps and analysis of dissents.'
        },
        title: 'Case Studies — Tarksanhita'
      },
      {
        path: 'research/:slug',
        loadComponent: () => import('./pages/shared-pages/content-detail').then(m => m.ContentDetailPage),
        data: { resource: 'research', kind: 'research', section: 'Research', parent: '/research' }
      },

      // Legal topics
      {
        path: 'legal-topics',
        loadComponent: () => import('./pages/shared-pages/content-list').then(m => m.ContentListPage),
        data: {
          resource: 'topics',
          kind: 'topic',
          title: 'Legal Topics',
          lede: 'Subject clusters across constitutional, criminal, civil, corporate, technology and human rights law.'
        },
        title: 'Legal Topics — Tarksanhita'
      },
      {
        path: 'legal-topics/:slug',
        loadComponent: () => import('./pages/shared-pages/content-detail').then(m => m.ContentDetailPage),
        data: { resource: 'topics', kind: 'topic', section: 'Legal Topics', parent: '/legal-topics' }
      },

      // Library
      {
        path: 'library',
        loadComponent: () => import('./pages/library/library').then(m => m.LibraryPage),
        title: 'Digital Library — Tarksanhita'
      },

      // Events
      {
        path: 'events',
        loadComponent: () => import('./pages/shared-pages/content-list').then(m => m.ContentListPage),
        data: {
          resource: 'events',
          kind: 'event',
          title: 'Events',
          lede: 'Conferences, seminars, guest lectures, competitions and observances.'
        },
        title: 'Events — Tarksanhita'
      },
      {
        path: 'events/:slug',
        loadComponent: () => import('./pages/shared-pages/content-detail').then(m => m.ContentDetailPage),
        data: { resource: 'events', kind: 'event', section: 'Events', parent: '/events' }
      },

      // Notices & news
      {
        path: 'notices',
        loadComponent: () => import('./pages/shared-pages/content-list').then(m => m.ContentListPage),
        data: {
          resource: 'notices',
          kind: 'notice',
          title: 'Notice Board',
          lede: 'Official notifications, circulars and announcements issued by the Centre.'
        },
        title: 'Notice Board — Tarksanhita'
      },
      {
        path: 'notices/:slug',
        loadComponent: () => import('./pages/shared-pages/content-detail').then(m => m.ContentDetailPage),
        data: { resource: 'notices', kind: 'notice', section: 'Notices', parent: '/notices' }
      },
      {
        path: 'news',
        loadComponent: () => import('./pages/shared-pages/content-list').then(m => m.ContentListPage),
        data: { resource: 'news', kind: 'news', title: 'Latest News', lede: 'News and announcements from across the Centre.' },
        title: 'News — Tarksanhita'
      },
      {
        path: 'news/:slug',
        loadComponent: () => import('./pages/shared-pages/content-detail').then(m => m.ContentDetailPage),
        data: { resource: 'news', kind: 'news', section: 'News', parent: '/news' }
      },
      {
        path: 'articles',
        loadComponent: () => import('./pages/shared-pages/content-list').then(m => m.ContentListPage),
        data: { resource: 'articles', kind: 'article', title: 'Articles & Commentary', lede: 'Short-form commentary on legislation, judgments and legal method.' },
        title: 'Articles — Tarksanhita'
      },
      {
        path: 'articles/:slug',
        loadComponent: () => import('./pages/shared-pages/content-detail').then(m => m.ContentDetailPage),
        data: { resource: 'articles', kind: 'article', section: 'Articles', parent: '/articles' }
      },

      // People
      {
        path: 'faculty',
        loadComponent: () => import('./pages/shared-pages/content-list').then(m => m.ContentListPage),
        data: { resource: 'profiles', kind: 'profile', title: 'Faculty Directory', lede: 'Academic staff, fellows and members of the governing council.' },
        title: 'Fellows — Tarksanhita'
      },
      {
        path: 'faculty/:slug',
        loadComponent: () => import('./pages/shared-pages/content-detail').then(m => m.ContentDetailPage),
        data: { resource: 'profiles', kind: 'profile', section: 'Faculty', parent: '/faculty' }
      },

      // Students, alumni, careers
      {
        path: 'students',
        loadComponent: () => import('./pages/students/students').then(m => m.StudentsPage),
        title: 'Member Corner — Tarksanhita'
      },
      {
        path: 'alumni',
        loadComponent: () => import('./pages/shared-pages/static-page').then(m => m.StaticPage),
        data: { pageKey: 'alumni' },
        title: 'Alumni — Tarksanhita'
      },
      {
        path: 'careers',
        loadComponent: () => import('./pages/shared-pages/static-page').then(m => m.StaticPage),
        data: { pageKey: 'careers' },
        title: 'Careers — Tarksanhita'
      },
      {
        path: 'admissions',
        loadComponent: () => import('./pages/shared-pages/static-page').then(m => m.StaticPage),
        data: { pageKey: 'admissions' },
        title: 'Membership — Tarksanhita'
      },

      // Contact & account
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.ContactPage),
        title: 'Contact Us — Tarksanhita'
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/account/profile').then(m => m.ProfilePage),
        canActivate: [authGuard],
        title: 'My Account — Tarksanhita'
      },
      {
        path: 'forbidden',
        loadComponent: () => import('./pages/shared-pages/message-page').then(m => m.MessagePage),
        data: { code: '403', heading: 'Access Denied', body: 'Your account does not carry the role required for this section.' }
      },
      {
        path: 'not-found',
        loadComponent: () => import('./pages/shared-pages/message-page').then(m => m.MessagePage),
        data: { code: '404', heading: 'Page Not Found', body: 'The page you requested does not exist or has been moved.' }
      }
    ]
  },

  // Auth
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login').then(m => m.LoginPage),
    canActivate: [guestGuard],
    title: 'Sign In — Tarksanhita'
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register').then(m => m.RegisterPage),
    canActivate: [guestGuard],
    title: 'Register — Tarksanhita'
  },

  // Admin CMS
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin-layout').then(m => m.AdminLayout),
    canActivate: [adminGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/admin/dashboard').then(m => m.AdminDashboard),
        title: 'Dashboard — Tarksanhita Admin'
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/admin/users').then(m => m.AdminUsers),
        title: 'Users — Tarksanhita Admin'
      },
      {
        path: 'contacts',
        loadComponent: () => import('./pages/admin/contacts').then(m => m.AdminContacts),
        title: 'Enquiries — Tarksanhita Admin'
      },
      {
        path: 'reports/participation',
        loadComponent: () =>
          import('./pages/admin/participation-report').then(m => m.AdminParticipationReport),
        canActivate: [roleGuard],
        data: { roles: ['Admin'] },
        title: 'Member Participation — Tarksanhita Admin'
      },
      {
        path: ':resource/new',
        loadComponent: () => import('./pages/admin/content-form').then(m => m.AdminContentForm)
      },
      {
        path: ':resource/:id/edit',
        loadComponent: () => import('./pages/admin/content-form').then(m => m.AdminContentForm)
      },
      {
        path: ':resource',
        loadComponent: () => import('./pages/admin/content-list').then(m => m.AdminContentList)
      }
    ]
  },

  // Debate Admin Dashboard
  {
    path: 'admin/debates',
    canActivate: [debateAdminGuard],
    children: debateAdminRoutes,
    title: 'Debate Admin — Tarksanhita'
  },

  { path: '**', redirectTo: 'not-found' }
];
