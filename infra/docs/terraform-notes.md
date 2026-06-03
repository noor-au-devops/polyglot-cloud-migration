# Terraform Deployment Notes

## Infrastructure as Code — Azure

Terraform configuration successfully created for Azure deployment including:
- Resource Group
- Virtual Network + Subnet
- Network Security Group (ports 22, 3000, 5000)
- Public IP Address
- Network Interface
- Linux Virtual Machine (Ubuntu 22.04)

## Execution Results

- `terraform init` — SUCCESS
- `terraform validate` — SUCCESS  
- `terraform plan` — SUCCESS (8 resources planned)
- `terraform apply` — BLOCKED

## Reason

Azure for Students subscription has a regional deployment policy 
that restricts VM and networking resource creation. Resource Group 
creation succeeded but VNet, NSG, PublicIP, and VM resources are 
disallowed by subscription policy.

## Terraform Plan Output

Plan: 8 to add, 0 to change, 0 to destroy.