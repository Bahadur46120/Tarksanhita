/** Shared shapes mirroring the ASP.NET Core API contracts. */

export interface PagedResult<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface ApiMessage {
  message: string;
  success: boolean;
}

export interface QueryParams {
  page?: number;
  pageSize?: number;
  search?: string;
  category?: string;
  tag?: string;
  sortBy?: string;
  descending?: boolean;
  includeUnpublished?: boolean;
}

export interface ContentEntity {
  id?: string;
  title: string;
  slug: string;
  isPublished: boolean;
  isActive: boolean;
  sortOrder: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  updatedBy?: string;
}

export interface Notice extends ContentEntity {
  summary: string;
  body: string;
  department: string;
  referenceNo?: string;
  category: string;
  noticeDate: string;
  expiresAt?: string;
  isImportant: boolean;
  attachmentUrl?: string;
  viewCount: number;
}

export interface NewsItem extends ContentEntity {
  summary: string;
  body: string;
  category: string;
  imageUrl?: string;
  author?: string;
  publishedAt: string;
  isFeatured: boolean;
  viewCount: number;
}

export type MediaKind = 'Image' | 'Video';

/** Where the file is hosted. Uploads go straight from the browser to the host. */
export type MediaProvider = 'imgbb' | 'cloudinary' | 'youtube' | 'vimeo' | 'external';

/**
 * One photograph or video in an event gallery. The file itself lives with its
 * host; this record only says where it is and how it should be shown.
 */
export interface EventMedia {
  id: string;
  kind: MediaKind;
  /** Direct file URL, or the watch URL for an embedded video. */
  url: string;
  /** Small still for grids. Falls back to `url` for images. */
  thumbUrl?: string;
  provider: MediaProvider;
  providerId?: string;
  /** One-shot removal link, where the host issues one. */
  deleteUrl?: string;
  caption?: string;
  fileName?: string;
  width?: number;
  height?: number;
  sizeBytes?: number;
  sortOrder: number;
  /** The still used on listing cards. At most one per event. */
  isCover?: boolean;
  uploadedAt?: string;
  uploadedBy?: string;
}

export interface EventItem extends ContentEntity {
  summary: string;
  body: string;
  eventType: string;
  venue: string;
  startsAt: string;
  endsAt?: string;
  registrationOpen: boolean;
  registrationUrl?: string;
  capacity?: number;
  registeredCount: number;
  imageUrl?: string;
  organiser?: string;
  /** Gallery attachments, lowest sortOrder first. */
  mediaItems?: EventMedia[];
}

export interface DebateArgument {
  id: string;
  side: 'For' | 'Against';
  authorName: string;
  authorId?: string;
  text: string;
  rebutsArgumentId?: string;
  citations: string[];
  votes: number;
  postedAt: string;
  isApproved: boolean;
}

export interface Debate extends ContentEntity {
  motion: string;
  topic: string;
  summary: string;
  forSummary: string;
  againstSummary: string;
  status: 'Draft' | 'Live' | 'Closed' | 'Archived';
  scheduledFor: string;
  closesAt?: string;
  participants: string[];
  adjudicators: string[];
  arguments: DebateArgument[];
  verdict?: string;
  discussionOpen: boolean;
  viewCount: number;
  argumentCount: number;
  counterArgumentCount: number;
}

export interface Article extends ContentEntity {
  summary: string;
  body: string;
  author: string;
  authorId?: string;
  articleType: string;
  legalTopicSlug?: string;
  imageUrl?: string;
  publishedAt: string;
  readingMinutes: number;
  viewCount: number;
}

export interface ResearchPaper extends ContentEntity {
  abstract: string;
  authors: string[];
  paperType: string;
  journal?: string;
  volume?: string;
  citation?: string;
  doi?: string;
  fileUrl?: string;
  researchCentre?: string;
  keywords: string[];
  publishedOn: string;
  peerReviewed: boolean;
  downloadCount: number;
}

export interface LegalTopic extends ContentEntity {
  summary: string;
  body: string;
  parentSlug?: string;
  iconKey?: string;
  keyProvisions: string[];
  landmarkCases: string[];
  resourceCount: number;
}

export interface LibraryResource extends ContentEntity {
  description: string;
  resourceType: string;
  authors: string[];
  publisher?: string;
  isbn?: string;
  citation?: string;
  year?: number;
  edition?: string;
  language?: string;
  shelfCode?: string;
  fileUrl?: string;
  externalUrl?: string;
  isDigital: boolean;
  copiesTotal: number;
  copiesAvailable: number;
  downloadCount: number;
}

export interface ProfileEntry extends ContentEntity {
  profileType: string;
  fullName: string;
  designation: string;
  qualifications: string;
  shortBio: string;
  biography: string;
  department?: string;
  photoUrl?: string;
  email?: string;
  phone?: string;
  specialisations: string[];
  publications: string[];
  showOnHome: boolean;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  department: string;
  status: 'New' | 'InProgress' | 'Resolved' | 'Spam';
  responseNote?: string;
  handledBy?: string;
  createdAt: string;
  handledAt?: string;
  isActive: boolean;
}

// ---------------------------------------------------------------- auth

export type Role = 'Admin' | 'Editor' | 'Faculty' | 'Student' | 'User';

export interface AppUser {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  enrolmentNo?: string;
  roles: Role[];
  isActive: boolean;
  createdAt: string;
  lastLoginAt?: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  user: AppUser;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
  enrolmentNo?: string;
}

// ---------------------------------------------------------------- aggregates

export interface HomePayload {
  notices: Notice[];
  news: NewsItem[];
  events: EventItem[];
  debates: Debate[];
  profiles: ProfileEntry[];
  topics: LegalTopic[];
  stats: {
    learners: number;
    faculty: number;
    programmes: number;
    publications: number;
  };
}

export interface DashboardStats {
  notices: number;
  news: number;
  events: number;
  debates: number;
  articles: number;
  researchPapers: number;
  legalTopics: number;
  libraryResources: number;
  profiles: number;
  users: number;
  newContacts: number;
  unpublishedItems: number;
}
