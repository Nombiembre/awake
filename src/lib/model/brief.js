import { randomUUID } from 'node:crypto';

export default class BriefModel {
  static async create({name, req}) {
    const id = randomUUID();
    const name = name;
    
  }
}