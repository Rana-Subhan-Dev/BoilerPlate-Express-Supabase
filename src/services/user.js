import supabase from '../config/supabase.js';
import { USER_TABLE } from '../models/user.js';

export const checkUserByEmailData = async (email) => {
  try {
    const { data, error } = await supabase
      .from(USER_TABLE)
      .select('*')
      .eq('email', email)
      .maybeSingle();
    if (error) throw error;
    return data;
  } catch (error) {
    console.log('error--------------------->', error);
    return false;
  }
};

export const creatUserData = async (data) => {
  try {
    const { data: result, error } = await supabase
      .from(USER_TABLE)
      .insert(data)
      .select()
      .single();
    if (error) throw error;
    return result;
  } catch (error) {
    console.log('error--------------------->', error);
    return false;
  }
};

export const updateUserPasswordData = async (id, password) => {
  try {
    const { data, error } = await supabase
      .from(USER_TABLE)
      .update({ password: password })
      .eq('id', id)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data;
  } catch (error) {
    console.log('error--------------------->', error);
    return false;
  }
};
