import { processor } from "./processor";

export default class Facade {
  process(job) {
    if (/junior/i.test(job.title)) {
      return processor().processJuniorSalary(parseInt(job.years));
    }
    if (/mid/i.test(job.title)) {
      return processor().processMidSalary(parseInt(job.years));
    }
    if (/senior/i.test(job.title)) {
      return processor().processSeniorSalary(parseInt(job.years));
    }
    if (/lead/i.test(job.title)) {
      return processor().processLeadSalary(parseInt(job.years));
    }
    return "Unable to process salary. Please contact Tech Support.";
  }
}
