// Authentication utilities and helper functions

import { supabase, getCurrentUser } from '@/lib/supabase';
import { User } from '@/types/database';

interface SignUpData {
  email: string;
  password: string;
  fullName: string;
  phone?: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
}

interface SignInData {
  email: string;
  password: string;
}

interface UpdateProfileData {
  fullName?: string;
  phone?: string;
  avatarUrl?: string;
}

/**
 * Sign up a new user
 */
export const signUp = async (data: SignUpData) => {
  try {
    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (authError) throw authError;
    if (!authData.user) throw new Error('User creation failed');

    // Create user profile in users table
    const { error: profileError } = await supabase.from('users').insert({
      id: authData.user.id,
      email: data.email,
      full_name: data.fullName,
      phone: data.phone || null,
      role: data.role,
      is_active: true,
    });

    if (profileError) throw profileError;

    return authData.user;
  } catch (error) {
    throw error;
  }
};

/**
 * Sign in with email and password
 */
export const signIn = async (data: SignInData) => {
  try {
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) throw error;
    return authData.session;
  } catch (error) {
    throw error;
  }
};

/**
 * Sign in with OAuth provider
 */
export const signInWithOAuth = async (provider: 'google' | 'github') => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Send password reset email
 */
export const resetPassword = async (email: string) => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

/**
 * Update password
 */
export const updatePassword = async (newPassword: string) => {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

/**
 * Update user profile
 */
export const updateProfile = async (data: UpdateProfileData) => {
  try {
    const user = await getCurrentUser();
    if (!user) throw new Error('User not authenticated');

    const updates: Record<string, any> = {};
    if (data.fullName) updates.full_name = data.fullName;
    if (data.phone) updates.phone = data.phone;
    if (data.avatarUrl) updates.avatar_url = data.avatarUrl;

    updates.updated_at = new Date().toISOString();

    const { data: updatedUser, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single();

    if (error) throw error;
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

/**
 * Get user profile with additional details based on role
 */
export const getUserProfileWithDetails = async (userId: string) => {
  try {
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (userError) throw userError;

    let details = null;

    // Fetch role-specific details
    if (user.role === 'student') {
      const { data: student, error: studentError } = await supabase
        .from('students')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (studentError && studentError.code !== 'PGRST116') throw studentError;
      details = student;
    } else if (user.role === 'teacher') {
      const { data: teacher, error: teacherError } = await supabase
        .from('teachers')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (teacherError && teacherError.code !== 'PGRST116')
        throw teacherError;
      details = teacher;
    }

    return { user, details };
  } catch (error) {
    throw error;
  }
};

/**
 * Check if user has specific role
 */
export const hasRole = async (
  userId: string,
  role: string | string[]
): Promise<boolean> => {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .single();

    if (error) throw error;

    const roles = Array.isArray(role) ? role : [role];
    return roles.includes(user?.role);
  } catch (error) {
    return false;
  }
};

/**
 * Check if user is admin
 */
export const isAdmin = async (userId: string): Promise<boolean> => {
  return hasRole(userId, 'admin');
};

/**
 * Check if user is teacher
 */
export const isTeacher = async (userId: string): Promise<boolean> => {
  return hasRole(userId, 'teacher');
};

/**
 * Check if user is student
 */
export const isStudent = async (userId: string): Promise<boolean> => {
  return hasRole(userId, 'student');
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 */
export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate phone number
 */
export const validatePhone = (phone: string): boolean => {
  // Basic validation for international format
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};
