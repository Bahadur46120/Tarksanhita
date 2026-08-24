/**
 * Debate Admin Models
 * Models for debate management, students, judges, and scoring
 */

// Enums for debate states
export enum DebateStatus {
  DRAFT = 'draft',
  UPCOMING = 'upcoming',
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  ARCHIVED = 'archived'
}

export enum ParticipantStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  WITHDRAWN = 'withdrawn',
  BANNED = 'banned'
}

export enum JudgeRole {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OBSERVER = 'observer'
}

export enum ArgumentType {
  OPENING = 'opening',
  REBUTTAL = 'rebuttal',
  CLOSING = 'closing',
  SUMMARY = 'summary'
}

// Student/User Models
export interface Student {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  phone?: string;
  registrationDate: Date;
  isActive: boolean;
  totalDebates: number;
  winsCount: number;
  losses: number;
  averageScore?: number;
  tier?: 'beginner' | 'intermediate' | 'advanced';
  bio?: string;
  profileImage?: string;
}

// Debate Models
export interface DebateTopic {
  id: string;
  title: string;
  description: string;
  category: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface Debate {
  id: string;
  topicId: string;
  topic?: DebateTopic;
  title: string;
  description: string;
  status: DebateStatus;
  category: string;
  startDate: Date;
  endDate: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  maxParticipants: number;
  judgePanelSize: number;
  isPublished: boolean;
  participants?: Participant[];
  judges?: Judge[];
  arguments?: Argument[];
  results?: DebateResult;
}

export interface Participant {
  id: string;
  debateId: string;
  studentId: string;
  student?: Student;
  status: ParticipantStatus;
  position: 'for' | 'against' | 'observer';
  joinedAt: Date;
  registrationApprovedBy?: string;
  registrationApprovedAt?: Date;
  rejectionReason?: string;
  isSpeaker: boolean;
  order?: number; // Speaking order
}

export interface Judge {
  id: string;
  debateId: string;
  userId: string;
  user?: Student;
  role: JudgeRole;
  assignedAt: Date;
  assignedBy: string;
  bio?: string;
  specialization?: string;
}

export interface Argument {
  id: string;
  debateId: string;
  participantId: string;
  participant?: Participant;
  type: ArgumentType;
  title: string;
  content: string;
  submittedAt: Date;
  updatedAt: Date;
  wordCount: number;
  isApproved: boolean;
  score?: number;
  judgeRemarks?: string[];
}

export interface Score {
  id: string;
  argumentId: string;
  judgeId: string;
  judge?: Judge;
  score: number; // 0-100
  criteria: ScoringCriteria;
  remarks: string;
  submittedAt: Date;
}

export interface ScoringCriteria {
  logic: number;
  evidence: number;
  presentation: number;
  structure: number;
  rebuttal: number;
}

export interface DebateResult {
  id: string;
  debateId: string;
  status: 'in-progress' | 'finalized' | 'published';
  winner?: 'for' | 'against' | 'tie';
  winnerParticipants?: Participant[];
  totalScores: {
    forTeam: number;
    againstTeam: number;
  };
  judgeFeedback?: string;
  publishedAt?: Date;
  publishedBy?: string;
}

export interface JudgeRemark {
  id: string;
  debateId: string;
  participantId: string;
  judgeId: string;
  remark: string;
  category: 'strength' | 'improvement' | 'general' | 'logic' | 'evidence';
  submittedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  color?: string;
  icon?: string;
  isActive: boolean;
  debateCount: number;
}

// Admin Dashboard Stats
export interface AdminDashboardStats {
  totalStudents: number;
  activeStudents: number;
  totalDebates: number;
  ongoingDebates: number;
  upcomingDebates: number;
  completedDebates: number;
  totalJudges: number;
  averageParticipationScore: number;
  pendingApprovals: number;
  pendingResults: number;
  categories: number;
  topics: number;
  registrationTrend: TrendData[];
  debatesTrend: TrendData[];
  topicsStats: TopicStat[];
}

export interface TrendData {
  date: Date;
  count: number;
}

export interface TopicStat {
  topicId: string;
  topicTitle: string;
  debateCount: number;
  participantCount: number;
  averageScore: number;
}

// Report Models
export interface StudentReport {
  studentId: string;
  studentName: string;
  institution: string;
  totalDebates: number;
  wins: number;
  losses: number;
  averageScore: number;
  winRate: number;
  lastDebateDate: Date;
  tier: string;
}

export interface DebateReport {
  debateId: string;
  topic: string;
  category: string;
  startDate: Date;
  endDate: Date;
  status: DebateStatus;
  participantCount: number;
  judgeCount: number;
  averageScore: number;
  completionRate: number;
  winner?: string;
}
