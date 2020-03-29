export class UserInfo {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
  setUserInfo(nameInput, jobInput) {
    nameInput.value = this.name.textContent;
    jobInput.value = this.job.textContent;
  }
  updateUserInfo(res) {    
    this.name.textContent = res.name;
    this.job.textContent = res.about;
  }
}