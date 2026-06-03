output "public_ip" {
  description = "Public IP of the VM"
  value       = aws_instance.polyglot_vm.public_ip
}

output "public_dns" {
  description = "Public DNS of the VM"
  value       = aws_instance.polyglot_vm.public_dns
}