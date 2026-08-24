import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Student,
  Debate,
  DebateTopic,
  Participant,
  Judge,
  Argument,
  Score,
  DebateResult,
  JudgeRemark,
  Category,
  AdminDashboardStats,
  StudentReport,
  DebateReport,
  ParticipantStatus,
  DebateStatus
} from './debate-admin-models';

/**
 * Debate Admin Service
 * Handles all admin operations for debate management
 */
@Injectable({
  providedIn: 'root'
})
export class DebateAdminService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/admin/debates';

  // ==================== Dashboard & Analytics ====================

  getDashboardStats(): Observable<AdminDashboardStats> {
    return this.http.get<AdminDashboardStats>(`${this.apiUrl}/dashboard/stats`);
  }

  // ==================== Student Management ====================

  getAllStudents(filters?: {
    search?: string;
    tier?: string;
    institution?: string;
    isActive?: boolean;
    page?: number;
    limit?: number;
  }): Observable<{ data: Student[]; total: number }> {
    const params = new URLSearchParams();
    if (filters?.search) params.append('search', filters.search);
    if (filters?.tier) params.append('tier', filters.tier);
    if (filters?.institution) params.append('institution', filters.institution);
    if (filters?.isActive !== undefined) params.append('isActive', filters.isActive.toString());
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.limit) params.append('limit', filters.limit.toString());

    return this.http.get<{ data: Student[]; total: number }>(
      `${this.apiUrl}/students?${params.toString()}`
    );
  }

  getStudent(studentId: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/students/${studentId}`);
  }

  updateStudent(studentId: string, data: Partial<Student>): Observable<Student> {
    return this.http.patch<Student>(`${this.apiUrl}/students/${studentId}`, data);
  }

  deleteStudent(studentId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/students/${studentId}`);
  }

  // ==================== Debate Topic Management ====================

  getAllTopics(filters?: {
    search?: string;
    isActive?: boolean;
    page?: number;
    limit?: number;
  }): Observable<{ data: DebateTopic[]; total: number }> {
    const params = new URLSearchParams();
    if (filters?.search) params.append('search', filters.search);
    if (filters?.isActive !== undefined) params.append('isActive', filters.isActive.toString());
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.limit) params.append('limit', filters.limit.toString());

    return this.http.get<{ data: DebateTopic[]; total: number }>(
      `${this.apiUrl}/topics?${params.toString()}`
    );
  }

  createTopic(data: Omit<DebateTopic, 'id' | 'createdAt' | 'updatedAt'>): Observable<DebateTopic> {
    return this.http.post<DebateTopic>(`${this.apiUrl}/topics`, data);
  }

  updateTopic(topicId: string, data: Partial<DebateTopic>): Observable<DebateTopic> {
    return this.http.patch<DebateTopic>(`${this.apiUrl}/topics/${topicId}`, data);
  }

  deleteTopic(topicId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/topics/${topicId}`);
  }

  // ==================== Debate Management ====================

  getAllDebates(filters?: {
    status?: DebateStatus;
    category?: string;
    search?: string;
    page?: number;
    limit?: number;
  }): Observable<{ data: Debate[]; total: number }> {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);
    if (filters?.category) params.append('category', filters.category);
    if (filters?.search) params.append('search', filters.search);
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.limit) params.append('limit', filters.limit.toString());

    return this.http.get<{ data: Debate[]; total: number }>(
      `${this.apiUrl}/debates?${params.toString()}`
    );
  }

  getDebate(debateId: string): Observable<Debate> {
    return this.http.get<Debate>(`${this.apiUrl}/debates/${debateId}`);
  }

  createDebate(data: Omit<Debate, 'id' | 'createdAt' | 'updatedAt'>): Observable<Debate> {
    return this.http.post<Debate>(`${this.apiUrl}/debates`, data);
  }

  updateDebate(debateId: string, data: Partial<Debate>): Observable<Debate> {
    return this.http.patch<Debate>(`${this.apiUrl}/debates/${debateId}`, data);
  }

  deleteDebate(debateId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/debates/${debateId}`);
  }

  // Debate Status Control
  startDebate(debateId: string): Observable<Debate> {
    return this.http.post<Debate>(`${this.apiUrl}/debates/${debateId}/start`, {});
  }

  endDebate(debateId: string): Observable<Debate> {
    return this.http.post<Debate>(`${this.apiUrl}/debates/${debateId}/end`, {});
  }

  publishDebate(debateId: string): Observable<Debate> {
    return this.http.post<Debate>(`${this.apiUrl}/debates/${debateId}/publish`, {});
  }

  archiveDebate(debateId: string): Observable<Debate> {
    return this.http.post<Debate>(`${this.apiUrl}/debates/${debateId}/archive`, {});
  }

  // ==================== Participant Management ====================

  getParticipants(debateId: string): Observable<Participant[]> {
    return this.http.get<Participant[]>(
      `${this.apiUrl}/debates/${debateId}/participants`
    );
  }

  getPendingApprovals(): Observable<Participant[]> {
    return this.http.get<Participant[]>(
      `${this.apiUrl}/participants/pending-approvals`
    );
  }

  approveParticipant(participantId: string): Observable<Participant> {
    return this.http.post<Participant>(
      `${this.apiUrl}/participants/${participantId}/approve`,
      {}
    );
  }

  rejectParticipant(
    participantId: string,
    reason: string
  ): Observable<Participant> {
    return this.http.post<Participant>(
      `${this.apiUrl}/participants/${participantId}/reject`,
      { reason }
    );
  }

  updateParticipantStatus(
    participantId: string,
    status: ParticipantStatus
  ): Observable<Participant> {
    return this.http.patch<Participant>(
      `${this.apiUrl}/participants/${participantId}`,
      { status }
    );
  }

  // ==================== Judge Management ====================

  getJudges(debateId: string): Observable<Judge[]> {
    return this.http.get<Judge[]>(
      `${this.apiUrl}/debates/${debateId}/judges`
    );
  }

  assignJudge(debateId: string, userId: string, role: string): Observable<Judge> {
    return this.http.post<Judge>(
      `${this.apiUrl}/debates/${debateId}/judges`,
      { userId, role }
    );
  }

  removeJudge(debateId: string, judgeId: string): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/debates/${debateId}/judges/${judgeId}`
    );
  }

  // ==================== Arguments & Scoring ====================

  getArguments(debateId: string): Observable<Argument[]> {
    return this.http.get<Argument[]>(
      `${this.apiUrl}/debates/${debateId}/arguments`
    );
  }

  submitScore(argumentId: string, scoreData: Omit<Score, 'id' | 'submittedAt'>): Observable<Score> {
    return this.http.post<Score>(
      `${this.apiUrl}/arguments/${argumentId}/score`,
      scoreData
    );
  }

  addJudgeRemark(debateId: string, remark: Omit<JudgeRemark, 'id' | 'submittedAt'>): Observable<JudgeRemark> {
    return this.http.post<JudgeRemark>(
      `${this.apiUrl}/debates/${debateId}/remarks`,
      remark
    );
  }

  getJudgeRemarks(debateId: string): Observable<JudgeRemark[]> {
    return this.http.get<JudgeRemark[]>(
      `${this.apiUrl}/debates/${debateId}/remarks`
    );
  }

  // ==================== Results & Publishing ====================

  getDebateResult(debateId: string): Observable<DebateResult> {
    return this.http.get<DebateResult>(
      `${this.apiUrl}/debates/${debateId}/result`
    );
  }

  calculateResult(debateId: string): Observable<DebateResult> {
    return this.http.post<DebateResult>(
      `${this.apiUrl}/debates/${debateId}/calculate-result`,
      {}
    );
  }

  publishResult(debateId: string): Observable<DebateResult> {
    return this.http.post<DebateResult>(
      `${this.apiUrl}/debates/${debateId}/publish-result`,
      {}
    );
  }

  // ==================== Category Management ====================

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  createCategory(data: Omit<Category, 'id'>): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}/categories`, data);
  }

  updateCategory(categoryId: string, data: Partial<Category>): Observable<Category> {
    return this.http.patch<Category>(`${this.apiUrl}/categories/${categoryId}`, data);
  }

  deleteCategory(categoryId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/categories/${categoryId}`);
  }

  // ==================== Reports ====================

  getStudentReport(filters?: {
    institution?: string;
    tier?: string;
    startDate?: Date;
    endDate?: Date;
  }): Observable<StudentReport[]> {
    const params = new URLSearchParams();
    if (filters?.institution) params.append('institution', filters.institution);
    if (filters?.tier) params.append('tier', filters.tier);
    if (filters?.startDate) params.append('startDate', filters.startDate.toISOString());
    if (filters?.endDate) params.append('endDate', filters.endDate.toISOString());

    return this.http.get<StudentReport[]>(
      `${this.apiUrl}/reports/students?${params.toString()}`
    );
  }

  getDebateReport(filters?: {
    status?: DebateStatus;
    category?: string;
    startDate?: Date;
    endDate?: Date;
  }): Observable<DebateReport[]> {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);
    if (filters?.category) params.append('category', filters.category);
    if (filters?.startDate) params.append('startDate', filters.startDate.toISOString());
    if (filters?.endDate) params.append('endDate', filters.endDate.toISOString());

    return this.http.get<DebateReport[]>(
      `${this.apiUrl}/reports/debates?${params.toString()}`
    );
  }

  exportStudentReport(format: 'csv' | 'pdf'): Observable<Blob> {
    return this.http.get(
      `${this.apiUrl}/reports/students/export?format=${format}`,
      { responseType: 'blob' }
    );
  }

  exportDebateReport(format: 'csv' | 'pdf'): Observable<Blob> {
    return this.http.get(
      `${this.apiUrl}/reports/debates/export?format=${format}`,
      { responseType: 'blob' }
    );
  }
}
