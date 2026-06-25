// Language and internationalization configuration
// Supports Urdu and English

type Language = 'en' | 'ur';

interface Translation {
  [key: string]: string | Translation;
}

const translations: Record<Language, Translation> = {
  en: {
    // Common
    common: {
      appName: 'School Management System',
      dashboard: 'Dashboard',
      logout: 'Logout',
      login: 'Login',
      register: 'Register',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      add: 'Add',
      back: 'Back',
      search: 'Search',
      filter: 'Filter',
      settings: 'Settings',
      profile: 'Profile',
      language: 'Language',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      warning: 'Warning',
      info: 'Information',
    },

    // Navigation
    nav: {
      students: 'Students',
      teachers: 'Teachers',
      classes: 'Classes',
      subjects: 'Subjects',
      attendance: 'Attendance',
      grades: 'Grades',
      fees: 'Fees',
      reports: 'Reports',
      admin: 'Administration',
    },

    // Authentication
    auth: {
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      fullName: 'Full Name',
      phone: 'Phone Number',
      loginTitle: 'Welcome Back',
      loginSubtitle: 'Sign in to your account',
      registerTitle: 'Create Account',
      registerSubtitle: 'Join our school management system',
      forgotPassword: 'Forgot Password?',
      rememberMe: 'Remember me',
      noAccount: "Don't have an account?",
      haveAccount: 'Already have an account?',
      invalidCredentials: 'Invalid email or password',
      emailExists: 'Email already registered',
      passwordMismatch: 'Passwords do not match',
      requiredField: 'This field is required',
    },

    // Students
    students: {
      title: 'Students',
      addStudent: 'Add Student',
      editStudent: 'Edit Student',
      studentID: 'Student ID',
      firstName: 'First Name',
      lastName: 'Last Name',
      dateOfBirth: 'Date of Birth',
      gender: 'Gender',
      class: 'Class',
      rollNumber: 'Roll Number',
      parentName: 'Parent Name',
      parentPhone: 'Parent Phone',
      address: 'Address',
      city: 'City',
      enrollmentDate: 'Enrollment Date',
      status: 'Status',
      active: 'Active',
      inactive: 'Inactive',
      noStudents: 'No students found',
    },

    // Teachers
    teachers: {
      title: 'Teachers',
      addTeacher: 'Add Teacher',
      editTeacher: 'Edit Teacher',
      teacherID: 'Teacher ID',
      firstName: 'First Name',
      lastName: 'Last Name',
      dateOfBirth: 'Date of Birth',
      gender: 'Gender',
      specialization: 'Specialization',
      qualification: 'Qualification',
      experience: 'Years of Experience',
      phone: 'Phone Number',
      address: 'Address',
      joinDate: 'Join Date',
      status: 'Status',
      noTeachers: 'No teachers found',
    },

    // Classes
    classes: {
      title: 'Classes',
      addClass: 'Add Class',
      editClass: 'Edit Class',
      className: 'Class Name',
      classCode: 'Class Code',
      gradeLevel: 'Grade Level',
      capacity: 'Capacity',
      classTeacher: 'Class Teacher',
      room: 'Room Number',
      schedule: 'Schedule',
      noClasses: 'No classes found',
    },

    // Subjects
    subjects: {
      title: 'Subjects',
      addSubject: 'Add Subject',
      editSubject: 'Edit Subject',
      subjectName: 'Subject Name',
      subjectCode: 'Subject Code',
      description: 'Description',
      creditHours: 'Credit Hours',
      noSubjects: 'No subjects found',
    },

    // Attendance
    attendance: {
      title: 'Attendance',
      markAttendance: 'Mark Attendance',
      date: 'Date',
      present: 'Present',
      absent: 'Absent',
      leave: 'Leave',
      attendanceReport: 'Attendance Report',
      percentage: 'Attendance %',
      noRecords: 'No attendance records',
    },

    // Grades
    grades: {
      title: 'Grades',
      enterGrades: 'Enter Grades',
      exam: 'Exam',
      marks: 'Marks',
      outOf: 'Out of',
      grade: 'Grade',
      gpa: 'GPA',
      noGrades: 'No grades recorded',
    },

    // Fees
    fees: {
      title: 'Fees',
      feeStructure: 'Fee Structure',
      amount: 'Amount',
      dueDate: 'Due Date',
      paidDate: 'Paid Date',
      status: 'Status',
      paid: 'Paid',
      pending: 'Pending',
      overdue: 'Overdue',
      generateInvoice: 'Generate Invoice',
      noFees: 'No fee records',
    },

    // Messages
    messages: {
      deleteConfirm: 'Are you sure you want to delete this item?',
      deleteSuccess: 'Item deleted successfully',
      updateSuccess: 'Updated successfully',
      createSuccess: 'Created successfully',
      errorOccurred: 'An error occurred. Please try again.',
      unauthorized: 'You are not authorized to perform this action',
      sessionExpired: 'Your session has expired. Please login again.',
    },
  },

  ur: {
    // عام
    common: {
      appName: 'اسکول مینجمنٹ سسٹم',
      dashboard: 'ڈیش بورڈ',
      logout: 'لاگ آؤٹ',
      login: 'لاگ ان',
      register: 'رجسٹر کریں',
      save: 'محفوظ کریں',
      cancel: 'منسوخ کریں',
      delete: 'حذف کریں',
      edit: 'ترمیم کریں',
      add: 'شامل کریں',
      back: 'واپس',
      search: 'تلاش کریں',
      filter: 'فلٹر کریں',
      settings: 'ترتیبات',
      profile: 'پروفائل',
      language: 'زبان',
      loading: 'لوڈ ہو رہا ہے...',
      error: 'خرابی',
      success: 'کامیاب',
      warning: 'انتباہ',
      info: 'معلومات',
    },

    // نیویگیشن
    nav: {
      students: 'طالب علم',
      teachers: 'اساتذہ',
      classes: 'کلاسز',
      subjects: 'مضامین',
      attendance: 'حاضری',
      grades: 'نمبرات',
      fees: 'فیس',
      reports: 'رپورٹس',
      admin: 'انتظامیہ',
    },

    // تصدیق
    auth: {
      email: 'ای میل',
      password: 'پاس ورڈ',
      confirmPassword: 'پاس ورڈ کی تصدیق کریں',
      fullName: 'مکمل نام',
      phone: 'فون نمبر',
      loginTitle: 'خوش آمدید',
      loginSubtitle: 'اپنے اکاؤنٹ میں سائن ان کریں',
      registerTitle: 'اکاؤنٹ بنائیں',
      registerSubtitle: 'ہماری اسکول مینجمنٹ سسٹم میں شامل ہوں',
      forgotPassword: 'پاس ورڈ بھول گئے؟',
      rememberMe: 'مجھے یاد رکھیں',
      noAccount: 'اکاؤنٹ نہیں ہے؟',
      haveAccount: 'پہلے سے اکاؤنٹ ہے؟',
      invalidCredentials: 'غلط ای میل یا پاس ورڈ',
      emailExists: 'ای میل پہلے سے رجسٹرڈ ہے',
      passwordMismatch: 'پاس ورڈ مماثل نہیں ہیں',
      requiredField: 'یہ فیلڈ ضروری ہے',
    },

    // طالب علم
    students: {
      title: 'طالب علم',
      addStudent: 'طالب علم شامل کریں',
      editStudent: 'طالب علم میں ترمیم کریں',
      studentID: 'طالب علم ID',
      firstName: 'پہلا نام',
      lastName: 'آخری نام',
      dateOfBirth: 'پیدائش کی تاریخ',
      gender: 'جنس',
      class: 'کلاس',
      rollNumber: 'رول نمبر',
      parentName: 'والد کا نام',
      parentPhone: 'والد کا فون',
      address: 'پتہ',
      city: 'شہر',
      enrollmentDate: 'داخلہ کی تاریخ',
      status: 'حالت',
      active: 'فعال',
      inactive: 'غیر فعال',
      noStudents: 'کوئی طالب علم نہیں ملا',
    },

    // اساتذہ
    teachers: {
      title: 'اساتذہ',
      addTeacher: 'استاد شامل کریں',
      editTeacher: 'استاد میں ترمیم کریں',
      teacherID: 'استاد ID',
      firstName: 'پہلا نام',
      lastName: 'آخری نام',
      dateOfBirth: 'پیدائش کی تاریخ',
      gender: 'جنس',
      specialization: 'تخصص',
      qualification: 'قابلیت',
      experience: 'تجربے کے سال',
      phone: 'فون نمبر',
      address: 'پتہ',
      joinDate: 'شمولیت کی تاریخ',
      status: 'حالت',
      noTeachers: 'کوئی استاد نہیں ملا',
    },

    // کلاسز
    classes: {
      title: 'کلاسز',
      addClass: 'کلاس شامل کریں',
      editClass: 'کلاس میں ترمیم کریں',
      className: 'کلاس کا نام',
      classCode: 'کلاس کوڈ',
      gradeLevel: 'گریڈ لیول',
      capacity: 'صلاحیت',
      classTeacher: 'کلاس ٹیچر',
      room: 'کمرے کا نمبر',
      schedule: 'شیڈول',
      noClasses: 'کوئی کلاس نہیں ملی',
    },

    // مضامین
    subjects: {
      title: 'مضامین',
      addSubject: 'مضمون شامل کریں',
      editSubject: 'مضمون میں ترمیم کریں',
      subjectName: 'مضمون کا نام',
      subjectCode: 'مضمون کوڈ',
      description: 'تفصیل',
      creditHours: 'کریڈٹ گھنٹے',
      noSubjects: 'کوئی مضمون نہیں ملا',
    },

    // حاضری
    attendance: {
      title: 'حاضری',
      markAttendance: 'حاضری درج کریں',
      date: 'تاریخ',
      present: 'حاضر',
      absent: 'غیر حاضر',
      leave: 'چھٹی',
      attendanceReport: 'حاضری رپورٹ',
      percentage: 'حاضری %',
      noRecords: 'کوئی ریکارڈ نہیں',
    },

    // نمبرات
    grades: {
      title: 'نمبرات',
      enterGrades: 'نمبرات درج کریں',
      exam: 'امتحان',
      marks: 'نمبرات',
      outOf: 'سے باہر',
      grade: 'گریڈ',
      gpa: 'GPA',
      noGrades: 'کوئی نمبرات درج نہیں',
    },

    // فیس
    fees: {
      title: 'فیس',
      feeStructure: 'فیس کا ڈھانچہ',
      amount: 'رقم',
      dueDate: 'واجب الادا تاریخ',
      paidDate: 'ادا کی گئی تاریخ',
      status: 'حالت',
      paid: 'ادا شدہ',
      pending: 'زیر التوا',
      overdue: 'مقررہ سے زیادہ',
      generateInvoice: 'انوائس بنائیں',
      noFees: 'کوئی فیس ریکارڈ نہیں',
    },

    // پیغامات
    messages: {
      deleteConfirm: 'کیا آپ اس آئٹم کو حذف کرنا چاہتے ہیں؟',
      deleteSuccess: 'آئٹم کامیابی سے حذف ہو گیا',
      updateSuccess: 'کامیابی سے اپ ڈیٹ ہو گیا',
      createSuccess: 'کامیابی سے بنایا گیا',
      errorOccurred: 'ایک خرابی واقع ہوئی۔ براہ کرم دوبارہ کوشش کریں۔',
      unauthorized: 'آپ کو یہ کام کرنے کی اجازت نہیں ہے',
      sessionExpired: 'آپ کا سیشن ختم ہو گیا ہے۔ براہ کرم دوبارہ لاگ ان کریں۔',
    },
  },
};

class I18n {
  private currentLanguage: Language = 'en';

  constructor() {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ur')) {
      this.currentLanguage = savedLanguage;
    }
  }

  setLanguage(lang: Language): void {
    this.currentLanguage = lang;
    localStorage.setItem('language', lang);
  }

  getLanguage(): Language {
    return this.currentLanguage;
  }

  t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[this.currentLanguage];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  }

  getAvailableLanguages(): Array<{ code: Language; name: string }> {
    return [
      { code: 'en', name: 'English' },
      { code: 'ur', name: 'اردو' },
    ];
  }
}

export const i18n = new I18n();
export type { Language };
