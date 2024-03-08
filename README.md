# Continuous Deployment (CI/CD) in Azure App Service from automated Build to Deploy process. 
![image](https://github.com/joypassos/appservice-azure-nodejs/assets/150036707/97044994-9137-400d-911c-02aeb26a81d3)


## Context Project
Simulation of a real project where the company is modernizing its structure, using its cloud applications with a journey to modernize our application deployment process. Using the principles of scalability, flexibility, and automation, we chose to leverage Terraform for infrastructure a code. The goal was to seamlessly deploy and manage our application on Azure App Service, orchestrating the entire process through a robust GitHub Action CI/CD pipeline.

## Environment Preparation
It is very necessary to verify the account Azure you’re logged in.Use configurations reference App Server Stage created before. Build your coding and application and test on-site for Azure name first.

![image](https://github.com/joypassos/appservice-azure-nodejs/assets/150036707/a0519716-040e-400a-99d6-f6a5c272456c)

You cannot see the account that is logged in after executing the command, run azure login using the command: “az login” (without quotes).

## Terraform
The next step involved defining the Azure App Service infrastructure using Terraform. Create a script for provisioning resources such as the App Service Plan, Application Insights, and the App Service itself. Terraform’s declarative syntax allowed us to capture the desired state of our infrastructure, ensuring reproducibility and eliminating manual configuration errors.

![image](https://github.com/joypassos/appservice-azure-nodejs/assets/150036707/937580aa-4c39-418e-b2d6-02211936ae83)

https://learn.microsoft.com/pt-br/azure/app-service/provision-resource-terraform?source=post_page-----00d6b887d6ae--------------------------------

Create coding terraform; init, plan, and apply. The AppService and infrastructure on Azure.

## Connecting VSCode to GitHub

Install Github for VSCode and machine. Create new repository private in GitHub. Clone repository in VSCode. Starting the Git for VSCode
It is a stepping are connecting the two tools GitHub and VSCode. Git Add, Git Commit, and Git Push finished jobs copy data applications for the repository.

## Config New stage In Azure App Service.

In the new stage download the archive “ Push Profile“ finished processing.

## GitHub Action

Create a new flush de pipeline CI\CD. Import the secret key in setting repository git.
Create Workflow using a template or your custom template.
Use configurations reference App Server Stage created before. Build your coding and application and test on-site for Azure name first.

## In conclusion
Adopting Terraform for infrastructure as code for implementing a CI/CD pipeline has proven to be a transformative experience. Combining these technologies has empowered our team to efficiently manage and scale our application on Azure App Service, bringing a new era of agility, reliability, and automation into our deployment workflows.
