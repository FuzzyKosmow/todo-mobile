/* eslint-disable prettier/prettier */
//Todo payload interface
export interface ITodo {
  id: number;
  text: string;
  completed?: boolean;
}

export interface Action {
  type: string;
  payload: any;
}
