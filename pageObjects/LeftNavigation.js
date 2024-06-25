import { BasePage } from './BasePage';

class LeftNavigation extends BasePage {
  
    async goToPatientsList() {
      await this.navigate('/patient-list');
    }
  
    async goToSymptomsLog() {
      await this.navigate('/event-logs');
    }
  
    async goToOrganization() {
      await this.navigate('/my-organization');
    }
  }
  
  export { LeftNavigation };