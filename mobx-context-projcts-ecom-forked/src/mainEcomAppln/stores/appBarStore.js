import { makeAutoObservable } from "mobx";

class AppBarStore {
  constructor() {
    makeAutoObservable(this);
  }
}
