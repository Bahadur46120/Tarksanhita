import { Routes } from '@angular/router';
import { DebateAdminDashboard } from './debate-admin-dashboard.component';

/**
 * Debate Admin Routes
 * Nested routes for debate administration panel
 * All routes require Admin role (enforced by parent guard)
 */
export const debateAdminRoutes: Routes = [
  {
    path: '',
    component: DebateAdminDashboard,
    title: 'Dashboard — Debate Admin'
  },

  // ===================== Debate Management =====================
  {
    path: 'debates',
    title: 'Debates — Debate Admin',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/debate-list/debate-list.component').then(m => m.DebateListComponent),
        title: 'All Debates — Debate Admin'
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./components/debate-form/debate-form.component').then(m => m.DebateFormComponent),
        title: 'Create Debate — Debate Admin'
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./components/debate-detail/debate-detail.component').then(m => m.DebateDetailComponent),
        title: 'Debate Details — Debate Admin'
      },
      {
        path: ':id/edit',
        loadComponent: () =>
          import('./components/debate-form/debate-form.component').then(m => m.DebateFormComponent),
        title: 'Edit Debate — Debate Admin'
      },
      {
        path: ':id/scoring',
        loadComponent: () =>
          import('./components/debate-scoring/debate-scoring.component').then(m => m.DebateScoringComponent),
        title: 'Score Debate — Debate Admin'
      },
      {
        path: ':id/results',
        loadComponent: () =>
          import('./components/debate-results/debate-results.component').then(m => m.DebateResultsComponent),
        title: 'Debate Results — Debate Admin'
      }
    ]
  },

  // ===================== Student Management =====================
  {
    path: 'students',
    loadComponent: () =>
      import('./components/student-list/student-list.component').then(m => m.StudentListComponent),
    title: 'Student Registry — Debate Admin'
  },
  {
    path: 'students/:id',
    loadComponent: () =>
      import('./components/student-detail/student-detail.component').then(m => m.StudentDetailComponent),
    title: 'Student Details — Debate Admin'
  },

  // ===================== Topic Management =====================
  {
    path: 'topics',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/topic-list/topic-list.component').then(m => m.TopicListComponent),
        title: 'Topics — Debate Admin'
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./components/topic-form/topic-form.component').then(m => m.TopicFormComponent),
        title: 'Create Topic — Debate Admin'
      },
      {
        path: ':id/edit',
        loadComponent: () =>
          import('./components/topic-form/topic-form.component').then(m => m.TopicFormComponent),
        title: 'Edit Topic — Debate Admin'
      }
    ]
  },

  // ===================== Judge Management =====================
  {
    path: 'judges',
    loadComponent: () =>
      import('./components/judge-list/judge-list.component').then(m => m.JudgeListComponent),
    title: 'Judge Management — Debate Admin'
  },

  // ===================== Participant Management =====================
  {
    path: 'approvals',
    loadComponent: () =>
      import('./components/participant-approval/participant-approval.component').then(m => m.ParticipantApprovalComponent),
    title: 'Participant Approvals — Debate Admin'
  },
  {
    path: 'participants/:id',
    loadComponent: () =>
      import('./components/participant-detail/participant-detail.component').then(m => m.ParticipantDetailComponent),
    title: 'Participant Details — Debate Admin'
  },

  // ===================== Category Management =====================
  {
    path: 'categories',
    loadComponent: () =>
      import('./components/category-list/category-list.component').then(m => m.CategoryListComponent),
    title: 'Categories — Debate Admin'
  },

  // ===================== Reports & Analytics =====================
  {
    path: 'reports',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/reports/reports-main.component').then(m => m.ReportsMainComponent),
        title: 'Reports — Debate Admin'
      },
      {
        path: 'students',
        loadComponent: () =>
          import('./components/reports/student-report/student-report.component').then(m => m.StudentReportComponent),
        title: 'Student Report — Debate Admin'
      },
      {
        path: 'debates',
        loadComponent: () =>
          import('./components/reports/debate-report/debate-report.component').then(m => m.DebateReportComponent),
        title: 'Debate Report — Debate Admin'
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('./components/reports/analytics/analytics.component').then(m => m.AnalyticsComponent),
        title: 'Analytics — Debate Admin'
      }
    ]
  },

  // ===================== Settings & Management =====================
  {
    path: 'settings',
    children: [
      {
        path: 'users',
        loadComponent: () =>
          import('./components/settings/user-management/user-management.component').then(m => m.UserManagementComponent),
        title: 'User Management — Debate Admin'
      },
      {
        path: 'system',
        loadComponent: () =>
          import('./components/settings/system-settings/system-settings.component').then(m => m.SystemSettingsComponent),
        title: 'System Settings — Debate Admin'
      }
    ]
  }
];
