// Database type definitions for all models

export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

export interface User {
  id: string;
  email: string;
  full_name: string;
  phone: string | null;
  role: UserRole;
  avatar_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Student {
  id: string;
  user_id: string;
  student_id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: 'male' | 'female' | 'other';
  class_id: string;
  roll_number: number;
  parent_name: string;
  parent_email: string | null;
  parent_phone: string;
  address: string;
  city: string;
  enrollment_date: string;
  status: 'active' | 'inactive' | 'graduated';
  created_at: string;
  updated_at: string;
}

export interface Teacher {
  id: string;
  user_id: string;
  teacher_id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: 'male' | 'female' | 'other';
  specialization: string;
  qualification: string;
  years_of_experience: number;
  phone: string;
  address: string;
  join_date: string;
  status: 'active' | 'inactive' | 'retired';
  created_at: string;
  updated_at: string;
}

export interface Class {
  id: string;
  class_name: string;
  class_code: string;
  grade_level: number;
  capacity: number;
  class_teacher_id: string | null;
  room_number: string | null;
  created_at: string;
  updated_at: string;
}

export interface Subject {
  id: string;
  subject_name: string;
  subject_code: string;
  description: string | null;
  credit_hours: number;
  created_at: string;
  updated_at: string;
}

export interface ClassSubject {
  id: string;
  class_id: string;
  subject_id: string;
  teacher_id: string;
  created_at: string;
  updated_at: string;
}

export interface Attendance {
  id: string;
  student_id: string;
  class_id: string;
  date: string;
  status: 'present' | 'absent' | 'leave';
  remarks: string | null;
  created_at: string;
  updated_at: string;
}

export interface Grade {
  id: string;
  student_id: string;
  subject_id: string;
  exam_type: 'quiz' | 'midterm' | 'final' | 'assignment';
  marks_obtained: number;
  total_marks: number;
  percentage: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  exam_date: string;
  created_at: string;
  updated_at: string;
}

export interface Fee {
  id: string;
  student_id: string;
  fee_type: 'tuition' | 'transport' | 'uniform' | 'activity' | 'other';
  amount: number;
  due_date: string;
  paid_date: string | null;
  status: 'paid' | 'pending' | 'overdue';
  receipt_number: string | null;
  remarks: string | null;
  created_at: string;
  updated_at: string;
}

export interface FeeStructure {
  id: string;
  class_id: string;
  fee_type: 'tuition' | 'transport' | 'uniform' | 'activity' | 'other';
  amount: number;
  due_date: string;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  is_read: boolean;
  created_at: string;
  updated_at: string;
}

export interface Report {
  id: string;
  student_id: string;
  report_type: 'academic' | 'attendance' | 'conduct' | 'fee';
  generated_by: string;
  report_data: Record<string, any>;
  generated_at: string;
  created_at: string;
  updated_at: string;
}

// Query result types
export interface StudentWithClass extends Student {
  class?: Class;
  user?: User;
}

export interface ClassWithTeacher extends Class {
  teacher?: Teacher;
  students?: Student[];
  subjects?: Subject[];
}

export interface GradeWithDetails extends Grade {
  student?: Student;
  subject?: Subject;
}

export interface AttendanceWithStudent extends Attendance {
  student?: Student;
}

export interface FeeWithStudent extends Fee {
  student?: Student;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
  offset?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Filter types
export interface StudentFilter {
  class_id?: string;
  status?: 'active' | 'inactive' | 'graduated';
  search?: string;
}

export interface TeacherFilter {
  status?: 'active' | 'inactive' | 'retired';
  search?: string;
}

export interface GradeFilter {
  student_id?: string;
  subject_id?: string;
  exam_type?: string;
}

export interface AttendanceFilter {
  class_id?: string;
  date_from?: string;
  date_to?: string;
  status?: 'present' | 'absent' | 'leave';
}

export interface FeeFilter {
  student_id?: string;
  status?: 'paid' | 'pending' | 'overdue';
  fee_type?: string;
}
