import { Routes } from '@angular/router';
import { DebateAdminDashboard } from './debate-admin-dashboard.component';
import { DebateListComponent } from './components/debate-list/debate-list.component';
import { DebateFormComponent } from './components/debate-form/debate-form.component';
import { DebateDetailComponent } from './components/debate-detail/debate-detail.component';
import { DebateScoringComponent } from './components/debate-scoring/debate-scoring.component';
import { DebateResultsComponent } from './components/debate-results/debate-results.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicFormComponent } from './components/topic-form/topic-form.component';
import { JudgeListComponent } from './components/judge-list/judge-list.component';
import { ParticipantApprovalComponent } from './components/participant-approval/participant-approval.component';
import { ParticipantDetailComponent } from './components/participant-detail/participant-detail.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ReportsMainComponent } from './components/reports/reports-main.component';
import { StudentReportComponent } from './components/reports/student-report/student-report.component';
import { DebateReportComponent } from './components/reports/debate-report/debate-report.component';
import { DebateAnalyticsComponent } from './components/debate-analytics/debate-analytics.component';
import { UserManagementComponent } from './components/settings/user-management/user-management.component';
import { SystemSettingsComponent } from './components/settings/system-settings/system-settings.component';

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
        component: DebateListComponent,
        title: 'All Debates — Debate Admin'
      },
      {
        path: 'create',
        component: DebateFormComponent,
        title: 'Create Debate — Debate Admin'
      },
      {
        path: ':id',
        component: DebateDetailComponent,
        title: 'Debate Details — Debate Admin'
      },
      {
        path: ':id/edit',
        component: DebateFormComponent,
        title: 'Edit Debate — Debate Admin'
      },
      {
        path: ':id/scoring',
        component: DebateScoringComponent,
        title: 'Score Debate — Debate Admin'
      },
      {
        path: ':id/results',
        component: DebateResultsComponent,
        title: 'Debate Results — Debate Admin'
      }
    ]
  },

  // ===================== Student Management =====================
  {
    path: 'students',
    component: StudentListComponent,
    title: 'Student Registry — Debate Admin'
  },
  {
    path: 'students/:id',
    component: StudentDetailComponent,
    title: 'Student Details — Debate Admin'
  },

  // ===================== Topic Management =====================
  {
    path: 'topics',
    children: [
      {
        path: '',
        component: TopicListComponent,
        title: 'Topics — Debate Admin'
      },
      {
        path: 'new',
        component: TopicFormComponent,
        title: 'Create Topic — Debate Admin'
      },
      {
        path: ':id/edit',
        component: TopicFormComponent,
        title: 'Edit Topic — Debate Admin'
      }
    ]
  },

  // ===================== Judge Management =====================
  {
    path: 'judges',
    component: JudgeListComponent,
    title: 'Judge Management — Debate Admin'
  },

  // ===================== Participant Management =====================
  {
    path: 'approvals',
    component: ParticipantApprovalComponent,
    title: 'Participant Approvals — Debate Admin'
  },
  {
    path: 'participants/:id',
    component: ParticipantDetailComponent,
    title: 'Participant Details — Debate Admin'
  },

  // ===================== Category Management =====================
  {
    path: 'categories',
    component: CategoryListComponent,
    title: 'Categories — Debate Admin'
  },

  // ===================== Reports & Analytics =====================
  {
    path: 'reports',
    children: [
      {
        path: '',
        component: ReportsMainComponent,
        title: 'Reports — Debate Admin'
      },
      {
        path: 'students',
        component: StudentReportComponent,
        title: 'Student Report — Debate Admin'
      },
      {
        path: 'debates',
        component: DebateReportComponent,
        title: 'Debate Report — Debate Admin'
      },
      {
        path: 'analytics',
        component: DebateAnalyticsComponent,
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
        component: UserManagementComponent,
        title: 'User Management — Debate Admin'
      },
      {
        path: 'system',
        component: SystemSettingsComponent,
        title: 'System Settings — Debate Admin'
      }
    ]
  }
];
