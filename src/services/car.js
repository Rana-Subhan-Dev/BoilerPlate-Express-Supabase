import supabase from '../config/supabase.js';
import { CAR_TABLE } from '../models/car.js';

export const creatCarData = async (data) => {
  try {
    const { data: result, error } = await supabase
      .from(CAR_TABLE)
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

export const deleteCarData = async (id) => {
  try {
    const { data, error } = await supabase
      .from(CAR_TABLE)
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

export const getAllCarsData = async () => {
  try {
    // Joins the related category (equivalent of mongoose populate)
    const { data, error } = await supabase
      .from(CAR_TABLE)
      .select('*, category:categories!categoryId(*)');
    if (error) throw error;
    return data;
  } catch (error) {
    console.log('error--------------------->', error);
    return false;
  }
};

export const getCarByIdData = async (id) => {
  try {
    const { data, error } = await supabase
      .from(CAR_TABLE)
      .select('*')
      .eq('id', id)
      .maybeSingle();
    if (error) throw error;
    return data;
  } catch (error) {
    console.log('error--------------------->', error);
    return false;
  }
};

export const updateCarByidData = async (id, data) => {
  try {
    const { data: result, error } = await supabase
      .from(CAR_TABLE)
      .update(data)
      .eq('id', id)
      .select()
      .maybeSingle();
    if (error) throw error;
    return result;
  } catch (error) {
    console.log('error--------------------->', error);
    return false;
  }
};
