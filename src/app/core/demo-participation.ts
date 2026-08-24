import { StudentParticipation } from './participation';

/**
 * Sample participation used when the API is not reachable — chiefly the demo
 * sign-in (see demo-accounts.ts). The figures are illustrative, not real records.
 */
export const DEMO_PARTICIPATION: readonly StudentParticipation[] = [
  {
    studentId: 'demo-s-01',
    fullName: 'Aarav Mehta',
    email: 'aarav.mehta@tarksanhita.in',
    enrolmentNo: 'TS/M/2023/014',
    roles: ['Student'],
    isActive: true,
    debatesJoined: 6,
    argumentsPosted: 19,
    votesReceived: 84,
    eventsRegistered: 4,
    debates: [
      'Should Article 370 jurisprudence bind future accession disputes?',
      'Is the collegium system defensible in a constitutional democracy?',
      'Sedition law has no place in a modern penal code',
      'Data protection must override the right to information',
      'Capital punishment deters no crime',
      'Uniform Civil Code: unity or uniformity?'
    ],
    events: [
      'National Moot Court Preliminaries',
      'Annual Parliamentary Debate',
      'Workshop: Legal Research Methods',
      'Constitution Day Lecture'
    ],
    lastActivityAt: '2026-08-19T14:20:00Z'
  },
  {
    studentId: 'demo-s-02',
    fullName: 'Priya Nair',
    email: 'priya.nair@tarksanhita.in',
    enrolmentNo: 'TS/M/2023/027',
    roles: ['Student'],
    isActive: true,
    debatesJoined: 5,
    argumentsPosted: 22,
    votesReceived: 97,
    eventsRegistered: 3,
    debates: [
      'Is the collegium system defensible in a constitutional democracy?',
      'Sedition law has no place in a modern penal code',
      'Environmental clearances must survive judicial review',
      'Uniform Civil Code: unity or uniformity?',
      'Should India adopt a codified law of privacy torts?'
    ],
    events: ['National Moot Court Preliminaries', 'Annual Parliamentary Debate', 'Constitution Day Lecture'],
    lastActivityAt: '2026-08-21T09:05:00Z'
  },
  {
    studentId: 'demo-s-03',
    fullName: 'Rohit Sharma',
    email: 'rohit.sharma@tarksanhita.in',
    enrolmentNo: 'TS/M/2024/006',
    roles: ['Student'],
    isActive: true,
    debatesJoined: 4,
    argumentsPosted: 11,
    votesReceived: 38,
    eventsRegistered: 2,
    debates: [
      'Capital punishment deters no crime',
      'Data protection must override the right to information',
      'Should Article 370 jurisprudence bind future accession disputes?',
      'Reservation in private employment is constitutionally sound'
    ],
    events: ['Workshop: Legal Research Methods', 'Annual Parliamentary Debate'],
    lastActivityAt: '2026-08-12T16:40:00Z'
  },
  {
    studentId: 'demo-s-04',
    fullName: 'Ananya Iyer',
    email: 'ananya.iyer@tarksanhita.in',
    enrolmentNo: 'TS/M/2022/041',
    roles: ['Student'],
    isActive: true,
    debatesJoined: 7,
    argumentsPosted: 26,
    votesReceived: 121,
    eventsRegistered: 5,
    debates: [
      'Is the collegium system defensible in a constitutional democracy?',
      'Uniform Civil Code: unity or uniformity?',
      'Sedition law has no place in a modern penal code',
      'Environmental clearances must survive judicial review',
      'Should India adopt a codified law of privacy torts?',
      'Reservation in private employment is constitutionally sound',
      'Capital punishment deters no crime'
    ],
    events: [
      'National Moot Court Preliminaries',
      'Annual Parliamentary Debate',
      'Workshop: Legal Research Methods',
      'Constitution Day Lecture',
      'Inter-Society Debate Championship'
    ],
    lastActivityAt: '2026-08-22T11:15:00Z'
  },
  {
    studentId: 'demo-s-05',
    fullName: 'Kabir Singh',
    email: 'kabir.singh@tarksanhita.in',
    enrolmentNo: 'TS/M/2024/019',
    roles: ['Student'],
    isActive: true,
    debatesJoined: 2,
    argumentsPosted: 5,
    votesReceived: 14,
    eventsRegistered: 2,
    debates: ['Capital punishment deters no crime', 'Data protection must override the right to information'],
    events: ['Constitution Day Lecture', 'Workshop: Legal Research Methods'],
    lastActivityAt: '2026-07-30T13:00:00Z'
  },
  {
    studentId: 'demo-s-06',
    fullName: 'Meera Krishnan',
    email: 'meera.krishnan@tarksanhita.in',
    enrolmentNo: 'TS/M/2023/052',
    roles: ['Student'],
    isActive: true,
    debatesJoined: 3,
    argumentsPosted: 9,
    votesReceived: 31,
    eventsRegistered: 3,
    debates: [
      'Should India adopt a codified law of privacy torts?',
      'Environmental clearances must survive judicial review',
      'Uniform Civil Code: unity or uniformity?'
    ],
    events: ['Inter-Society Debate Championship', 'Annual Parliamentary Debate', 'Constitution Day Lecture'],
    lastActivityAt: '2026-08-16T10:25:00Z'
  },
  {
    studentId: 'demo-s-07',
    fullName: 'Vikram Rao',
    email: 'vikram.rao@tarksanhita.in',
    enrolmentNo: 'TS/M/2023/008',
    roles: ['Student'],
    isActive: true,
    debatesJoined: 1,
    argumentsPosted: 2,
    votesReceived: 4,
    eventsRegistered: 1,
    debates: ['Reservation in private employment is constitutionally sound'],
    events: ['Workshop: Legal Research Methods'],
    lastActivityAt: '2026-06-28T08:45:00Z'
  },
  {
    studentId: 'demo-s-08',
    fullName: 'Sara Fernandes',
    email: 'sara.fernandes@tarksanhita.in',
    enrolmentNo: 'TS/M/2024/033',
    roles: ['Student'],
    isActive: true,
    debatesJoined: 4,
    argumentsPosted: 15,
    votesReceived: 57,
    eventsRegistered: 4,
    debates: [
      'Sedition law has no place in a modern penal code',
      'Data protection must override the right to information',
      'Should Article 370 jurisprudence bind future accession disputes?',
      'Is the collegium system defensible in a constitutional democracy?'
    ],
    events: [
      'National Moot Court Preliminaries',
      'Inter-Society Debate Championship',
      'Constitution Day Lecture',
      'Annual Parliamentary Debate'
    ],
    lastActivityAt: '2026-08-20T17:35:00Z'
  },
  {
    studentId: 'demo-s-09',
    fullName: 'Devansh Gupta',
    email: 'devansh.gupta@tarksanhita.in',
    enrolmentNo: 'TS/M/2025/002',
    roles: ['Student'],
    isActive: true,
    debatesJoined: 0,
    argumentsPosted: 0,
    votesReceived: 0,
    eventsRegistered: 1,
    debates: [],
    events: ['Constitution Day Lecture'],
    lastActivityAt: '2026-08-05T12:10:00Z'
  },
  {
    studentId: 'demo-s-10',
    fullName: 'Ishita Bose',
    email: 'ishita.bose@tarksanhita.in',
    enrolmentNo: 'TS/M/2022/017',
    roles: ['Student'],
    isActive: false,
    debatesJoined: 0,
    argumentsPosted: 0,
    votesReceived: 0,
    eventsRegistered: 0,
    debates: [],
    events: [],
    lastActivityAt: undefined
  },
  {
    studentId: 'demo-student',
    fullName: 'Student Member',
    email: 'student@tarksanhita.in',
    enrolmentNo: 'TS/DEMO/0001',
    roles: ['Student', 'User'],
    isActive: true,
    debatesJoined: 3,
    argumentsPosted: 7,
    votesReceived: 22,
    eventsRegistered: 2,
    debates: [
      'Uniform Civil Code: unity or uniformity?',
      'Capital punishment deters no crime',
      'Sedition law has no place in a modern penal code'
    ],
    events: ['Annual Parliamentary Debate', 'Workshop: Legal Research Methods'],
    lastActivityAt: '2026-08-23T06:30:00Z'
  }
];
