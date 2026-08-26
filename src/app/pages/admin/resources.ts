/**
 * Registry describing every CMS-managed resource: how it is listed, and which
 * fields the editor form should render. The admin list and form components read
 * this registry, so adding a new managed collection means adding one entry here.
 */

export type FieldType =
  | 'text' | 'textarea' | 'richtext' | 'number' | 'date' | 'datetime'
  | 'select' | 'checkbox' | 'tags' | 'url'
  /** Gallery editor: uploads files to their host and keeps the list of records. */
  | 'media';

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  hint?: string;
  /** Renders across the full width of the two-column form grid. */
  wide?: boolean;
  default?: string | number | boolean;
}

export interface ColumnDef {
  name: string;
  label: string;
  type?: 'text' | 'date' | 'badge' | 'boolean';
  width?: string;
}

export interface ResourceDef {
  /** URL segment used by both /admin/:resource and the API. */
  key: string;
  label: string;
  singular: string;
  description: string;
  icon: string;
  columns: ColumnDef[];
  fields: FieldDef[];
  filters?: { label: string; value: string }[];
}

const PUBLISH_FIELDS: FieldDef[] = [
  { name: 'sortOrder', label: 'Sort order', type: 'number', default: 0, hint: 'Lower numbers appear first where ordering is manual.' },
  { name: 'tags', label: 'Tags', type: 'tags', hint: 'Comma-separated.' },
  { name: 'isPublished', label: 'Published (visible on the public site)', type: 'checkbox', default: true },
  { name: 'isActive', label: 'Active (not archived)', type: 'checkbox', default: true }
];

