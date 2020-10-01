import { ModelStatic, Model, DataTypeAbstract } from "sequelize";
import { SequelizeMethod } from "sequelize/types/lib/utils";

export interface Models {
  comment: ModelStatic<Model<any, any>>;
  developer: ModelStatic<Model<any, any>>;
  desk: ModelStatic<Model<any, any>>;
}

export interface DataTypesTypes {
  STRING: DataTypeAbstract;
  INTEGER: DataTypeAbstract;
}

export interface Developer {
  id?: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;–
}

export interface SequelizeModel<T> {
  findAll: () => T[];
  create: (data: T) => T;
  findAndCountAll: () => T;
}

export type DeveloperModel = SequelizeModel<Developer>;
