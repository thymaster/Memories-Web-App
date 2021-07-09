import React from "react";
import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //log in the user
    //change history
    window.location = "/";
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //Sign up the user
    //change history
    window.location = "/";
  } catch (error) {
    console.log(error);
  }
};
