import supabase from '../config/supabase.js';
import { CATEGORY_TABLE } from '../models/category.js';

export const checkCategoryByName = async (name) => {
  try {
    const { data, error } = await supabase
      .from(CATEGORY_TABLE)
      .select('*')
      .eq('name', name)
      .limit(1)
      .maybeSingle();
    if (error) throw error;
    return data;
  } catch (error) {
    console.log('error--------------------->', error);
    return false;
  }
};

export const creatCategoryData = async (data) => {
  try {
    const { data: result, error } = await supabase
      .from(CATEGORY_TABLE)
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

export const deleteCategoryData = async (id) => {
  try {
    const { data, error } = await supabase
      .from(CATEGORY_TABLE)
      .delete()
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

export const getAllCategoriesData = async () => {
  try {
    const { data, error } = await supabase.from(CATEGORY_TABLE).select('*');
    if (error) throw error;
    return data;
  } catch (error) {
    console.log('error--------------------->', error);
    return false;
  }
};

export const getCategoryByIdData = async (id) => {
  try {
    const { data, error } = await supabase
      .from(CATEGORY_TABLE)
      .select('*')
      .eq('id', id)
      .maybeSingle();
    if (error) throw error;
    return data;
  } catch (error) {
    console.log('error---------------------', error);
    return false;
  }
};

export const updateCategoryByidData = async (id, data) => {
  try {
    const { data: result, error } = await supabase
      .from(CATEGORY_TABLE)
      .update(data)
      .eq('id', id)
      .select()
      .maybeSingle();
    if (error) throw error;
    return result;
  } catch (error) {
    console.log('error---------------------', error);
    return false;
  }
};
