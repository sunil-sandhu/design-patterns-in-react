export function processor() {
  return {
    processJuniorSalary: (years) => {
      if (years < 2) {
        return 2000;
      }
      if (years >= 2 && years < 5) {
        return 2500;
      }
      if (years >= 5 && years < 8) {
        return 3000;
      }
      if (years >= 8 && years < 10) {
        return 3500;
      }
      if (years >= 10) {
        return 4000;
      }
      return "Unable to calculate salary. Please contact Tech Support";
    },
    processMidSalary: (years) => {
      if (years < 2) {
        return 2500;
      }
      if (years >= 2 && years < 5) {
        return 3000;
      }
      if (years >= 5 && years < 8) {
        return 3500;
      }
      if (years >= 8 && years < 10) {
        return 4000;
      }
      if (years >= 10) {
        return 4500;
      }
      return "Unable to calculate salary. Please contact Tech Support";
    },
    processSeniorSalary: (years) => {
      if (years < 2) {
        return 3000;
      }
      if (years >= 2 && years < 5) {
        return 3500;
      }
      if (years >= 5 && years < 8) {
        return 4000;
      }
      if (years >= 8 && years < 10) {
        return 4500;
      }
      if (years >= 10) {
        return 5000;
      }
      return "Unable to calculate salary. Please contact Tech Support";
    },
    processLeadSalary: (years) => {
      if (years < 2) {
        return 3500;
      }
      if (years >= 2 && years < 5) {
        return 4000;
      }
      if (years >= 5 && years < 8) {
        return 4500;
      }
      if (years >= 8 && years < 10) {
        return 5000;
      }
      if (years >= 10) {
        return 5500;
      }
      return "Unable to calculate salary. Please contact Tech Support";
    }
  };
}
