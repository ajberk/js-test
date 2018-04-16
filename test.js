import { expect } from 'chai';
import {sample} from './code.js';

describe("code", () => {
   it("tests stuff", () => {
       expect(sample()).to.be.true
   });
});