output "public_ip" {
  description = "Public IP of the VM"
  value       = azurerm_public_ip.main.ip_address
}

output "ssh_command" {
  description = "SSH command to connect"
  value       = "ssh azureuser@${azurerm_public_ip.main.ip_address}"
}