export const RESOURCES: ResourceDef[] = [
  {
    key: 'notices',
    label: 'Notices',
    singular: 'Notice',
    description: 'Official notifications, circulars and announcements.',
    icon: 'chat',
    filters: [
      { label: 'All categories', value: '' },
      { label: 'Admission', value: 'Admission' },
      { label: 'Examination', value: 'Examination' },
      { label: 'Result', value: 'Result' },
      { label: 'Circular', value: 'Circular' },
      { label: 'Scholarship', value: 'Scholarship' },
      { label: 'Debate', value: 'Debate' },
      { label: 'Research', value: 'Research' },
      { label: 'General', value: 'General' }
    ],
    columns: [
      { name: 'title', label: 'Title' },
      { name: 'category', label: 'Category', type: 'badge', width: '120px' },
      { name: 'department', label: 'Department', width: '180px' },
      { name: 'noticeDate', label: 'Date', type: 'date', width: '110px' }
    ],
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true, wide: true },
      { name: 'summary', label: 'Summary', type: 'textarea', wide: true, hint: 'Shown on cards and in listings.' },
      { name: 'body', label: 'Notice text', type: 'richtext', wide: true, required: true },
      { name: 'department', label: 'Issuing department', type: 'text', required: true },
      { name: 'referenceNo', label: 'Reference number', type: 'text' },
      { name: 'category', label: 'Category', type: 'select', default: 'General',
        options: ['Membership', 'Event', 'Competition', 'Circular', 'Bursary', 'Debate', 'Research', 'General'] },
      { name: 'noticeDate', label: 'Notice date', type: 'date', required: true },
      { name: 'expiresAt', label: 'Expires on', type: 'date', hint: 'Leave blank for no expiry. Expired notices leave the public site automatically.' },
      { name: 'attachmentUrl', label: 'Attachment URL', type: 'url' },
      { name: 'isImportant', label: 'Show in the scrolling ticker', type: 'checkbox', default: false },
      ...PUBLISH_FIELDS
    ]
  },

  {
    key: 'news',
    label: 'News',
    singular: 'News item',
    description: 'News stories and announcements from across the Centre.',
    icon: 'doc',
    columns: [
      { name: 'title', label: 'Title' },
      { name: 'category', label: 'Category', type: 'badge', width: '130px' },
      { name: 'author', label: 'Author', width: '160px' },
      { name: 'publishedAt', label: 'Published', type: 'date', width: '110px' }
    ],
    fields: [
      { name: 'title', label: 'Headline', type: 'text', required: true, wide: true },
      { name: 'summary', label: 'Standfirst', type: 'textarea', wide: true, required: true },
      { name: 'body', label: 'Story', type: 'richtext', wide: true, required: true },
      { name: 'category', label: 'Category', type: 'select', default: 'Institution',
        options: ['Institution', 'Publication', 'Debate', 'Research', 'Community', 'Awards'] },
      { name: 'author', label: 'Byline', type: 'text', default: 'Communications Office' },
      { name: 'publishedAt', label: 'Publication date', type: 'date', required: true },
      { name: 'imageUrl', label: 'Image URL', type: 'url', hint: 'Leave blank to use generated artwork.' },
      { name: 'isFeatured', label: 'Feature on the homepage', type: 'checkbox', default: false },
      ...PUBLISH_FIELDS
    ]
  },

  {
    key: 'events',
    label: 'Events',
    singular: 'Event',
    description: 'Conferences, seminars, competitions, lectures and observances.',
    icon: 'cal',
    filters: [
      { label: 'All types', value: '' },
      { label: 'Conference', value: 'Conference' },
      { label: 'Seminar', value: 'Seminar' },
      { label: 'Competition', value: 'Competition' },
      { label: 'Lecture', value: 'Lecture' },
      { label: 'Workshop', value: 'Workshop' },
      { label: 'Observance', value: 'Observance' },
      { label: 'Orientation', value: 'Orientation' }
    ],
    columns: [
      { name: 'title', label: 'Event' },
      { name: 'eventType', label: 'Type', type: 'badge', width: '120px' },
      { name: 'venue', label: 'Venue', width: '200px' },
      { name: 'startsAt', label: 'Starts', type: 'date', width: '110px' },
      { name: 'registrationOpen', label: 'Reg.', type: 'boolean', width: '80px' }
    ],
    fields: [
      { name: 'title', label: 'Event title', type: 'text', required: true, wide: true },
      { name: 'summary', label: 'Summary', type: 'textarea', wide: true },
      { name: 'body', label: 'Full agenda', type: 'richtext', wide: true },
      { name: 'eventType', label: 'Type', type: 'select', default: 'Seminar',
        options: ['Conference', 'Seminar', 'Competition', 'Lecture', 'Workshop', 'Observance', 'Orientation'] },
      { name: 'venue', label: 'Venue', type: 'text', required: true },
      { name: 'startsAt', label: 'Starts at', type: 'datetime', required: true },
      { name: 'endsAt', label: 'Ends at', type: 'datetime' },
      { name: 'organiser', label: 'Organiser', type: 'text', default: 'Tarksanhita' },
      { name: 'capacity', label: 'Capacity', type: 'number', hint: 'Leave blank or zero for unlimited.' },
      { name: 'registrationUrl', label: 'External registration URL', type: 'url' },
      { name: 'registrationOpen', label: 'Registration open', type: 'checkbox', default: true },
      { name: 'mediaItems', label: 'Photographs & video', type: 'media', wide: true,
        hint: 'Images are hosted on ImgBB, video on Cloudinary. The item marked Cover is the picture listing cards use.' },
      ...PUBLISH_FIELDS
    ]
  },

  {
    key: 'debates',
    label: 'Debates',
    singular: 'Debate',
    description: 'Motions, opening cases and the argument record.',
    icon: 'chat',
    filters: [
      { label: 'All statuses', value: '' },
      { label: 'Draft', value: 'Draft' },
      { label: 'Live', value: 'Live' },
      { label: 'Closed', value: 'Closed' },
      { label: 'Archived', value: 'Archived' }
    ],
    columns: [
      { name: 'title', label: 'Motion' },
      { name: 'topic', label: 'Topic', type: 'badge', width: '170px' },
      { name: 'status', label: 'Status', type: 'badge', width: '100px' },
      { name: 'scheduledFor', label: 'Scheduled', type: 'date', width: '110px' }
    ],
    fields: [
      { name: 'title', label: 'Debate title', type: 'text', required: true, wide: true },
      { name: 'motion', label: 'Motion as put', type: 'textarea', wide: true, required: true,
        hint: 'For example: "This House would codify the basic structure doctrine."' },
      { name: 'topic', label: 'Topic area', type: 'text', required: true },
      { name: 'status', label: 'Status', type: 'select', default: 'Draft', options: ['Draft', 'Live', 'Closed', 'Archived'] },
      { name: 'summary', label: 'Summary', type: 'textarea', wide: true },
      { name: 'forSummary', label: 'Opening case — For', type: 'textarea', wide: true, required: true },
      { name: 'againstSummary', label: 'Opening case — Against', type: 'textarea', wide: true, required: true },
      { name: 'scheduledFor', label: 'Scheduled for', type: 'date', required: true },
      { name: 'closesAt', label: 'Closes at', type: 'date' },
      { name: 'participants', label: 'Participants', type: 'tags' },
      { name: 'adjudicators', label: 'Adjudicators', type: 'tags' },
      { name: 'verdict', label: 'Adjudicators\' verdict', type: 'textarea', wide: true, hint: 'Published once the motion is decided.' },
      { name: 'discussionOpen', label: 'Accepting submissions', type: 'checkbox', default: true },
      ...PUBLISH_FIELDS
    ]
  },

  {
    key: 'articles',
    label: 'Articles',
    singular: 'Article',
    description: 'Commentary, case notes and explainers.',
    icon: 'doc',
    columns: [
      { name: 'title', label: 'Title' },
      { name: 'articleType', label: 'Type', type: 'badge', width: '120px' },
      { name: 'author', label: 'Author', width: '170px' },
      { name: 'publishedAt', label: 'Published', type: 'date', width: '110px' }
    ],
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true, wide: true },
      { name: 'summary', label: 'Summary', type: 'textarea', wide: true },
      { name: 'body', label: 'Article', type: 'richtext', wide: true, required: true },
      { name: 'author', label: 'Author', type: 'text', required: true },
      { name: 'articleType', label: 'Type', type: 'select', default: 'Commentary',
        options: ['Commentary', 'CaseNote', 'Opinion', 'Explainer'] },
      { name: 'legalTopicSlug', label: 'Legal topic slug', type: 'text', hint: 'Links the article to a topic page, e.g. constitutional-law.' },
      { name: 'readingMinutes', label: 'Reading time (minutes)', type: 'number', default: 5 },
      { name: 'publishedAt', label: 'Publication date', type: 'date', required: true },
      { name: 'imageUrl', label: 'Image URL', type: 'url' },
      ...PUBLISH_FIELDS
    ]
  },

  {
    key: 'research',
    label: 'Research Papers',
    singular: 'Research paper',
    description: 'Journal articles, working papers, dissertations and case studies.',
    icon: 'flask',
    filters: [
      { label: 'All types', value: '' },
      { label: 'Journal', value: 'Journal' },
      { label: 'Working paper', value: 'WorkingPaper' },
      { label: 'Dissertation', value: 'Dissertation' },
      { label: 'Case study', value: 'CaseStudy' },
      { label: 'Monograph', value: 'Monograph' },
      { label: 'Fellow publication', value: 'FacultyPublication' },
      { label: 'Member research', value: 'StudentResearch' }
    ],
    columns: [
      { name: 'title', label: 'Title' },
      { name: 'paperType', label: 'Type', type: 'badge', width: '140px' },
      { name: 'researchCentre', label: 'Centre', width: '170px' },
      { name: 'publishedOn', label: 'Published', type: 'date', width: '110px' }
    ],
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true, wide: true },
      { name: 'abstract', label: 'Abstract', type: 'richtext', wide: true, required: true },
      { name: 'authors', label: 'Authors', type: 'tags', wide: true, required: true },
      { name: 'paperType', label: 'Type', type: 'select', default: 'Journal',
        options: ['Journal', 'WorkingPaper', 'Dissertation', 'CaseStudy', 'Monograph', 'FacultyPublication', 'StudentResearch'] },
      { name: 'researchCentre', label: 'Research centre', type: 'select',
        options: ['Constitutional Studies', 'Criminal Justice', 'Technology & Law', 'Human Rights', 'Legal Philosophy'] },
      { name: 'journal', label: 'Journal', type: 'text' },
      { name: 'volume', label: 'Volume', type: 'text' },
      { name: 'citation', label: 'Citation', type: 'text' },
      { name: 'doi', label: 'DOI', type: 'text' },
      { name: 'fileUrl', label: 'PDF URL', type: 'url' },
      { name: 'keywords', label: 'Keywords', type: 'tags' },
      { name: 'publishedOn', label: 'Published on', type: 'date', required: true },
      { name: 'peerReviewed', label: 'Peer reviewed', type: 'checkbox', default: true },
      ...PUBLISH_FIELDS
    ]
  },

  {
    key: 'topics',
    label: 'Legal Topics',
    singular: 'Legal topic',
    description: 'Subject clusters used by the topic pages and the Centre\'s activity listings.',
    icon: 'scale',
    columns: [
      { name: 'title', label: 'Topic' },
      { name: 'iconKey', label: 'Icon', width: '110px' },
      { name: 'sortOrder', label: 'Order', width: '80px' }
    ],
    fields: [
      { name: 'title', label: 'Topic name', type: 'text', required: true, wide: true },
      { name: 'summary', label: 'Summary', type: 'textarea', wide: true, required: true },
      { name: 'body', label: 'Full description', type: 'richtext', wide: true },
      { name: 'parentSlug', label: 'Parent topic slug', type: 'text', hint: 'Leave blank for a top-level topic.' },
      { name: 'iconKey', label: 'Icon', type: 'select',
        options: ['scale', 'building', 'gavel', 'doc', 'chip', 'globe', 'bulb', 'shield', 'book', 'flask', 'people'] },
      { name: 'keyProvisions', label: 'Key provisions', type: 'tags', wide: true },
      { name: 'landmarkCases', label: 'Landmark cases', type: 'tags', wide: true },
      ...PUBLISH_FIELDS
    ]
  },

  {
    key: 'library',
    label: 'Library',
    singular: 'Library resource',
    description: 'Books, journals, statutes, case law and reference material.',
    icon: 'book',
    filters: [
      { label: 'All types', value: '' },
      { label: 'Book', value: 'Book' },
      { label: 'Journal', value: 'Journal' },
      { label: 'Research paper', value: 'ResearchPaper' },
      { label: 'Bare act', value: 'BareAct' },
      { label: 'Case law', value: 'CaseLaw' },
      { label: 'Constitution', value: 'Constitution' },
      { label: 'Database', value: 'Database' },
      { label: 'Reference material', value: 'StudyMaterial' }
    ],
    columns: [
      { name: 'title', label: 'Title' },
      { name: 'resourceType', label: 'Type', type: 'badge', width: '140px' },
      { name: 'shelfCode', label: 'Shelf', width: '120px' },
      { name: 'year', label: 'Year', width: '80px' }
    ],
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true, wide: true },
      { name: 'description', label: 'Description', type: 'textarea', wide: true },
      { name: 'resourceType', label: 'Resource type', type: 'select', default: 'Book',
        options: ['Book', 'Journal', 'ResearchPaper', 'BareAct', 'CaseLaw', 'Constitution', 'Database', 'StudyMaterial'] },
      { name: 'authors', label: 'Authors', type: 'tags' },
      { name: 'publisher', label: 'Publisher', type: 'text' },
      { name: 'isbn', label: 'ISBN', type: 'text' },
      { name: 'citation', label: 'Citation', type: 'text' },
      { name: 'year', label: 'Year', type: 'number' },
      { name: 'edition', label: 'Edition', type: 'text' },
      { name: 'language', label: 'Language', type: 'text', default: 'English' },
      { name: 'shelfCode', label: 'Shelf code', type: 'text' },
      { name: 'fileUrl', label: 'File URL', type: 'url' },
      { name: 'externalUrl', label: 'External URL', type: 'url' },
      { name: 'copiesTotal', label: 'Copies held', type: 'number', default: 0 },
      { name: 'copiesAvailable', label: 'Copies available', type: 'number', default: 0 },
      { name: 'isDigital', label: 'Available digitally', type: 'checkbox', default: true },
      ...PUBLISH_FIELDS
    ]
  },

  {
    key: 'profiles',
    label: 'Profiles',
    singular: 'Profile',
    description: 'Leadership, fellows and council profiles.',
    icon: 'people',
    filters: [
      { label: 'All types', value: '' },
      { label: 'Founder', value: 'Founder' },
      { label: 'Director', value: 'Director' },
      { label: 'Head of Research', value: 'AcademicHead' },
      { label: 'Fellow', value: 'Faculty' },
      { label: 'Council', value: 'Council' },
      { label: 'Adjudicator', value: 'Adjudicator' }
    ],
    columns: [
      { name: 'fullName', label: 'Name' },
      { name: 'designation', label: 'Designation', width: '180px' },
      { name: 'profileType', label: 'Type', type: 'badge', width: '130px' },
      { name: 'showOnHome', label: 'Home', type: 'boolean', width: '80px' }
    ],
    fields: [
      { name: 'fullName', label: 'Full name', type: 'text', required: true },
      { name: 'title', label: 'Display title', type: 'text', required: true, hint: 'Usually the same as the full name.' },
      { name: 'designation', label: 'Designation', type: 'text', required: true },
      { name: 'qualifications', label: 'Qualifications', type: 'text' },
      { name: 'profileType', label: 'Profile type', type: 'select', default: 'Faculty',
        options: ['Founder', 'Patron', 'Director', 'AcademicHead', 'Faculty', 'Council', 'Adjudicator'] },
      { name: 'department', label: 'Department', type: 'text' },
      { name: 'shortBio', label: 'Short biography', type: 'textarea', wide: true, hint: 'One or two sentences for the homepage card.' },
      { name: 'biography', label: 'Full biography', type: 'richtext', wide: true },
      { name: 'photoUrl', label: 'Photograph URL', type: 'url' },
      { name: 'email', label: 'Email', type: 'text' },
      { name: 'phone', label: 'Telephone', type: 'text' },
      { name: 'specialisations', label: 'Specialisations', type: 'tags', wide: true },
      { name: 'publications', label: 'Selected publications', type: 'tags', wide: true },
      { name: 'showOnHome', label: 'Show on the homepage', type: 'checkbox', default: false },
      ...PUBLISH_FIELDS
    ]
  }
];

export function findResource(key: string): ResourceDef | undefined {
  return RESOURCES.find(r => r.key === key);
}
